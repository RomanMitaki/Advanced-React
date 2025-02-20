import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Button, Modal, ThemeButton } from '@/shared';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('NavBar');

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={classNames(cls.links)}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Modal>
        </div>
    );
};
