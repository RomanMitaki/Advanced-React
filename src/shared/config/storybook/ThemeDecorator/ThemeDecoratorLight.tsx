import { type Decorator } from '@storybook/react';

import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecoratorLight: Decorator = (StoryComponent) => (
    <ThemeProvider>
        <div className="app app_light_theme">
            <StoryComponent />
        </div>
    </ThemeProvider>

);
