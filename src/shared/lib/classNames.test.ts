import { classNames } from './classNames'

describe('classNames', () => {
    test('with 1st param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with aditional class', () => {
        expect(classNames('someClass', {}, ['test1', 'test2'])).toBe(
            'someClass test1 test2'
        )
    })
    test('with mods true case', () => {
        expect(classNames('someClass', { visible: true, clicable: true })).toBe(
            'someClass visible clicable'
        )
    })
    test('with mods false case', () => {
        expect(
            classNames('someClass', { visible: true, clicable: false })
        ).toBe('someClass visible')
    })
    test('with mods undefined case', () => {
        expect(
            classNames('someClass', { visible: true, clicable: undefined })
        ).toBe('someClass visible')
    })
})
