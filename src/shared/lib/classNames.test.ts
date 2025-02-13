import { classNames } from '@/shared/lib/classNames';

describe('classNames', () => {
    test('with cls parameter only', () => {
        expect(classNames('testClass')).toBe('testClass');
    });

    test('with cls & additional parameters', () => {
        const expected = 'testClass one two';
        expect(classNames(
            'testClass',
            {},
            ['one', 'two'],
        )).toBe(expected);
    });

    test('with cls mods additional (all are true) parameters', () => {
        const expected = 'testClass hovered scrollable one two';
        expect(classNames(
            'testClass',
            { hovered: true, scrollable: true },
            ['one', 'two'],
        )).toBe(expected);
    });

    test('with cls mods additional (some false) parameters', () => {
        const expected = 'testClass hovered one two';
        expect(classNames(
            'testClass',
            { hovered: true, scrollable: false },
            ['one', 'two'],
        )).toBe(expected);
    });
});
