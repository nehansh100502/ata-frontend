import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent5.module.css";

type FrameComponent5Type = {
  detailsAboutYourHealthAnd?: string;

  /** Style props */
  rectangleDivAlignSelf?: CSSProperties["alignSelf"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivPadding?: CSSProperties["padding"];
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  detailsAboutYourHealthAnd,
  rectangleDivAlignSelf,
  rectangleDivWidth,
  rectangleDivPadding,
  propPadding,
  propHeight,
  propHeight1,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: rectangleDivAlignSelf,
      width: rectangleDivWidth,
      padding: rectangleDivPadding,
    };
  }, [rectangleDivAlignSelf, rectangleDivWidth, rectangleDivPadding]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
    };
  }, [propPadding, propHeight]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div className={styles.frameWrapper} style={frameDiv2Style}>
      <div className={styles.frameParent}>
        <div className={styles.unsplashumfpfokxivgWrapper}>
          <img
            className={styles.unsplashumfpfokxivgIcon}
            loading="eager"
            alt=""
            src="/unsplashumfpfokxivg@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.enterName}>Enter name</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.enterEmail}>Enter email</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.enterPhoneNumber}>Enter phone number</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.enterDob}>Enter D.O.B</div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <div className={styles.fullAddressWith}>
                Full Address with pin code
              </div>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild2} />
              <div className={styles.alternativeContact}>
                Alternative Contact
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent3} style={frameDiv3Style}>
            <div className={styles.frameChild3} style={rectangleDivStyle} />
            <div className={styles.detailsAboutYour}>
              {detailsAboutYourHealthAnd}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
