"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import {AbstraxionProvider} from "@burnt-labs/abstraxion";

import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";

const inter = Inter({ subsets: ['latin'] })


const treasuryConfig = {
    // treasury: "xion1h6jj96e5m07c4nz22jlu4tasegp65f64rqk6f4tzf89ppjk98d8qyu86cd",  // try with any of these treasury to see which one will work, i created another so we use to test. but i guess its not the treasury issue
    treasury: "xion1y0n26csuvmf3f58lq0gs4uw2l4jqfnur3mzsahqnayq0ujjdwpusvqxxl0",
    rpcUrl: "https://rpc.xion-testnet-2.burnt.com/",
    restUrl: "https://api.xion-testnet-2.burnt.com/"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AbstraxionProvider config={treasuryConfig}>
                    {children}
                </AbstraxionProvider>
            </body>
        </html>
    )
}

