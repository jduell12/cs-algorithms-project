const { eating_cookies }  = require("./eating_cookies");

describe('eating_cookies', ()=>{
    it('[1] small n', ()=>{
        expect(eating_cookies(0)).toEqual(1)
        expect(eating_cookies(1)).toEqual(1)
        expect(eating_cookies(2)).toEqual(2)
        expect(eating_cookies(5)).toEqual(13)
        expect(eating_cookies(10)).toEqual(274)
    })
    
    it('[2] large n', ()=>{
        expect(eating_cookies(50)).toEqual(10562230626642)
        expect(eating_cookies(100)).toEqual(180396380815100901214157639)
        expect(eating_cookies(500)).toEqual(1306186569702186634983475450062372018715120191391192207156664343051610913971927959744519676992404852130396504615663042713312314219527)
    })
})