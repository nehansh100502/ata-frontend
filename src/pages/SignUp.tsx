import { FunctionComponent } from "react";
import FrameGroupMiddle from "../components/FrameGroupMiddle";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp1}>
      <div className={styles.frameSignup}>
        <div className={styles.frameInputs}>
          <div className={styles.aTAFlatRectangle}>
            <img
              className={styles.ataFlat1}
              loading="eager"
              alt=""
              src="/ata-flat-1@2x.png"
            />
          </div>
          <img
            className={styles.frameInputsChild}
            loading="eager"
            alt=""
            src="/group-217@2x.png"
          />
        </div>
      </div>
      <div className={styles.fixmybuild}>
        <span className={styles.fix}>Fix</span>
        <span className={styles.mybuild}>MyBuild</span>
      </div>
      <FrameGroupMiddle />
      <div className={styles.frame} />
    </div>
  );
};

export default SignUp;
