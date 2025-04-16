"use client"
import styles from "./password.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const { replace } = useRouter();

  const handleLogin = () => {
    replace("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlayBorder}>
        <h2 className={styles.headingSignIn}>Відновлення доступу</h2>

        
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
          </div>

          <button
            className={styles.loginButton}
            type="button"
            onClick={handleLogin}
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}
