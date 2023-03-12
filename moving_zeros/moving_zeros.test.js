const {moving_zeros} = require('./moving_zeros')

describe('moving_zeros', ()=>{
    let arr; 
    let answer;
    
    it('[1] returns value1', ()=>{
        arr = [0, 3, 1, 0, -2]
        answer = moving_zeros(arr)
        
        for(let i = 0; i < 3; i++){
            expect(arr.includes(answer[i])).toBe(true);
            expect(answer[i]).not.toEqual(0)
        }
        
        for(let i = arr.length-1; i > 3; i--){
            expect(answer[i]).toEqual(0)
        }
    })
    
    it('[2] returns value2', ()=>{
        arr = [1, 2, 3, 0, 4, 0, 0]
        answer = moving_zeros(arr)
        
        for(let i = 0; i < 4; i++){
            expect(arr.includes(answer[i])).toBe(true);
            expect(answer[i]).not.toEqual(0)
        }
        
        for(let i = arr.length-1; i > 4; i--){
            expect(answer[i]).toEqual(0)
        }
    })
    
    it('[3] returns value3', ()=>{
        arr = [4, 1, 2, 5]
        answer = moving_zeros(arr)
        
        for(const x of answer){
            expect(arr.includes(x)).toBe(true);
            expect(x).not.toEqual(0)
        }
    })
    
    it('[4] returns value4', ()=>{
        arr = [0, 0, 0, 0, 0]
        answer = moving_zeros(arr)
        
        expect(answer.length).toEqual(arr.length)
        
        for(const x of answer){
            expect(x).toEqual(0)
        }
    })
    
    it('[5] returns value5', ()=>{
        arr = [0, 0, 0, 0, 3, 2, 1] 
        answer = moving_zeros(arr)
        
        expect(answer.length).toEqual(arr.length)
        
        for(let i = 0; i < 3; i++){
            expect(arr.includes(answer[i])).toBe(true);
            expect(answer[i]).not.toEqual(0)
        }
        
        for(let i = arr.length-1; i > 3; i--){
            expect(answer[i]).toEqual(0)
        }
    })
})