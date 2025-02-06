/** @type {import('stylelint').Config} */
module.exports = {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        // *** Основные базовые правила ***
        'block-no-empty': true, // Запрещает пустые блоки
        'no-duplicate-selectors': true, // Запрещает дублирование селекторов
        'color-named': 'never', // Запрещает использование именованных цветов
        'string-quotes': 'single', // Использовать одинарные кавычки
        'selector-max-id': 0, // Запрещает селекторы по ID
        'selector-class-pattern': null,
        'max-nesting-depth': 3, // Максимальная вложенность стилей — 3 уровня
        'declaration-block-no-duplicate-properties': true, // Запрещает дублирование свойств

        // *** Правила для SCSS ***
        'scss/at-import-no-partial-leading-underscore': true, // Не допускаем подчеркивание в импортируемых partial-файлах
        'scss/at-extend-no-missing-placeholder': true, // Убедиться, что @extend применяется только к плейсхолдерам (%placeholder)
        'scss/no-duplicate-mixins': true, // Запрещает дублирование миксинов

        // *** Форматирование ***
        indentation: 4, // Отступ в 4 пробела
        'number-leading-zero': 'always', // Добавлять ведущий ноль для дробных чисел (например, `0.5` вместо `.5`)
        'length-zero-no-unit': true, // Убирать единицы измерения у 0 (например, `0px` → `0`)
        'declaration-colon-space-after': 'always', // Добавлять пробел после двоеточия в декларациях стилей
        'declaration-colon-newline-after': null,
        'declaration-empty-line-before': [
            'always',
            {
                except: ['first-nested'], // Пропускать в случае первого элемента
                ignore: ['after-declaration'], // Пропускать после других деклараций
            },
        ],
        'no-descending-specificity': true, // Запрещает нарушение каскадности селекторов (например, `div a` после `a`)

        // *** Другие правила ***
        'font-family-no-missing-generic-family-keyword': true, // Убедиться, что у `font-family` есть резервный шрифт (например, `sans-serif`)
        'function-url-quotes': 'always', // Указывать кавычки для URL
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }], // Поддержка специфичных псевдоклассов
        'property-no-unknown': [true, { ignoreProperties: ['composes'] }], // Игнорировать CSS-модули (PostCSS)
    },
};
