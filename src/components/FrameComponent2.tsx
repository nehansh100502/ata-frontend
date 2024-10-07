import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

type FrameComponent2Type = {
  football?: string;
  englishTelegu?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  football,
  englishTelegu,
  propWidth,
  propPadding,
  propAlignSelf,
  propAlignSelf1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  const footballStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className={styles.frameWrapper} style={frameDivStyle}>
      <div className={styles.footballParent}>
        <div className={styles.football} style={footballStyle}>
          {football}
        </div>
        <div className={styles.englishTeleguParent}>
          <div className={styles.englishTelegu}>{englishTelegu}</div>
          <div className={styles.contactUsFrame}>
            <div className={styles.vectorParent}>
              <img className={styles.frameChild} alt="" src="/vector-116.svg" />
              <div className={styles.min}>30/min</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
