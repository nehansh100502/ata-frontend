import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login1}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.ataFlat1}
          loading="eager"
          alt=""
          src="/ata-flat-1@2x.png"
        />
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameItem}
            loading="eager"
            alt=""
            src="/group-217@2x.png"
          />
        </div>
        <div className={styles.welcomeBackParent}>
          <h1 className={styles.welcomeBack}>Welcome Back</h1>
          <div className={styles.welcomeToAtaParent}>
            <div className={styles.welcomeToAta}>Welcome to ATA</div>
            <div className={styles.closeButtonLabelContainer}>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine1}>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.login1Inner}>
        <FrameComponent3 />
      </div>
      <div className={styles.fixmybuild}>
        <span className={styles.fix}>Fix</span>
        <span className={styles.mybuild}>MyBuild</span>
      </div>
      <div className={styles.footerRectangle} />
    </div>
  );
};

export default Login;
