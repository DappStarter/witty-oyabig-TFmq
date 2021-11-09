require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture street royal machine essay grunt light army gesture'; 
let testAccounts = [
"0x6f69cc48991c0e94c2ffa1e316fe97a90adbd0949c6c9e4e24e590288b4fcf04",
"0x178cc33474fb71d979d551d2027c349eb7c8385085901805ab3457d1fbfab15b",
"0x0b6feaf3829adde6e69600176a174153c2ebae1f45633605cece46e80035953a",
"0x087bb6f1674b47657e6fd703b03fb32a431f5980c4b97eae612b1abc3d761160",
"0x03ba780147756be1e176f9135cf4984c67c0e4d789931fd6a172d855d4d93a4d",
"0x677a6d9deafbac3b7d874413069a6867621eff45e1d1b00ac996a0c34bbab9e5",
"0x00b32824242945da654c18bfb9f33921f3ad11a5b96a0b66eebcf76509bc51af",
"0xbdb60f31cf5f4fa192c17f95eefc45d454f22ebe8a9bf90a5e1168c3f6694e99",
"0xb8d14aca908307722ced476c8dac6e99f8fca88d91ce2a9a281ff38b0d2d539c",
"0xa6ecd8772f510f7c0527981d03ca51b056294137539dbd2cc77213087df4adce"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

