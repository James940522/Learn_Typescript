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
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person) {
//     someone.name;
//     someone.age;
// }
// 유니온타입으로 인터페이스를 했을때는 공통된 속성만이 사용 가능하다 따로따로 타입가드를 써줘야 에러가 발생하지 않음

function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.age;
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34})
// askSomeone({ name: '캡틴', age: 100 });

//인터섹션
let capt: string & number & boolean; // <-never라고 뜨는데 string number boolean 타입이 동시에 적용되지 않기때문

//차이점
// 유니온 타입으로 타입을 설정하였을때에는 지정한 타입내에서 위와 같이 두가지의 속성 타입을 사용하여 함수 실행이 가능하다. 하지만 앞서 설명하였듯이 함수 내부 스코프에서는 같은 속성으로 접근이 불가능하여 타입가드를 사용해야한다.
// 인터섹션으로 타입을 설정하였을때에는 두 인터페이스 타입을 모두 포함한 속성과 타입을 전달해야지만 함수 실행이 가능하다. 반면 함수 내부 스코프에서는 하나의 파라미터로 모든 속성에 접근이 가능하다.