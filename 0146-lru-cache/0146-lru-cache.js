// LRU
// 여기서 used는 
// get 또는 put 둘다 해당
/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity) {
        this.cache = new Map()
        this.cap = capacity
    }

    /** 
    * @param {number} key
    * @return {number}
    */
    get(key) {
        if (this.cache.has(key)) {
            const val = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, val)

            return this.cache.get(key)
        }
        
        return -1
    };

    /** 
    * @param {number} key 
    * @param {number} value
    * @return {void}
    */
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size === this.cap) {
            const lru = this.cache.keys().next().value
            this.cache.delete(lru)
        }
        this.cache.set(key, value)
    };

    /** 
    * Your LRUCache object will be instantiated and called as such:
    * var obj = new LRUCache(capacity)
    * var param_1 = obj.get(key)
    * obj.put(key,value)
    */
};