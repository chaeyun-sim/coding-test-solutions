function solution(my_string) {
    const arr = my_string.split(' ')
    let result = Number(arr[0])
    for (let i = 1; i < arr.length - 1; i += 2) {
        if (arr[i] === '+'){
            result += Number(arr[i + 1])
        } else if (arr[i] === '-') {
            result -= Number(arr[i + 1])
        }
    }
    return result
}