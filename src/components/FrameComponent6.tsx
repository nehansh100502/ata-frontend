import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

type FrameComponent6Type = {
  maskGroup?: string;
  maskGroup1?: string;
  maskGroup2?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  maskGroup,
  maskGroup1,
  maskGroup2,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h1 className={styles.genuineCoaches}>Genuine Coaches</h1>
        <h1 className={styles.accurateAdvice}>Accurate Advice</h1>
        <h1 className={styles.valueForMoney}>Value for Money</h1>
        <img className={styles.frameItem} alt="" src="/line-4.svg" />
        <img className={styles.frameInner} alt="" src="/line-4.svg" />
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
          <div className={styles.frameParentWrapper}>
            <div className={styles.frameParent1}>
              <div className={styles.callButton}>
                <div className={styles.chatButton}>
                  <b className={styles.andreaw}>Andreaw</b>
                  <div className={styles.ratingStars}>
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
              <div className={styles.frameProduct}>
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
          <div className={styles.vivekCardInner}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.andreawParent}>
                  <b className={styles.andreaw1}>Andreaw</b>
                  <div className={styles.footballParent}>
                    <div className={styles.football}>Football</div>
                    <div
                      className={styles.englishTelegu}
                    >{`English, Telegu `}</div>
                  </div>
                  <div className={styles.productCoachesWrapper}>
                    <div className={styles.productCoaches}>
                      <img
                        className={styles.counselingAdviceIcon}
                        alt=""
                        src="/vector-116.svg"
                      />
                      <div className={styles.min}>30/min</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.connectParent}>
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
          <div className={styles.frameDiv}>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper1}>
                <div className={styles.andreawGroup}>
                  <b className={styles.andreaw2}>Andreaw</b>
                  <div className={styles.footballCricketParent}>
                    <div className={styles.footballCricket}>
                      Football, Cricket
                    </div>
                    <div className={styles.englishHindiParent}>
                      <div
                        className={styles.englishHindi1}
                      >{`English, Hindi `}</div>
                      <div className={styles.connectButtons}>
                        <div className={styles.frameFrame}>
                          <img
                            className={styles.vectorMinIcon}
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
    </div>
  );
};

export default FrameComponent6;
