import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from '@/shared';

describe('Button', () => {
    it('should render Button', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    it('should render Button with CLEAR theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
