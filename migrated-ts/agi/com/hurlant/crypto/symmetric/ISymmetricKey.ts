// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export interface ISymmetricKey{
    encrypt(param1: ByteArray, param2: number = 0): void;
    dispose(): void;
    getBlockSize(): number;
    toString(): string;
    decrypt(param1: ByteArray, param2: number = 0): void;
   }
