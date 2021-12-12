// interface PersonA {
//     name: string;
//     age: number;
// }

type PersonA = {
    name: string;
    age: number;
}

let seh: PersonA = {
    name: '세호',
    age: 30
}

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
    
}