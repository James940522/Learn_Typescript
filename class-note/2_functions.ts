// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//     return a + b;
// }
// sum(10, 20)

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수의 타입을 정의하는 방식
function sum(a: number, b: number): number {
    return a + b;
}
sum(10, 20); // 30
// 함수를 정의할때 인수를 2개로 받기로 하였으니, 이 보다 많거나 적으면 에러가 발생

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {

}
// 특정 파라미터를 선택적으로 사용하고싶을때에는 ?를 사용한다.