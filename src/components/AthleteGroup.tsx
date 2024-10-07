import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AthleteGroup.module.css";

type AthleteGroupType = {
  /** Style props */
  rectangleDivFlex?: CSSProperties["flex"];
  rectangleDivAlignSelf?: CSSProperties["alignSelf"];
};

const AthleteGroup: FunctionComponent<AthleteGroupType> = ({
  rectangleDivFlex,
  rectangleDivAlignSelf,
}) => {
  const athleteGroupStyle: CSSProperties = useMemo(() => {
    return {
      flex: rectangleDivFlex,
      alignSelf: rectangleDivAlignSelf,
    };
  }, [rectangleDivFlex, rectangleDivAlignSelf]);

  return (
    <div className={styles.athleteGroup} style={athleteGroupStyle}>
      <div className={styles.vivekCard}>
        <div className={styles.vivekCardChild} />
        <div className={styles.maskGroupParent}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.rating}>
            <div className={styles.ratingChild} />
            <img className={styles.starIcon} alt="" src="/star.svg" />
            <div className={styles.counselingGroup}>4.4</div>
          </div>
        </div>
        <div className={styles.contactFrameWrapper}>
          <div className={styles.contactFrame}>
            <div className={styles.secureFrame}>
              <div className={styles.privateFrame}>
                <b className={styles.andreaw}>Andreaw</b>
                <div className={styles.footballVolleyball}>
                  Football, Volleyball
                </div>
                <div className={styles.englishHindi}>{`English, Hindi `}</div>
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
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group-1@2x.png"
          />
          <div className={styles.rating1}>
            <div className={styles.ratingItem} />
            <img className={styles.starIcon1} alt="" src="/star.svg" />
            <div className={styles.div}>4.8</div>
          </div>
        </div>
        <div className={styles.vivekCardInner}>
          <div className={styles.frameParent}>
            <div className={styles.andreawWrapper}>
              <b className={styles.andreaw1}>Andreaw</b>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.footballParent}>
                <div className={styles.football}>Football</div>
                <div className={styles.englishTeleguParent}>
                  <div
                    className={styles.englishTelegu}
                  >{`English, Telegu `}</div>
                  <div className={styles.parentContainer}>
                    <div className={styles.groupWithText}>
                      <img
                        className={styles.vijayFootballIcon}
                        loading="eager"
                        alt=""
                        src="/vector-116.svg"
                      />
                      <div className={styles.min}>30/min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.privateCoaches}>
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
          <img
            className={styles.maskGroupIcon2}
            alt=""
            src="/mask-group-2@2x.png"
          />
          <div className={styles.rating2}>
            <div className={styles.ratingInner} />
            <img className={styles.starIcon2} alt="" src="/star.svg" />
            <div className={styles.div1}>4.5</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameGroup}>
            <div className={styles.andreawContainer}>
              <b className={styles.andreaw2}>Andreaw</b>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.footballCricketParent}>
                <div className={styles.footballCricket}>Football, Cricket</div>
                <div className={styles.englishHindi1}>{`English, Hindi `}</div>
                <div className={styles.athletesAcademy}>
                  <div className={styles.productCoaches}>
                    <img
                      className={styles.frameProductsIcon}
                      alt=""
                      src="/vector-116.svg"
                    />
                    <div className={styles.min1}>30/min</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.connectGroup}>
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
  );
};

export default AthleteGroup;
