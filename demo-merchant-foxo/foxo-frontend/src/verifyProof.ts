import { Noir } from "@noir-lang/noir_js";
import { UltraHonkBackend } from "@aztec/bb.js";
import type { CompiledCircuit } from "@noir-lang/types";
import circuit from "./../../../subzkrippy-core/circuits/target/circuits.json";

export async function verifyProof(proof: {proof: Uint8Array, publicInputs: string[]}): Promise<{isValid: boolean}>{
    const honk = new UltraHonkBackend(circuit.bytecode, {threads: 1});
    const isValid = await honk.verifyProof(proof);
    return {isValid};
}