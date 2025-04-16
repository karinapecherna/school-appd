"use client";

import Image from "next/image";
import mailImg from "../../public/mail.png";
import codeImg from "../../public/code.png";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const { replace } = useRouter();

  const handleLogin = () => {
    replace("/home");
  };

  const forgot = () => {
    replace("/password");
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlayBorder}>
        <h2 className={styles.headingSignIn}>Вхід</h2>

        <p className={styles.subtext}>Введіть свої дані для входу в акаунт</p>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
            <Image src={mailImg} alt="Email icon" width={20} height={20} />
          </div>

          <label className={styles.label} htmlFor="password">
            Пароль
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="password"
              type="password"
              placeholder="Введіть пароль"
              required
            />
            <Image src={codeImg} alt="Password icon" width={20} height={20} />
          </div>

          <div
            className={styles.forgotPassword}
            type="button"
            onClick={forgot}
          >
            Забули пароль?
          </div>

          <button
            className={styles.loginButton}
            type="button"
            onClick={handleLogin}
          >
            Увійти
          </button>
        </form>
      </div>
    </div>
  );
}
