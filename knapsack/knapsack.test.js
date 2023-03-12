const {knapsack} = require('./knapsack');
const fs = require('fs')
const path = require('path')
const readline = require('readline')

const readFile = async (filePath) => {
    const items = []
    const fileStream = fs.createReadStream(path.join(__dirname + filePath))
       
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        })
        
        for await (const line of rl){ 
            const splitLine = line.split(' ')
            items.push({index: splitLine[0], size: splitLine[1], value: splitLine[2]})
        }
        return items
}

describe('knapsack', ()=>{
    let items = []
    
    it('[1] small1', async ()=>{
        items = await readFile('/data/small1.txt')
        
        expect(knapsack(Items, 100)).toEqual({'Value': 197, 'Chosen': [1, 7, 8]})
    })
    
    it('[2] small2', async ()=>{
        items = await readFile('/data/small2.txt')
        
        expect(knapsack(Items, 100)).toEqual({'Value': 259, 'Chosen': [1, 9, 10]})
    })
    
    it('[3] small3', async ()=>{
        items = await readFile('/data/small3.txt')
        
        expect(knapsack(Items, 100)).toEqual( {'Value': 129, 'Chosen': [4, 5, 7, 9]})
    })
    
    it('[4] med1', async ()=>{
        items = await readFile('/data/med1.txt')        
        expect(knapsack(Items, 100)).toEqual({'Value': 1042, 'Chosen': [44, 49, 60, 77, 80, 83, 94, 104, 107, 117, 127, 134, 157, 160, 170]})
    })
    
    it('[5] med2', async ()=>{
        items = await readFile('/data/med2.txt')        
        expect(knapsack(Items, 100)).toEqual( {'Value': 969, 'Chosen': [1, 10, 27, 28, 66, 120, 139, 145, 153, 155, 174, 188, 191]})
    })
    
    it('[6] med3', async ()=>{
        items = await readFile('/data/med3.txt')        
        expect(knapsack(Items, 100)).toEqual( {'Value': 868, 'Chosen': [9, 14, 15, 47, 68, 108, 116, 120, 133, 154, 158, 161, 164, 170, 181, 198]})
    })
    
    it('[7] large1', async ()=>{
        items = await readFile('/data/large1.txt')        
        expect(knapsack(Items, 100)).toEqual({'Value': 2640, 'Chosen': [44, 83, 104, 107, 134, 160, 239, 271, 295, 297, 308, 335, 337, 370, 373, 420, 432, 561, 566, 623, 648, 671, 693, 704, 737, 782, 795, 796, 814, 844, 866, 907, 909, 913, 935, 949, 987, 997]})
    })
})