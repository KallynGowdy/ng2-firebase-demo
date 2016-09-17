SystemJS.config({
    nodeConfig: {
        "paths": {
            "ng2-firebase-demo-ts/": "app/"
        }
    },
    devConfig: {
        "map": {
            "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.2",
            "ts": "github:frankwallis/plugin-typescript@4.0.2",
            "typescript": "npm:typescript@1.8.7"
        },
        "packages": {
            "github:frankwallis/plugin-typescript@4.0.2": {
                "map": {
                    "typescript": "npm:typescript@1.8.7"
                }
            }
        }
    },
    transpiler: "plugin-typescript",
    typescriptOptions: {
        "module": "system",
        "experimentalDecorators": true,
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "removeComments": false,
        "noImplicitAny": false
    },
    packages: {
        "ng2-firebase-demo-ts": {
            "main": "boot",
            "defaultExtension": "ts"
        },
        "bundles": {
            "main": "main",
            "defaultExtension": "js"
        },
        "npm:es6-promise@3.1.2": {
            "map": {}
        }
    },
    map: {
        "@angular": "npm:@angular@2.0.0",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "es6-promise": "npm:es6-promise@3.1.2",
        "es6-shim": "npm:es6-shim@0.35.1",
        "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0"
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "@angular/forms": "npm:@angular/forms@2.0.0",
        "reflect-metadata": "npm:reflect-metadata@0.1.8",
        "os": "github:jspm/nodelibs-os@0.2.0-alpha",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0",
        "@angular/common": "npm:@angular/common@2.0.0",
        "@angular/compiler": "npm:@angular/compiler@2.0.0",
        "@angular/core": "npm:@angular/core@2.0.0",
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "http": "github:jspm/nodelibs-http@0.2.0-alpha",
        "https": "github:jspm/nodelibs-https@0.2.0-alpha",
        "net": "github:jspm/nodelibs-net@0.2.0-alpha",
        "ng2-firebase": "npm:ng2-firebase@1.0.0-beta.1",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "rxjs": "npm:rxjs@5.0.0-beta.12",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
        "timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
        "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
        "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
        "url": "github:jspm/nodelibs-url@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
        "zone.js": "npm:zone.js@0.6.23"
    },
    packages: {
        "github:jspm/nodelibs-timers@0.2.0-alpha": {
            "map": {
                "timers-browserify": "npm:timers-browserify@1.4.2"
            }
        },
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.9.1"
            }
        },
        "github:jspm/nodelibs-crypto@0.2.0-alpha": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "github:jspm/nodelibs-http@0.2.0-alpha": {
            "map": {
                "http-browserify": "npm:stream-http@2.4.0"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
            "map": {
                "string_decoder-browserify": "npm:string_decoder@0.10.31"
            }
        },
        "github:jspm/nodelibs-url@0.2.0-alpha": {
            "map": {
                "url-browserify": "npm:url@0.11.0"
            }
        },
        "npm:asn1.js@4.8.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "buffer-xor": "npm:buffer-xor@1.0.3",
                "cipher-base": "npm:cipher-base@1.0.3",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "inherits": "npm:inherits@2.0.3",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "browserify-des": "npm:browserify-des@1.0.0",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.3",
                "des.js": "npm:des.js@1.0.0",
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:browserify-sign@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "elliptic": "npm:elliptic@6.3.2",
                "inherits": "npm:inherits@2.0.3",
                "parse-asn1": "npm:parse-asn1@5.0.0"
            }
        },
        "npm:buffer-xor@1.0.3": {
            "map": {
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:buffer@4.9.1": {
            "map": {
                "base64-js": "npm:base64-js@1.1.2",
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0"
            }
        },
        "npm:cipher-base@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:core-util-is@1.0.2": {
            "map": {}
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "elliptic": "npm:elliptic@6.3.2"
            }
        },
        "npm:create-hash@1.1.2": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.3",
                "inherits": "npm:inherits@2.0.3",
                "ripemd160": "npm:ripemd160@1.0.1",
                "sha.js": "npm:sha.js@2.4.5"
            }
        },
        "npm:create-hmac@1.1.4": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "browserify-sign": "npm:browserify-sign@4.0.0",
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "inherits": "npm:inherits@2.0.3",
                "pbkdf2": "npm:pbkdf2@3.0.7",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "miller-rabin": "npm:miller-rabin@4.0.0",
                "randombytes": "npm:randombytes@2.0.3",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:elliptic@6.3.2": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "brorand": "npm:brorand@1.0.6",
                "hash.js": "npm:hash.js@1.0.3",
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:faye-websocket@0.11.0": {
            "map": {
                "websocket-driver": "npm:websocket-driver@0.6.5"
            }
        },
        "npm:firebase@2.4.2": {
            "map": {
                "faye-websocket": "npm:faye-websocket@0.11.0"
            }
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "brorand": "npm:brorand@1.0.6"
            }
        },
        "npm:ng2-firebase@1.0.0-beta.1": {
            "map": {
                "@angular/core": "npm:@angular/core@2.0.0",
                "firebase": "npm:firebase@2.4.2",
                "rxjs": "npm:rxjs@5.0.0-beta.12"
            }
        },
        "npm:parse-asn1@5.0.0": {
            "map": {
                "asn1.js": "npm:asn1.js@4.8.0",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "pbkdf2": "npm:pbkdf2@3.0.7",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:pbkdf2@3.0.7": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.4"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "parse-asn1": "npm:parse-asn1@5.0.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:punycode@1.3.2": {
            "map": {}
        },
        "npm:randombytes@2.0.3": {
            "map": {}
        },
        "npm:readable-stream@2.1.5": {
            "map": {
                "buffer-shims": "npm:buffer-shims@1.0.0",
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.3",
                "isarray": "npm:isarray@1.0.0",
                "process-nextick-args": "npm:process-nextick-args@1.0.7",
                "string_decoder": "npm:string_decoder@0.10.31",
                "util-deprecate": "npm:util-deprecate@1.0.2"
            }
        },
        "npm:ripemd160@1.0.1": {
            "map": {}
        },
        "npm:rxjs@5.0.0-beta.12": {
            "map": {
                "symbol-observable": "npm:symbol-observable@1.0.2"
            }
        },
        "npm:sha.js@2.4.5": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "readable-stream": "npm:readable-stream@2.1.5"
            }
        },
        "npm:stream-http@2.4.0": {
            "map": {
                "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
                "inherits": "npm:inherits@2.0.3",
                "readable-stream": "npm:readable-stream@2.1.5",
                "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                "xtend": "npm:xtend@4.0.1"
            }
        },
        "npm:string_decoder@0.10.31": {
            "map": {}
        },
        "npm:timers-browserify@1.4.2": {
            "map": {
                "process": "npm:process@0.11.9"
            }
        },
        "npm:url@0.11.0": {
            "map": {
                "punycode": "npm:punycode@1.3.2",
                "querystring": "npm:querystring@0.2.0"
            }
        },
        "npm:websocket-driver@0.6.5": {
            "map": {
                "websocket-extensions": "npm:websocket-extensions@0.1.1"
            }
        },
        "npm:websocket-extensions@0.1.1": {
            "map": {}
        },
        "github:jspm/nodelibs-os@0.2.0-alpha": {
            "map": {
                "os-browserify": "npm:os-browserify@0.2.1"
            }
        }
    }
});