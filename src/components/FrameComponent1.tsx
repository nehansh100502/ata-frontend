import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

type FrameComponent1Type = {
  maskGroup?: string;
  maskGroup1?: string;
  maskGroup2?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  maskGroup,
  maskGroup1,
  maskGroup2,
  propPadding,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.frameParent} style={frameDiv1Style}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="/group-146.svg" />
        <div className={styles.payRs100GetExtraRs75Wrapper}>
          <h1 className={styles.payRs100}>Pay Rs. 100 Get Extra Rs. 75</h1>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <img className={styles.vectorIcon} alt="" src="/vector-116-4.svg" />
          <h1 className={styles.recharge}>Recharge</h1>
        </div>
      </div>
      <div className={styles.vivekCardParent}>
        <div className={styles.vivekCard}>
          <div className={styles.vivekCardChild} />
          <div className={styles.maskGroupParent}>
            <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
            <div className={styles.rating}>
              <div className={styles.ratingChild} />
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.div}>4.4</div>
            </div>
          </div>
          <div className={styles.vivekCardInner}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.andreawParent}>
                  <b className={styles.andreaw}>Andreaw</b>
                  <div className={styles.grouplockupathlete}>
                    <div className={styles.footballVolleyball}>
                      Football, Volleyball
                    </div>
                    <div
                      className={styles.englishHindi}
                    >{`English, Hindi `}</div>
                  </div>
                  <div className={styles.free}>FREE</div>
                </div>
              </div>
              <div className={styles.connectParent}>
                <div className={styles.connect}>
                  <div className={styles.connectChild} />
                  <div className={styles.callNow}>Call Now</div>
                </div>
                <div className={styles.connect1}>
                  <div className={styles.connectItem} />
                  <div className={styles.chatNow}>Chat Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vivekCard1}>
          <div className={styles.vivekCardItem} />
          <div className={styles.maskGroupGroup}>
            <img className={styles.maskGroupIcon1} alt="" src={maskGroup1} />
            <div className={styles.rating1}>
              <div className={styles.ratingItem} />
              <img className={styles.starIcon1} alt="" src="/star.svg" />
              <div className={styles.div1}>4.8</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper1}>
                <div className={styles.andreawGroup}>
                  <b className={styles.andreaw1}>Andreaw</b>
                  <div className={styles.footballParent}>
                    <div className={styles.football}>Football</div>
                    <div
                      className={styles.englishTelegu}
                    >{`English, Telegu `}</div>
                  </div>
                  <div className={styles.frameathletesacademyWrapper}>
                    <div className={styles.frameathletesacademy}>
                      <img
                        className={styles.productcoachesIcon}
                        alt=""
                        src="/vector-116.svg"
                      />
                      <div className={styles.min}>30/min</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.connectGroup}>
                <div className={styles.connect2}>
                  <div className={styles.connectInner} />
                  <div className={styles.callNow1}>Call Now</div>
                </div>
                <div className={styles.connect3}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.chatNow1}>Chat Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vivekCard2}>
          <div className={styles.vivekCardChild1} />
          <div className={styles.maskGroupContainer}>
            <img className={styles.maskGroupIcon2} alt="" src={maskGroup2} />
            <div className={styles.rating2}>
              <div className={styles.ratingInner} />
              <img className={styles.starIcon2} alt="" src="/star.svg" />
              <div className={styles.div2}>4.5</div>
            </div>
          </div>
          <div className={styles.vivekCardInner1}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper2}>
                <div className={styles.andreawContainer}>
                  <b className={styles.andreaw2}>Andreaw</b>
                  <div className={styles.footballCricketParent}>
                    <div className={styles.footballCricket}>
                      Football, Cricket
                    </div>
                    <div className={styles.englishHindiParent}>
                      <div
                        className={styles.englishHindi1}
                      >{`English, Hindi `}</div>
                      <div className={styles.framesportsfootball}>
                        <div className={styles.groupseemoredhruv}>
                          <img
                            className={styles.frametennisIcon}
                            alt=""
                            src="/vector-116.svg"
                          />
                          <div className={styles.min1}>30/min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.connectContainer}>
                <div className={styles.connect4}>
                  <div className={styles.connectChild1} />
                  <div className={styles.callNow2}>Call Now</div>
                </div>
                <div className={styles.connect5}>
                  <div className={styles.connectChild2} />
                  <div className={styles.chatNow2}>Chat Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
