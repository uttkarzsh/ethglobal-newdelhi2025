
fn main(_planId: pub Field, _address: Field, contractAddress: pub Field, paid: u32, req: pub u32) {
    assert(paid > req);
    let expected_contract: Field = 0x8bd5771A45756433B86FEc0e957CEf6022176D0d;
    assert(contractAddress == expected_contract);
}