import { ethers } from "ethers";

function generate(postfix) {
    let addr = "";
    let seedResult = "";
    do {
        let wallet = ethers.Wallet.createRandom();
        addr = wallet.address;
        seedResult = wallet.mnemonic.phrase;
    } while (!addr.endsWith(postfix));
    return seedResult;
}

export { generate };
