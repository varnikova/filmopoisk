import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../app/store/api.ts";
import { setLoginData } from "../authSlice.ts";
import styles from "./AuthModal.module.css";

const AuthModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [auth, { isLoading, error }] = useLoginMutation();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await auth({ username: login, password }).unwrap();
      dispatch(setLoginData(user));
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>Авторизация</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="login">
              Логин <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Введите логин"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">
              Пароль <span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              required
            />
          </div>
          <div className={styles.buttons}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              Войти
            </button>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Отменить
            </button>
          </div>
          {error && <p className={styles.error}>{error?.data?.error}</p>}
        </form>
      </div>
    </div>,
    document.getElementById("portal-root"),
  );
};

export default AuthModal;
