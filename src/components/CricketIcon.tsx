import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CricketIcon.module.css";

type CricketIconType = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propMargin?: CSSProperties["margin"];
};

const CricketIcon: FunctionComponent<CricketIconType> = ({
  propAlignSelf,
  propWidth,
  propPadding,
  propMargin,
}) => {
  const cricketIconStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      padding: propPadding,
    };
  }, [propAlignSelf, propWidth, propPadding]);

  const checkOutOurStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={styles.cricketIcon} style={cricketIconStyle}>
      <div className={styles.checkOutOur} style={checkOutOurStyle}>
        Check out our best rated Coaches and Mentors
      </div>
      <div className={styles.ajayGroup}>
        <div className={styles.footballIcon}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.tennisIcon}>
              <h3 className={styles.vijay}>Vijay</h3>
              <div className={styles.cricket}>Cricket</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.seeMore}>SEE MORE</div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.groupOfRectangles}>
              <h3 className={styles.ajay}>Ajay</h3>
              <div className={styles.football}>Football</div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.seeMore1}>SEE MORE</div>
            </div>
          </div>
        </div>
        <div className={styles.footballIcon1}>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
            <div className={styles.frameChild2} />
            <div className={styles.vipulParent}>
              <h3 className={styles.vipul}>Vipul</h3>
              <div className={styles.callToAction}>
                <div className={styles.boxing}>Boxing</div>
              </div>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild3} />
              <div className={styles.seeMore2}>SEE MORE</div>
            </div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.frameChild4} />
            <div className={styles.frameChild5} />
            <div className={styles.dhruvParent}>
              <h3 className={styles.dhruv}>Dhruv</h3>
              <div className={styles.tennis}>Tennis</div>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild6} />
              <div className={styles.seeMore3}>SEE MORE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketIcon;
