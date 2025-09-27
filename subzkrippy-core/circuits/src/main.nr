fn main(_planId: pub Field, _userId: Field, _address: Field, _contractAddress: pub Field, paid: u32, req: pub u32) {
    assert(paid - req >= 0);
}


