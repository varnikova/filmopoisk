import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { setLogoutData } from "../../features/Auth/authSlice.ts";
import AuthModal from "../../features/Auth/ui/AuthModal.tsx";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(setLogoutData());
  };
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.siteName}>Фильмопоиск</h1>
      </Link>
      {!isAuthenticated ? (
        <button
          onClick={() => setIsModalOpen(true)}
          className={styles.loginButton}
        >
          Войти
          <AuthModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </button>
      ) : (
        <button onClick={handleLogout} className={styles.logoutButton}>
          Выйти
        </button>
      )}
    </header>
  );
};
