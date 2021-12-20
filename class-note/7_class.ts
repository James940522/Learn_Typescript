class Person {
    // 클래스 문법은 js와 동일하나 생성자 함수 위에 사용할 변수 타입을 설정해준다.

    // 변수의 유효범위 class 내부에서만 사용 - private 기본적으로는 public
    name: string;
    age: number;
    
    constructor( name: string, age: number ) {
        this.name = name;
        this.age = age;
    }
}