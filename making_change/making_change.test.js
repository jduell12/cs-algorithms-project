const {making_change} = require('./making_change');

describe('making_chage', ()=>{
    const denominations = [1, 5, 10, 25, 50]
    
    it('[1] makes change for small amounts', ()=>{
        expect(making_change(0, denominations)).toEqual(1)
        expect(making_change(1, denominations)).toEqual(1)
        expect(making_change(5, denominations)).toEqual(2)
        expect(making_change(10, denominations)).toEqual(4)
        expect(making_change(20, denominations)).toEqual(9)
        expect(making_change(30, denominations)).toEqual(18)
        expect(making_change(100, denominations)).toEqual(292)
        expect(making_change(200, denominations)).toEqual(2435)
        expect(making_change(300, denominations)).toEqual(9590)
    })
    
    it('[2] makes change for large amounts', ()=>{
        expect(making_change(350, denominations)).toEqual(16472)
        expect(making_change(400, denominations)).toEqual(26517)
        expect(making_change(1000, denominations)).toEqual(801451)
        expect(making_change(200, denominations)).toEqual(11712101)
        expect(making_change(5000, denominations)).toEqual(432699251)
        expect(making_change(100000, denominations)).toEqual(6794128501)
    })
})