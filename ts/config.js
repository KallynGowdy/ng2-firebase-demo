SystemJS.config({
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
        }
    },
    map: {
        "angular2": "npm:angular2@2.0.0-beta.9"
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
        "es6-promise": "npm:es6-promise@3.1.2",
        "es6-shim": "npm:es6-shim@0.33.13",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "http": "github:jspm/nodelibs-http@0.2.0-alpha",
        "https": "github:jspm/nodelibs-https@0.2.0-alpha",
        "net": "github:jspm/nodelibs-net@0.2.0-alpha",
        "ng2-firebase": "npm:ng2-firebase@0.7.5",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.2",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "rxjs": "npm:rxjs@5.0.0-beta.2",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
        "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
        "ts": "github:frankwallis/plugin-typescript@4.0.2",
        "typescript": "npm:typescript@1.8.7",
        "reflect-metadata": "npm:reflect-metadata@0.1.2",
        "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
        "url": "github:jspm/nodelibs-url@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
        "zone.js": "npm:zone.js@0.5.15"
    },
    packages: {
        "github:frankwallis/plugin-typescript@4.0.2": {
            "map": {
                "typescript": "npm:typescript@1.8.7"
            }
        },
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.5.0"
            }
        },
        "github:jspm/nodelibs-crypto@0.2.0-alpha": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "github:jspm/nodelibs-http@0.2.0-alpha": {
            "map": {
                "http-browserify": "npm:stream-http@2.2.0"
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
        "npm:angular2@2.0.0-beta.9": {
            "map": {
                "es6-promise": "npm:es6-promise@3.1.2",
                "es6-shim": "npm:es6-shim@0.33.13",
                "reflect-metadata": "npm:reflect-metadata@0.1.2",
                "rxjs": "npm:rxjs@5.0.0-beta.2",
                "zone.js": "npm:zone.js@0.5.15"
            }
        },
        "npm:asn1.js@4.5.2": {
            "map": {
                "bn.js": "npm:bn.js@4.11.0",
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:bn.js@4.11.0": {
            "map": {}
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "buffer-xor": "npm:buffer-xor@1.0.3",
                "cipher-base": "npm:cipher-base@1.0.2",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "inherits": "npm:inherits@2.0.1",
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
                "cipher-base": "npm:cipher-base@1.0.2",
                "des.js": "npm:des.js@1.0.0",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:browserify-sign@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.0",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "elliptic": "npm:elliptic@6.2.3",
                "inherits": "npm:inherits@2.0.1",
                "parse-asn1": "npm:parse-asn1@5.0.0"
            }
        },
        "npm:buffer-xor@1.0.3": {
            "map": {
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:buffer@4.5.0": {
            "map": {
                "base64-js": "npm:base64-js@1.1.1",
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0"
            }
        },
        "npm:cipher-base@1.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:core-util-is@1.0.2": {
            "map": {}
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.0",
                "elliptic": "npm:elliptic@6.2.3"
            }
        },
        "npm:create-hash@1.1.2": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "ripemd160": "npm:ripemd160@1.0.1",
                "sha.js": "npm:sha.js@2.4.5"
            }
        },
        "npm:create-hmac@1.1.4": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.1"
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
                "inherits": "npm:inherits@2.0.1",
                "pbkdf2": "npm:pbkdf2@3.0.4",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "bn.js": "npm:bn.js@4.11.0",
                "miller-rabin": "npm:miller-rabin@4.0.0",
                "randombytes": "npm:randombytes@2.0.3",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:elliptic@6.2.3": {
            "map": {
                "bn.js": "npm:bn.js@4.11.0",
                "brorand": "npm:brorand@1.0.5",
                "hash.js": "npm:hash.js@1.0.3",
                "inherits": "npm:inherits@2.0.1",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:es6-promise@3.1.2": {
            "map": {}
        },
        "npm:es6-shim@0.33.13": {
            "map": {}
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:faye-websocket@0.11.0": {
            "map": {
                "websocket-driver": "npm:websocket-driver@0.6.4"
            }
        },
        "npm:firebase@2.3.2": {
            "map": {
                "faye-websocket": "npm:faye-websocket@0.11.0"
            }
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:inherits@2.0.1": {
            "map": {}
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.0",
                "brorand": "npm:brorand@1.0.5"
            }
        },
        "npm:ng2-firebase@0.7.5": {
            "map": {
                "angular2": "npm:angular2@2.0.0-beta.9",
                "firebase": "npm:firebase@2.3.2",
                "rxjs": "npm:rxjs@5.0.0-beta.2",
                "typescript": "npm:typescript@1.8.7"
            }
        },
        "npm:parse-asn1@5.0.0": {
            "map": {
                "asn1.js": "npm:asn1.js@4.5.2",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "pbkdf2": "npm:pbkdf2@3.0.4",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:pbkdf2@3.0.4": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.4",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.0",
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
        "npm:readable-stream@2.0.5": {
            "map": {
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@0.0.1",
                "process-nextick-args": "npm:process-nextick-args@1.0.6",
                "string_decoder": "npm:string_decoder@0.10.31",
                "util-deprecate": "npm:util-deprecate@1.0.2"
            }
        },
        "npm:reflect-metadata@0.1.2": {
            "map": {}
        },
        "npm:ripemd160@1.0.1": {
            "map": {}
        },
        "npm:rxjs@5.0.0-beta.2": {
            "map": {}
        },
        "npm:sha.js@2.4.5": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.0.5"
            }
        },
        "npm:stream-http@2.2.0": {
            "map": {
                "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
                "inherits": "npm:inherits@2.0.1",
                "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                "xtend": "npm:xtend@4.0.1"
            }
        },
        "npm:string_decoder@0.10.31": {
            "map": {}
        },
        "npm:url@0.11.0": {
            "map": {
                "punycode": "npm:punycode@1.3.2",
                "querystring": "npm:querystring@0.2.0"
            }
        },
        "npm:websocket-driver@0.6.4": {
            "map": {
                "websocket-extensions": "npm:websocket-extensions@0.1.1"
            }
        },
        "npm:websocket-extensions@0.1.1": {
            "map": {}
        },
        "npm:zone.js@0.5.15": {
            "map": {
                "es6-promise": "npm:es6-promise@3.1.2"
            }
        }
    }
});