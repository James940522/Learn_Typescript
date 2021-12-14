// function logMessage(value: any) {
//     console.log(value)
// }

// Union Type
let seho : string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number')
}

// value를 any로 해도 if절 안에서 만약 number일때를 가정한다면 그 스코프에서는 value가 number가 된다.
// 타입가드: 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정

logMessage('hello');
logMessage(100);
// logMessage(false);
// logMessage(['FDSF'])

interface Developer {
    name: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    someone.name;
}

// 유니온타입으로 인터페이스를 했을때는 공통된 속성만이 사용 가능하다 따로따로 타입가드를 써줘야 에러가 발생하지 않음