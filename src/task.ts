//Напишіть функцію find_longest_word(str), яка приймає рядок як 
// параметр і знаходить найдовше слово у рядку.

function find_longest_word(arg: string): string {
    let arr = arg.split(" ")
    console.log(arr)
    let mat = arr[0]
    for (const ar of arr) {
        if (ar.length < mat.length) {
            mat=ar
        }  
    }
    return mat
}

// console.log(find_longest_word("Web Development Tutorial"))

//Напишіть функцію second_greatest_lowest(arr_num), яка прийматиме масив
// збережених
//чисел і знаходитиме друге найменше та друге найбільше числа відповідно.

function second_greatest_lowest(num: number[]): number[] {
    const filterArr = num.filter((el,index,arrey)=>arrey.indexOf(el)===index)
    const sortArr = filterArr.sort((a, b) => a - b)
    const secmin = sortArr[1]
    const secmax = sortArr[sortArr.length - 2]
    return [secmin ,secmax ]
        
    }
// console.log(second_greatest_lowest([8, 9, 9, 10, 10, 11, 12, 12])); // 9,11


// Напишіть програму на JavaScript, щоб знайти найчастіший елемент масиву.
// Приклад масиву: const arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Приклад виведення: а (5 разів)

function element(arr: (number|string)[]):string {
    let obj:any = {}
    for (let el of arr) {
        obj[el]= 0
    }
    for (let key of Object.keys(obj)) {
        for (let el of arr) {
            if(key===el.toString())obj[key]+=1
        }
    }
console.log(obj);
let any = ''
    const maxValu:number[]=Object.values(obj)
    console.log(maxValu);
    const max = Math.max(...maxValu)
    for (let key of Object.keys(obj)) {
        if (obj[key] === max) {
        return any=`${key}:${max} paz`
    }
}
return any
}
console.log(element([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
