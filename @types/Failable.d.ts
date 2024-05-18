// Failable.d.ts 파일

declare type Result<R> = {isError: false; value: R};

declare type Failure<E> = {isError: true; value: E};

declare type Failable<R, E> = Result<R> | Failure<E>