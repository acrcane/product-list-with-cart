export const countVowels = (srt) => {
    const arr = srt.split('').filter(a => 'aeiou'.includes(a)).length    
    return srt.split('').length - arr
}

export const capitalizeWords = (str) => {
    const charArr = str.replace(/\s+/g, ' ').split(' ').map((el) => {
        const upp = el[0].toUpperCase()
        const change =  el.slice(1)
        return upp + change
    })
    console.log(charArr.join(' '))
}

export const reverseWords = (str) => {
    const arr = str.split(/\s+/).map((el) => {
        const revStr = el.split('').reverse().join('')
        return revStr
    })

    console.log(arr.join(' '));
}

export const findLongestWord = (str) => {
    const arr = str.split(" ").reduce((prev ,el) => prev.length < el.length ? el : prev , '')
    console.log(arr);
    
}

export const countWords = (str) => {
    const arr = str.split(" ").length
    console.log(arr);
    
}

// Окей! Ось нова задача для тебе:

// Задача:
// Напиши функцію, яка перевіряє, чи є число "щасливим квитком".

// 🔹 Щасливий квиток — це число, у якого сума перших трьох цифр дорівнює сумі останніх трьох цифр.
// 🔹 Якщо число має менше 6 цифр, доповнюй його нулями на початку (наприклад, 123 → 000123).
// 🔹 Функція має повертати true або false.
// isLuckyTicket(385916)  // true (3+8+5 = 9+1+6)
// isLuckyTicket(123456)  // false (1+2+3 ≠ 4+5+6)
// isLuckyTicket(12)    
export const isLuckyTicket = (num) => {
    const arrNum = Math.floor(123456 / 10) % 10
    console.log(arrNum);
    
}

export const removeDuplicateWords = (str) => {
    const arr = str.split(' ')
    const sortet = [...new Set(arr)]
    const newStr = sortet.join(' ')
    console.log(newStr);
}