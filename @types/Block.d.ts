// Block.d.ts 파일

declare interface IBlockHeader {
    version: string;
    height: number;
    timestamp: number;
    previousHash: string;
}

// nonce와 difficulty는 채굴 난이도와 마이닝 부분을 구현할 때 사용하게 되는 속성
declare interface IBlock extends IBlockHeader {
    mekleRoot: string;
    hash: string;
    nonce: number;
    difficulty: number;
    data: string[];
}

