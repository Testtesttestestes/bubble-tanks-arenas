// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.prng

export interface IPRNG{
    init(param1: ByteArray): void;
    next(): number;
    dispose(): void;
    getPoolSize(): number;
    toString(): string;
   }
