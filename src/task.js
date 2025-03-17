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