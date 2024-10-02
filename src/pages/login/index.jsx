import LoginNav from "@components/LoginNav";
import styles from "@/styles/form.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "@components/Footer";

export default function login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent form's default behavior
    try {
      const body = { username: userName, password: password };
      // Assuming login logic is successful, redirect the user
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <LoginNav />
      <main>
        <div className={styles.form}>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h1 className={styles.loginTitle}>Login</h1>

            <div className={styles.formGroup}>
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="userName"
                className={styles.inputBox}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                placeholder="Enter your username"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className={styles.inputBox}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className={styles.loginbtn}>
              Login
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
