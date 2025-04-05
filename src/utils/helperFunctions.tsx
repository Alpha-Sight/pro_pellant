"use client";

import type { ExecuteResult, IndexedTx } from "@cosmjs/cosmwasm-stargate";
import {
    Abstraxion,
    useAbstraxionAccount,
    useAbstraxionSigningClient,
} from "@burnt-labs/abstraxion";

type ExecuteResultOrUndefined = ExecuteResult | undefined;

// Added proper typing
export function extractWasmAttributes(txResult: IndexedTx) {
    // Find the wasm event in the transaction events
    const wasmEvent = txResult.events.find(event => event.type === "wasm");

    if (!wasmEvent) return {};

    // Convert array of attributes to a key-value object
    return wasmEvent.attributes.reduce((obj, attr) => {
        obj[attr.key] = attr.value;
        return obj;
    }, {} as Record<string, string>);
}
