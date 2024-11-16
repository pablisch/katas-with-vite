import {forWhomTheBellTolls, forWhomTheBellTolls2} from '../src/forWhomTheBellTolls.js';

describe('forWhomTheBellTolls', () => {
    test('should return a symmetrical array when n is passed in', () => {
        expect(forWhomTheBellTolls(1)).toEqual([1])
        expect(forWhomTheBellTolls(2)).toEqual([2,2])
        expect(forWhomTheBellTolls(3)).toEqual([3,4,3])
        expect(forWhomTheBellTolls(4)).toEqual([4,6,6,4])
        expect(forWhomTheBellTolls(5)).toEqual([5,8,9,8,5])
        expect(forWhomTheBellTolls(6)).toEqual([6,10,12,12,10,6])
        expect(forWhomTheBellTolls(7)).toEqual([7,12,15,16,15,12,7])
        expect(forWhomTheBellTolls(8)).toEqual([8,14,18,20,20,18,14,8])
    })
})

describe('forWhomTheBellTolls parameterised tests', () => {
    test.each([
        [1, [1]],
        [2, [2, 2]],
        [3, [3, 4, 3]],
        [4, [4, 6, 6, 4]],
        [5, [5, 8, 9, 8, 5]],
        [6, [6, 10, 12, 12, 10, 6]],
        [7, [7, 12, 15, 16, 15, 12, 7]],
        [8, [8, 14, 18, 20, 20, 18, 14, 8]],
    ])('should return a symmetrical array when n has the value of %d', (n, expectedArray) => {
        expect(forWhomTheBellTolls(n)).toEqual(expectedArray)
    })
})

describe('forWhomTheBellTolls parameterised tests', () => {
    test.each([
        [[1], 1],
        [[2, 2], 2],
        [[3, 4, 3], 3],
        [[4, 6, 6, 4], 4],
        [[5, 8, 9, 8, 5], 5],
        [[6, 10, 12, 12, 10, 6], 6],
        [[7, 12, 15, 16, 15, 12, 7], 7],
        [[8, 14, 18, 20, 20, 18, 14, 8], 8],
    ])('should return a symmetrical array, %s when n has the value of %d', (expectedArray, n) => {
        expect(forWhomTheBellTolls(n)).toEqual(expectedArray)
    })
})
