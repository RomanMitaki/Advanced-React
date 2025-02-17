import type { Preview } from '@storybook/react';

import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecoratorLight } from '@/shared/config/storybook/ThemeDecorator/ThemeDecoratorLight';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecoratorLight, RouterDecorator],
};

export default preview;
