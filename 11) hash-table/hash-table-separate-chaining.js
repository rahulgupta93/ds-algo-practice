class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        const weirdPrime = 31;
        for (let i=0; i<Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total*weirdPrime + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        const hash = this._hash(key);

        // is hash location is empty, initialize with empty array
        if (!this.keyMap[hash]) this.keyMap[hash] = [];

        const hashArr = this.keyMap[hash];
        
        // check if key already exists at hash location
        for(let i=0; i<hashArr.length; i++) {
            if (hashArr[i][0] === key) {
                // key already exists, update the value and return
                hashArr[i][1] = value;
                return;
            }
        }

        // key doesn't exist in hash location, add a nwe key value pair to hash location
        this.keyMap[hash].push([key,value]);
    }
    get(key) {
        const hash = this._hash(key);
        const hashArr = this.keyMap[hash];
        
        // is hash location is empty, initialize with empty array
        if (!hashArr) return undefined;
        
        // check if key already exists at hash location
        for(let i=0; i<hashArr.length; i++) {
            if (hashArr[i][0] === key) {
                // key already exists, return value at that location
                return hashArr[i][1];
            }
        }
    }
    keys() {
        const arr = [];
        for (let i=0; i<this.keyMap.length; i++) {
            const table = this.keyMap[i];
            if (!!table) {
                for(let j=0; j<table.length; j++) {
                    arr.push(table[j][0]);
                }
            }
        }
        return arr;
    }
    values() {
        const arr = [];
        for (let i=0; i<this.keyMap.length; i++) {
            const table = this.keyMap[i];
            if (!!table) {
                for(let j=0; j<table.length; j++) {
                    arr.push(table[j][1]);
                }
            }
        }
        return arr;
    }
}
