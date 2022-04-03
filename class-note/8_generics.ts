function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText<string>("ㅎㅏ이");

//interface 제네릭
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: "하이", selected: true };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   return text;
// }

// logTextLength<string>(["hi", "hello"]);

//제네릭의 정의된 타입 제한
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength("a");
logTextLength({ value: "가나다라마바사아자차", length: 10 });

// keyof 타입 제한
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
// ShoppingItem의 타입중 하나를 타입으로 갖는다
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>("a");
getShoppingItemOption("price");
