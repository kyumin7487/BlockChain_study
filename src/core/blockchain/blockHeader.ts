// blockHeader.ts 파일

export class BlockHeader implements IBlockHeader {
    public version: string;
    public height: number;
    public timestamp: number;
    public previosHash: string;

    constructor(_previousBlock: IBlock) {
        this.version = BlockHeader.getVersion();
        this.timestamp = BlockHeader.getTimestamp();
        this.height = _previousBlock.height + 1;
        this.previosHash = _previousBlock.hash;
    }
    public  static  getVersion() {
        return '1.0.0';
    }
    public static getTimestamp() {
        return new Date().getTime();
    }
}

// Block.d.ts파일에서 declare를 사용해 interface를 선언했기 때문에 전역에서 iBlockHeader 타입을 가져와서 사용할 수 있다.
// static메소드를 사용해서 인스턴스에 해당 메소득 포함되지 않기 때문에 인스턴스를 생성할 때마다 메소드가 생성되는 비효율성을 방지 한다.