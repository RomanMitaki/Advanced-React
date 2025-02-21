import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { DefinePlugin, type RuleSetRule } from 'webpack';

const config: StorybookConfig = {
    stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    core: {
        builder: 'webpack5',
    },

    webpackFinal: async (config) => {
        config.plugins?.push(
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true), // Определяем глобальную переменную
            }),
        );

        // Добавляем поддержку TypeScript для обработки `stories.ts/tsx`.
        config.module?.rules?.push({
            test: /\.(ts|tsx|js|jsx|mjs)$/i,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            require.resolve('@babel/preset-env'),
                            require.resolve('@babel/preset-typescript'),
                            [
                                require.resolve('@babel/preset-react'),
                                {
                                    runtime: 'automatic', // Автоматическое добавление React
                                },
                            ],
                        ],
                    },
                },
            ],
        });

        // Добавляем поддержку SCSS/CSS если нужно
        config?.module?.rules?.push(
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '@use "@/app/styles/variables/global.scss";',
                        },
                    },
                ],
            },
        );

        // Настройка обработки SVG

        // @ts-expect-error it's ok
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config?.module?.rules?.map((rule: RuleSetRule) => {
            // eslint-disable-next-line @typescript-eslint/prefer-includes
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        config?.module?.rules?.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        // Расширяем разрешаемые расширения
        config?.resolve?.extensions?.push('.ts', '.tsx');

        // Настраиваем алиасы, чтобы Webpack знал о `@`
        // eslint-disable-next-line no-param-reassign
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve?.alias,
                '@': path.resolve(__dirname, '../../src'), // Установите путь к src
            },
        };

        return config;
    },
};

export default config;
