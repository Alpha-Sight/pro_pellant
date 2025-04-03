"use client";

import {
    useAbstraxionAccount, useAbstraxionSigningClient,
    useModal
} from "@burnt-labs/abstraxion";
import {Button} from "@burnt-labs/ui";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {calculateFee} from "@cosmjs/stargate";
import {ClipLoader} from "react-spinners";
import type { ExecuteResult } from "@cosmjs/cosmwasm-stargate";

type ExecuteResultOrUndefined = ExecuteResult | undefined;

const Hero: React.FC = () => {
    // Abstraxion hooks
    const {data: {bech32Address}, isConnected, isConnecting} = useAbstraxionAccount();
    const {client, signArb, logout} = useAbstraxionSigningClient();

    const [executeResult, setExecuteResult] = useState<ExecuteResultOrUndefined>(undefined);

    const blockExplorerUrl = `https://www.mintscan.io/xion-testnet/tx/${executeResult?.transactionHash}`;

    // General state hooks
    const [, setShow] = useModal();

    // only added for testing
    useEffect(() => {
        console.log({isConnected, isConnecting});
    }, [isConnected, isConnecting])

    const contractAddress = "xion1pfqrut39hcrfhnd0a975wpcy25t7m2u5ljuxsguv2drh2wca0jqszxqnvs";

    useEffect(() => {
        if (client) {
            handleLogin();
        }
    }, [client]);

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        const msg = { register_user: {} }

        console.log(client)

        // calculateFee(200000, "0.025uxion"),
        try {
            const res = await client?.execute(
                bech32Address,
                contractAddress,
                msg,
                calculateFee(200000, "0.025uxion")
            );

            console.log("Res: ", res);

            const txHash = res.transactionHash;

            // Step 3: Show loading state
            setLoading(true);
            console.log("Transaction submitted, waiting for confirmation...");

            // Step 4: Poll for transaction result
            const txResult = await pollForTransaction(txHash);

            // Step 5: Parse the response attributes
            const attributes = extractWasmAttributes(txResult);

            // Step 6: Handle different response cases
            if (attributes.is_existing_user === "true") {
                console.log("User already exists");
                // // Extract user details from attributes
                // setUserData({
                //     name: attributes.name,
                //     tier: attributes.tier,
                //     cvCreditsUsed: attributes.cvs_generated,
                //     cvCreditsLimit: attributes.cv_limit
                // });
            } else {
                console.log("User successfully registered");
                // Similar extraction for new users
            }

            return { success: true, attributes };
        } catch (error) {
            console.error("Registration error:", error);
            console.log("Registration failed: " + error.message);
            return { success: false, error };
        } finally {
            setLoading(false);
        }
    }

    // Helper function to poll for transaction completion
    async function pollForTransaction(txHash, maxAttempts = 10, interval = 2000) {
        let attempts = 0;

        while (attempts < maxAttempts) {
            try {
                // Query transaction using your Cosmos SDK client
                const result = await client?.getTx(txHash);

                if (result) {
                    return result;
                }
            } catch (error) {
                // Transaction not yet processed, continue polling
            }

            attempts++;
            await new Promise(resolve => setTimeout(resolve, interval));
        }

        throw new Error("Transaction confirmation timed out");
    }

    // Extract wasm attributes from transaction result
    function extractWasmAttributes(txResult) {
        // Find the wasm event in the transaction events
        const wasmEvent = txResult.events.find(event => event.type === "wasm");

        if (!wasmEvent) return {};

        // Convert array of attributes to a key-value object
        return wasmEvent.attributes.reduce((obj, attr) => {
            obj[attr.key] = attr.value;
            return obj;
        }, {});
    }

    return (
        <div className='flex items-center flex-col justify-center mt-16 md:mt-[8rem] text-[#1C1D24] text-center px-5 md:px-16'>
            <div className='flex flex-col gap-[2.9rem]'>
                <h3 className='font-bold leading-normal text-[2.8rem] md:text-6xl lg:text-center lg:text-[4.71rem] lg:leading-[8.35rem] md:leading-[5rem] text-left'>
                    AI-Powered Resumes, Tailored to You
                </h3>
                <p className='font-normal text-left lg:text-center md:text-3xl lg:text-[2.34rem] md:leading-10 lg:leading-[3.51rem] lg:mb-4'>
                    Generate a professional, tailored resume in minutes. Just share your skills and job details, and let our AI
                    build a standout CV designed to impress.
                </p>

                <div className="max-w-[50vw] mx-auto">
                    {
                        bech32Address ? (

                            loading ? (
                                <ClipLoader
                                    color={"#000000"}
                                    loading={loading}
                                    size={50}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                            ) : (
                                <div className="space-y-3 flex flex-col items-center w-[10rem]">
                                    <button
                                        onClick={() => router.push("/dashboard")}
                                        className="flex w-full items-center justify-center bg-[#1C1D24] text-white font-semibold px-5 py-3 rounded-[8px]"
                                    >
                                        Continue
                                    </button>

                                    <button
                                        onClick={() => logout && logout()}
                                        className="flex w-full items-center justify-center bg-red-200 text-red-600 font-semibold px-5 py-3 rounded-[8px]"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )
                        ) : (
                            <Button
                                style={{
                                    backgroundColor: "#1C1D24",
                                    color: "white",
                                    fontWeight: "600",
                                }}

                                onClick={() => {
                                    setShow(true)
                                }}

                                structure="base"
                            >
                                Login
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero
