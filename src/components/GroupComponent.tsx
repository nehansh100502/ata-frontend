import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.ataFlat1Wrapper}>
          <img
            className={styles.ataFlat1}
            loading="eager"
            alt=""
            src="/ata-flat-1@2x.png"
          />
        </div>
        <img
          className={styles.frameItem}
          loading="eager"
          alt=""
          src="/group-217@2x.png"
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.welcomeBackParent}>
          <h1 className={styles.welcomeBack}>Welcome Back</h1>
          <div className={styles.welcomeToAtaParent}>
            <div className={styles.welcomeToAta}>Welcome to ATA</div>
            <div className={styles.text}>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine1}>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
