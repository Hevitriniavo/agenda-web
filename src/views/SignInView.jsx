import styles from "../styles/sign-in.module.css";
import { Typewriter } from 'react-simple-typewriter';

function SignInView() {
  return (
    <div className={styles.container}>
      <div className={styles['typewriter-container']}>
        <Typewriter
          className={styles.typewriter}
          words={['WELCOME TO BACK OFFICE', 'SIGN IN TO BACK OFFICE', 'ENTER YOUR CREDENTIALS']}
          loop={0}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div className={styles.container_form}>
        <form className={styles.form}>
          <legend className={styles.header}>Sign In</legend>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input type="email" id="email" name="email" required className={styles.input} />
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input type="password" id="password" name="password" required className={styles.input} />
          <button type="submit" className={styles.button}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInView;
