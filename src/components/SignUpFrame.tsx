import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SignUpFrame.module.css";

type SignUpFrameType = {
  orSignInWith?: string;
  group55?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
};

const SignUpFrame: FunctionComponent<SignUpFrameType> = ({
  orSignInWith,
  group55,
  propDisplay,
}) => {
  const orSignInStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.signUpFrame}>
      <b className={styles.orSignIn} style={orSignInStyle}>
        {orSignInWith}
      </b>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="eager"
          alt=""
          src="/group-53.svg"
        />
        <img
          className={styles.frameItem}
          loading="eager"
          alt=""
          src="/group-54.svg"
        />
        <img
          className={styles.frameInner}
          loading="eager"
          alt=""
          src={group55}
        />
      </div>
    </div>
  );
};

export default SignUpFrame;
