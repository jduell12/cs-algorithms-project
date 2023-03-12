const {single_number} = require('./single_number');

describe('single_number', ()=>{
    it('returns the odd number out correctly', ()=>{
        expect(single_number([2, 2, 1])).toEqual(1);
        expect(single_number([4, 1, 2, 1, 2])).toEqual(4);
        expect(single_number([2, 3, 5, 4, 5, 3, 4])).toEqual(2)

    })
})