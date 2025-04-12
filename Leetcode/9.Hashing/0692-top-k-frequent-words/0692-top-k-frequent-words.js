/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

// 
var topKFrequent = function(words, k) {
    const map = new Map()
    for (let word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word)+1)
        } else {
            map.set(word, 1)
        }
    }
    console.log(map) 
    console.log(map.entries())
    // { 'i' => 2, 'love' => 2, 'leetcode' => 1, 'coding' => 1 }
    // ['i', 'love', 'coding', 'leetcode']
    const arr = Array.from(map.keys()).sort((a, b)=>{
        // sort the array by frequency
        let frequentA = map.get(a)
        let frequentB = map.get(b)
        // if frequency a !== b, return b
        if (frequentA !== frequentB) {
            return frequentB - frequentA
            } else {
                return a.localeCompare(b)
            }
        // else return alphabetical order a against b
    })
    console.log(arr)
    // const sortedArr = [...map.entries()].sort((a, b) => b[1] - a[1]);
    // convert a map to an array
    
    return arr.slice(0, k);
};