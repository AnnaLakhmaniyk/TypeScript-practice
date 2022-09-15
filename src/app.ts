let age:number;
age = 50;
let names:string;
names = 'Max';
let toggle: boolean;
toggle = true;
let empty:null;
empty = null;
let notInitialize:undefined;
notInitialize = undefined;

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

let person: [string, number];
person = ['Max', 21];

let union: string | number;


function showMessage(message:string):void {
  console.log(message);
}


function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}


type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  }
}