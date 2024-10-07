import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <form className={styles.frameParent}>
      <div className={styles.closeParent}>
        <h3 className={styles.close}>Close</h3>
        <img
          className={styles.materialSymbolscloseIcon}
          loading="eager"
          alt=""
          src="/materialsymbolsclose.svg"
        />
      </div>
      <FrameComponent5 detailsAboutYourHealthAnd="Details about your health and  Height" />
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.save}>Save</div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent4;
