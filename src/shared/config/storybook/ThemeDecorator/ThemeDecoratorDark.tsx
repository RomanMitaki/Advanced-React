import { type Decorator } from '@storybook/react';

import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

const theme = Theme.DARK;
export const ThemeDecoratorDark: Decorator = (StoryComponent) => (
    <ThemeProvider initialTheme={theme}>
        <div className="app app_dark_theme">
            <StoryComponent />
        </div>
    </ThemeProvider>

);
