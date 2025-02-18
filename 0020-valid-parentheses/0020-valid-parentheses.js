// s 순회하며
// open bracket 순서대로 스택에 push
// 대응하는 close bracket일 경우 pop
// s 순회가 끝났을 때 스택이 비어있으면 true
// 비어있지 않으면 false
/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function(s) {
    const brackets = {'(' : ')', '{' : '}', '[' : ']'}
    let stack = []

    for (let string of s){
        if (string in brackets) {
            stack.push(string)
        } else {
            stack.push(string)
            if (string===brackets[stack[stack.length-2]]) {
                stack.pop()
                stack.pop()
            } else {
                return false
            }
        }
    }

    // console.log("map: ", brackets.get('('))
    // console.log("stack: ", stack)
    // return stack.length ? false : true
    return stack.length === 0
};