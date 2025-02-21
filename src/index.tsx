import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';

import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';

import '@/shared/config/i18n/i18n';

import '@/app/styles/index.scss';

// Находим корневой элемент
const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element не найден. Убедитесь, что в вашем HTML есть <div id="root"></div>.');
}

// Инициализируем React с createRoot
const root = createRoot(rootElement);

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
);
