require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space story cost scrub protect gloom drip equal gate'; 
let testAccounts = [
"0xaf27c833c21c1415d3cb3882e9bd90718af96d8a5ff5fd62a3fe73f2eb2e709b",
"0x31c8a4e1baba443a2673baf4edae4d800a14dd678cfa0db7241bc527266ca9a5",
"0x8915b7ab5d574e1f58a4f5ae88443841dd8938a0271ecbe1e20434f34edf4650",
"0xfc3f91a2f996340ed26e53889f7f2a38a7fc562d1e86e9d8657ef7d6cbda6507",
"0x6d0ce57b6a287d34674e96a63176f287a8208f5b92aae5b5246bad5441218c6e",
"0x7bbe06c2cf159019eb7e8799ebc33f3b523bf857b59ca249266a31bbd86e8e06",
"0x28b7a60f15848f777a34b021fbd00fc250f757395831787965ed4388c8d6829e",
"0x1bdf2d812ad5bea8c2b9463430f4835d434212091ea73be98279da28ca8105eb",
"0xb3127bdacddf352fd03176ef4aad61b60cb9a107a7644c07fe2226144cbcd0b2",
"0xd38bf9d19021805085c5fe74181039723201563223fcf9f86ec9593e77883427"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


