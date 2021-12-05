// JS 문자열 선언
// let str = 'hello';

// TS 문자열 선언
let str: string = 'hello';
// str변수의 값은 문자열로 간주하겠다.

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3]
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk']
let items: number[] = [1, 2, 3]

// TS 튜플 - 배열의 특정 위치에 특정 타입을 각각 지정하는 것 을 튜플이라 한다.
let address: [string, number] = ['gangnam', 12];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };
let person: { name: string, age: number} = {
    name: 'Thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;