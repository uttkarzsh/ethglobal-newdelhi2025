import { Noir } from "@noir-lang/noir_js";
import { UltraHonkBackend } from "@aztec/bb.js";
import circuit from "./../../../circuits/target/circuits.json";
import type { CompiledCircuit }  from "@noir-lang/noir_js";


export async function generateProof (_planId: string, _address: string, contractAddress: string, paid:string, req: string) : Promise<{proof: Uint8Array<ArrayBufferLike>, publicInputs: string[]}>{
    const noir = new Noir(circuit as CompiledCircuit);
    const honk = new UltraHonkBackend(circuit.bytecode, {threads: 1});

    const inputs = {
        _planId: _planId,
        _address: _address,
        contractAddress: contractAddress,
        paid: Number(paid),
        req: Number(req),
    }

    const {witness} = await noir.execute(inputs);
    const {proof, publicInputs} = await honk.generateProof(witness);


    return {proof, publicInputs};
}