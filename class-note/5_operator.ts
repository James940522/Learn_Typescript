// function logMessage(value: any) {
//     console.log(value)
// }

// Union Type

function logMessage(value: string | number | boolean) {
    console.log(value);
}

logMessage('hello');
logMessage(100);
logMessage(false);