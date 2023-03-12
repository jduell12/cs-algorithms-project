const {product} = require('./product')

describe('product', ()=>{
    it('[1] returns correct array for input given', ()=>{
        expect(product([9, 90])).toEqual([90, 9])
        expect(product([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24])
        
       expect(product([7, 9, 1, 8, 6, 7, 8, 8, 7, 10])).toEqual([13547520, 10536960, 94832640, 11854080, 15805440, 13547520, 11854080, 11854080, 13547520, 9483264])
    })
})