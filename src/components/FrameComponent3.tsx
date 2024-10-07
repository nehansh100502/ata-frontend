import { FunctionComponent } from "react";
import SignUpFrame from "./SignUpFrame";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.closeParent}>
        <b className={styles.close}>Close</b>
        <img
          className={styles.materialSymbolscloseIcon}
          loading="eager"
          alt=""
          src="/materialsymbolsclose.svg"
        />
      </div>
      <div className={styles.registerButtonLabelWrapper}>
        <div className={styles.registerButtonLabel}>
          <div className={styles.signInParent}>
            <h1 className={styles.signIn}>Sign in</h1>
            <div className={styles.notAMemberParent}>
              <div className={styles.notAMember}>Not a member?</div>
              <b className={styles.registerNow}>Register now!</b>
            </div>
          </div>
          <form className={styles.contentFrame}>
            <div className={styles.aTASigninText}>
              <div className={styles.passwordInputParent}>
                <div className={styles.passwordInput}>
                  <a
                    className={styles.password}
                    href="mailto:John.abc@gmail.com"
                    target="_blank"
                  >
                    John.abc@gmail.com
                  </a>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                </div>
                <img
                  className={styles.forgotPasswordLink}
                  alt=""
                  src="/forgot-password-link.svg"
                />
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.passwordParent}>
                  <div className={styles.password1}>Password*</div>
                  <img className={styles.icon1} alt="" src="/icon.svg" />
                </div>
                <img
                  className={styles.instanceChild}
                  alt=""
                  src="/forgot-password-link.svg"
                />
              </div>
              <div className={styles.checkBox}>
                <div className={styles.footerFrame} />
                <div className={styles.password2}>Remember me</div>
              </div>
            </div>
            <div className={styles.backgroundRectangle}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.signIn1}>Sign in</div>
              </div>
              <b className={styles.forgotPassword}> Forgot password?</b>
            </div>
          </form>
          <SignUpFrame orSignInWith="Or sign in with" group55="/group-55.svg" />
        </div>
      </div>
      <div className={styles.bottomFrame}>
        <div className={styles.copyright2022FixMyBuild}>
          <b className={styles.copyright2022}>
            Copyright © 2024 ATA. All Rights Reserved.
          </b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
