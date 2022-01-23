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
