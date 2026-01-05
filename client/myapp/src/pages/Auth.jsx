import styles from "./style.module.css";

function Auth() {
  const googleAuth = () => {
    window.open(
      `${import.meta.env.VITE_BASE_URL}/auth/google`,
      "_self"
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to AIVORA</h1>

      <div className={styles.form_container}>
        <div className={styles.left}>
          <img src="/login.png" alt="login" className={styles.img} />
        </div>

        <div className={styles.right}>
          <h2 className={styles.form_heading}>
            Sign in with Google
          </h2>
          <br/>
          <button
            className={styles.google_btn}
            onClick={googleAuth}
          >
            <img src="/google.png" alt="google" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
