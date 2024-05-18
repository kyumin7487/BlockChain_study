// Failable.d.ts 파일

declare type Result<R> = {isError: false; value: R};

declare type Failure<E> = {isError: true; value: E};

declare type Failable<R, E> = Result<R> | Failure<E>

// 해당 타입들은 추후에 블록이 생성될 때 올바르게 생성된 블록인지를 검증하기 위한 용도 입니다.
// TypeScript의 generic을 사용하여 Result타입 혹은 Failure 타입으르 가질 수 있는 Failable타입을 만들어준 것입니다.