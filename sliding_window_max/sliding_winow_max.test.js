const { sliding_window_max} = require('./sliding_window_max');

describe('sliding_window_max', ()=>{
    it('returns an array of the maximum values in each window of elements', ()=>{
        expect(sliding_window_max([1,3,-1,-3,5,3,6,7], 3)).toEqual([3,3,5,5,6,7])
        expect(sliding_window_max([1, 2, 3, 1, 4, 5, 2, 3, 6], 3)).toEqual([3, 3, 4, 5, 5, 5, 6])
    })
})