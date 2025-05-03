/*────────────────────────────────────────────────────────────────────────────────────────────────*/

Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
Object.defineProperty(global, '$', {value:{}});

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

require('../lib/crypto'); // Работа с шифрованием данных
require('../lib/base64'); // Работа с 64-ричной системой счисления

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

let json = JSON.stringify({
    visible: false,
    txID:
    'cbf76171dcf5f8fe00b4911a1a6cc4d2a4448e3348f44d240ca20af06025d0f2',
    raw_data: {
        contract: [ [Object] ],
        ref_block_bytes: '6394',
        ref_block_hash: '8ad966a9b0b6a5d1',
        expiration: 1580983512000,
        timestamp: 1580983453441
    },
    raw_data_hex: '0a02639422088ad966a9b0b6a5d140c0d7d7cf812e5a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a15417946f66d0fc67924da0ac9936183ab3b07c811261215418cb2ab880d4fa7b33c9645a2276dc9b192902e2d186470818ed4cf812e',
    signature: [ '47b1f77b3e30cfbbfa41d795dd34475865240617dd1c5a7bad526f5fd89e52cd057c80b665cc2431efab53520e2b1b92a0425033baee915df858ca1c588b0a1800' ]
});
_=$.crypto.en(
    'uuZYatLST4ScagteVUzzVmWtTLMWPQY7aTsWTMRxjaov',
    json
);
_=json

// f4804294ecd0e0f08eab7690d2a
//                            6ee69
