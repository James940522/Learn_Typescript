// 숫자형 이넘 - 기본적으로 enum에서 속성에 아무런 값을 설정하지 않으면 숫자 값이 된다. 
enum Shoes {
    // 기본값을 설정 가능하다.
    Nike = 10, // 10
    Adidas, // 11
    Sth, // 12
}

// 속성이 하나씩 추가될수록 값이 1씩 증가한다.

let myShoes = Shoes.Nike

console.log(myShoes); // 0;

// 문자형 이넘 - 속성에 문자열 값을 할당시켜주면 해당 문자가 출력된다.

enum Brand {
    memi = '메종 미네드',
    meki = '메종 키츠네'
}

let myBrand = Brand.meki

console.log(myBrand); // 메종 키츠네