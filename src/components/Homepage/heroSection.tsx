"use client";

import {
    Abstraxion,
    useAbstraxionAccount,
    useAbstraxionSigningClient,
    useModal
} from "@burnt-labs/abstraxion";
import {Button} from "@burnt-labs/ui";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {calculateFee} from "@cosmjs/stargate";
import {ClipLoader} from "react-spinners";
import type { ExecuteResult, IndexedTx } from "@cosmjs/cosmwasm-stargate";

type ExecuteResultOrUndefined = ExecuteResult | undefined;

const Hero: React.FC = () => {
    // Fixed destructuring
    const { data: account, isConnected, isConnecting } = useAbstraxionAccount();
    const bech32Address = account?.bech32Address;
    const {client, logout} = useAbstraxionSigningClient();

    const [executeResult, setExecuteResult] = useState<ExecuteResultOrUndefined>(undefined);
    const blockExplorerUrl = `https://www.mintscan.io/xion-testnet/tx/${executeResult?.transactionHash}`;

    // Fixed variable name for consistency
    const [showModal, setShowModal] = useModal();

    const contractAddress = "xion1pfqrut39hcrfhnd0a975wpcy25t7m2u5ljuxsguv2drh2wca0jqszxqnvs";
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Debug logging
    useEffect(() => {
        console.log({isConnected, isConnecting, address: bech32Address});
    }, [isConnected, isConnecting, bech32Address]);

    // Wait for BOTH client AND address before login
    useEffect(() => {
        if (client && bech32Address) {
            handleLogin();
        }
    }, [client, bech32Address]);

    const handleLogin = async () => {
        if (!client || !bech32Address) {
            setError("Wallet not properly connected");
            return;
        }

        setLoading(true);
        setError(null);

        const msg = { register_user: {} };

        try {
            // No optional chaining since we've checked client exists
            const res = await client.execute(
                bech32Address,
                contractAddress,
                msg,
                "auto"
            );

            console.log("Transaction submitted:", res);
            setExecuteResult(res);

            const txHash = res.transactionHash;

            try {
                // Poll for transaction result
                const txResult = await pollForTransaction(txHash);

                // Parse the response attributes
                const attributes = extractWasmAttributes(txResult);

                if (attributes?.is_existing_user === "true") {
                    console.log("User already exists:", attributes);
                } else {
                    console.log("User successfully registered:", attributes);
                }
            } catch (pollError) {
                console.error("Failed to get transaction result:", pollError);
                setError("Transaction may have been submitted but couldn't verify result. Try continuing anyway.");
            }
        } catch (error) {
            console.error("Registration error:", error);
            if (error instanceof Error) {
                setError(error.message || "Registration failed");
            } else {
                setError("Registration failed");
            }
        } finally {
            setLoading(false);
        }
    };

    // Helper function with proper TypeScript typing
    async function pollForTransaction(txHash: string, maxAttempts = 10, interval = 2000): Promise<IndexedTx> {
        let attempts = 0;

        while (attempts < maxAttempts) {
            try {
                if (!client) throw new Error("Client not available");

                console.log(`Polling attempt ${attempts + 1}/${maxAttempts}`);
                const result = await client.getTx(txHash);

                if (result) {
                    console.log("Transaction confirmed:", result);
                    return result;
                }
            } catch (error) {
                console.log(`Polling attempt ${attempts + 1} failed, retrying...`);
            }

            attempts++;
            await new Promise(resolve => setTimeout(resolve, interval));
        }

        throw new Error("Transaction confirmation timed out");
    }

    // Added proper typing
    function extractWasmAttributes(txResult: IndexedTx) {
        // Find the wasm event in the transaction events
        const wasmEvent = txResult.events.find(event => event.type === "wasm");

        if (!wasmEvent) return {};

        // Convert array of attributes to a key-value object
        return wasmEvent.attributes.reduce((obj, attr) => {
            obj[attr.key] = attr.value;
            return obj;
        }, {} as Record<string, string>);
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
                    {bech32Address ? (
                        loading ? (
                            <ClipLoader
                                color={"#000000"}
                                loading={loading}
                                size={40}
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
                            onClick={() => setShowModal(true)}
                            structure="base"
                        >
                            Login
                        </Button>
                    )}
                </div>
            </div>

            {/* CRITICAL: Add the Abstraxion modal component */}
            <Abstraxion onClose={() => setShowModal(false)} />

            {/* Add error display */}
            {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-600 rounded">
                    {error}
                </div>
            )}
        </div>
    );
};

export default Hero;
