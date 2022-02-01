// function logText(text: string): string {
//   console.log(text);
//   return text;
// }
// logText("fdsa");

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
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}

logTextLength<string>(["hi", "hello"]);
