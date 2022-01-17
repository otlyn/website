import React from 'react';

import style from './Header.module.css';

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header className={style.header}>
    <h1>Otlyn</h1>
  </header>
);
