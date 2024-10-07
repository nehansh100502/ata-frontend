import { FunctionComponent, useCallback } from "react";
import GroupA from "../components/GroupA";
import { useNavigate } from "react-router-dom";
import AthleteGroup from "../components/AthleteGroup";
import FrameComponent2 from "../components/FrameComponent2";
import DhruvTennisBoxing from "../components/DhruvTennisBoxing";
import FrameComponent1 from "../components/FrameComponent1";
import CricketIcon from "../components/CricketIcon";
import FrameSecureBox from "../components/FrameSecureBox";
import styles from "./Coach.module.css";

const Coach: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    // Please sync "Landing" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/category");
  }, [navigate]);

  return (
    <div className={styles.coach}>
      <div className={styles.coachChild} />
      <GroupA onHomeTextClick={onHomeTextClick} />
      <main className={styles.childFrames}>
        <div className={styles.lockupText}>
          <div className={styles.athleteFrame}>
            <div className={styles.sportLabels}>
              <div
                className={styles.rectangleParent}
                onClick={onGroupContainerClick}
              >
                <div className={styles.frameChild} />
                <div className={styles.football}>Football</div>
              </div>
              <img
                className={styles.sportLabelsChild}
                loading="eager"
                alt=""
                src="/group-140.svg"
              />
              <h3 className={styles.coaches}>Coaches</h3>
            </div>
            <div className={styles.counselingFrame}>
              <div className={styles.privacyPolicy}>
                <div className={styles.search}>
                  <div className={styles.searchChild} />
                  <img
                    className={styles.chatSupportIcon}
                    alt=""
                    src="/vector-21.svg"
                  />
                  <div className={styles.nameSportsCategory}>
                    Name, Sports, Category
                  </div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.expHighTo}>Exp: High to Low</div>
                <div className={styles.coachesSecurePay}>
                  <img
                    className={styles.coachesSecurePayChild}
                    alt=""
                    src="/group-141@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.counselingFrameChild}
                loading="eager"
                alt=""
                src="/group-1380.svg"
              />
            </div>
          </div>
        </div>
        <section className={styles.parentGroup}>
          <div className={styles.athleteGroupWrapper}>
            <AthleteGroup />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.footballAndCricket}>
              <AthleteGroup
                rectangleDivFlex="unset"
                rectangleDivAlignSelf="stretch"
              />
              <div className={styles.cricket}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <img
                    className={styles.groupIcon}
                    loading="eager"
                    alt=""
                    src="/group-146.svg"
                  />
                  <div className={styles.boxing}>
                    <h1 className={styles.payRs100}>
                      Pay Rs. 100 Get Extra Rs. 75
                    </h1>
                  </div>
                  <div className={styles.productCounseling}>
                    <div className={styles.productCounselingChild} />
                    <img
                      className={styles.coachesIcon}
                      alt=""
                      src="/vector-116-4.svg"
                    />
                    <div className={styles.recharge}>Recharge</div>
                  </div>
                </div>
              </div>
              <div className={styles.privacyPolicyTermsOfUse}>
                <div className={styles.vivekCard}>
                  <div className={styles.vivekCardChild} />
                  <div className={styles.frameGroup1}>
                    <img
                      className={styles.maskGroupIcon}
                      alt=""
                      src="/mask-group@2x.png"
                    />
                    <div className={styles.rating}>
                      <div className={styles.ratingChild} />
                      <img className={styles.starIcon} alt="" src="/star.svg" />
                      <div className={styles.privateConfidentialVerified}>
                        4.4
                      </div>
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.frameFrameProductCounseling}>
                      <div className={styles.companymessages}>
                        <div className={styles.groupOfSports}>
                          <b className={styles.andreaw}>Andreaw</b>
                          <div className={styles.footballVolleyball}>
                            Football, Volleyball
                          </div>
                          <div
                            className={styles.englishHindi}
                          >{`English, Hindi `}</div>
                          <div className={styles.free}>FREE</div>
                        </div>
                      </div>
                      <div className={styles.secureServices}>
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
                  <div className={styles.maskGroupParent}>
                    <img
                      className={styles.maskGroupIcon1}
                      alt=""
                      src="/mask-group-1@2x.png"
                    />
                    <div className={styles.rating1}>
                      <div className={styles.ratingItem} />
                      <img
                        className={styles.starIcon1}
                        alt=""
                        src="/star.svg"
                      />
                      <div className={styles.div}>4.8</div>
                    </div>
                  </div>
                  <div className={styles.vivekCardInner}>
                    <div className={styles.frameParent}>
                      <div className={styles.andreawWrapper}>
                        <b className={styles.andreaw1}>Andreaw</b>
                      </div>
                      <FrameComponent2
                        football="Football"
                        englishTelegu="English, Telegu "
                      />
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
                  <div className={styles.maskGroupGroup}>
                    <img
                      className={styles.maskGroupIcon2}
                      alt=""
                      src="/mask-group-2@2x.png"
                    />
                    <div className={styles.rating2}>
                      <div className={styles.ratingInner} />
                      <img
                        className={styles.starIcon2}
                        alt=""
                        src="/star.svg"
                      />
                      <div className={styles.div1}>4.5</div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameContainer}>
                      <div className={styles.andreawContainer}>
                        <b className={styles.andreaw2}>Andreaw</b>
                      </div>
                      <div className={styles.frameParent1}>
                        <FrameComponent2
                          football="Football, Cricket"
                          englishTelegu="English, Hindi "
                          propWidth="unset"
                          propPadding="0px var(--padding-lgi) 0px var(--padding-sm)"
                          propAlignSelf="stretch"
                          propAlignSelf1="stretch"
                        />
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
                <div className={styles.vivekCard3}>
                  <div className={styles.vivekCardChild2} />
                  <div className={styles.maskGroupContainer}>
                    <img
                      className={styles.maskGroupIcon3}
                      alt=""
                      src="/mask-group@2x.png"
                    />
                    <div className={styles.rating3}>
                      <div className={styles.ratingChild1} />
                      <img
                        className={styles.starIcon3}
                        alt=""
                        src="/star.svg"
                      />
                      <div className={styles.div2}>4.4</div>
                    </div>
                  </div>
                  <div className={styles.vivekCardInner1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.andreawParent}>
                          <b className={styles.andreaw3}>Andreaw</b>
                          <div className={styles.footballVolleyballParent}>
                            <div className={styles.footballVolleyball1}>
                              Football, Volleyball
                            </div>
                            <div
                              className={styles.englishHindi1}
                            >{`English, Hindi `}</div>
                          </div>
                          <div className={styles.free1}>FREE</div>
                        </div>
                      </div>
                      <div className={styles.connectContainer}>
                        <div className={styles.connect6}>
                          <div className={styles.connectChild3} />
                          <div className={styles.callNow3}>Call Now</div>
                        </div>
                        <div className={styles.connect7}>
                          <div className={styles.connectChild4} />
                          <div className={styles.chatNow3}>Chat Now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.vivekCard4}>
                  <div className={styles.vivekCardChild3} />
                  <div className={styles.maskGroupParent1}>
                    <img
                      className={styles.maskGroupIcon4}
                      alt=""
                      src="/mask-group-1@2x.png"
                    />
                    <div className={styles.rating4}>
                      <div className={styles.ratingChild2} />
                      <img
                        className={styles.starIcon4}
                        alt=""
                        src="/star.svg"
                      />
                      <div className={styles.div3}>4.8</div>
                    </div>
                  </div>
                  <div className={styles.vivekCardInner2}>
                    <div className={styles.frameParent3}>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.andreawGroup}>
                          <b className={styles.andreaw4}>Andreaw</b>
                          <div className={styles.footballParent}>
                            <div className={styles.football1}>Football</div>
                            <div
                              className={styles.englishTelegu}
                            >{`English, Telegu `}</div>
                          </div>
                          <div className={styles.companyInfoWrapper}>
                            <div className={styles.companyInfo}>
                              <img
                                className={styles.contactUsIcon}
                                alt=""
                                src="/vector-116.svg"
                              />
                              <div className={styles.min}>30/min</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.connectParent1}>
                        <div className={styles.connect8}>
                          <div className={styles.connectChild5} />
                          <div className={styles.callNow4}>Call Now</div>
                        </div>
                        <div className={styles.connect9}>
                          <div className={styles.connectChild6} />
                          <div className={styles.chatNow4}>Chat Now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.vivekCard5}>
                  <div className={styles.vivekCardChild4} />
                  <div className={styles.maskGroupParent2}>
                    <img
                      className={styles.maskGroupIcon5}
                      alt=""
                      src="/mask-group-2@2x.png"
                    />
                    <div className={styles.rating5}>
                      <div className={styles.ratingChild3} />
                      <img
                        className={styles.starIcon5}
                        alt=""
                        src="/star.svg"
                      />
                      <div className={styles.div4}>4.5</div>
                    </div>
                  </div>
                  <div className={styles.vivekCardInner3}>
                    <div className={styles.frameParent4}>
                      <div className={styles.frameWrapper2}>
                        <div className={styles.andreawParent1}>
                          <b className={styles.andreaw5}>Andreaw</b>
                          <div className={styles.footballCricketParent}>
                            <div className={styles.footballCricket}>
                              Football, Cricket
                            </div>
                            <div className={styles.englishHindiParent}>
                              <div
                                className={styles.englishHindi2}
                              >{`English, Hindi `}</div>
                              <div className={styles.sEEMOREVipul}>
                                <div className={styles.frameBoxing}>
                                  <img
                                    className={styles.athletesAcademyIcon}
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
                      <div className={styles.connectParent2}>
                        <div className={styles.connect10}>
                          <div className={styles.connectChild7} />
                          <div className={styles.callNow5}>Call Now</div>
                        </div>
                        <div className={styles.connect11}>
                          <div className={styles.connectChild8} />
                          <div className={styles.chatNow5}>Chat Now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footballAndCricketInner}>
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild1} />
                  <h1 className={styles.genuineCoaches}>Genuine Coaches</h1>
                  <h1 className={styles.accurateAdvice}>Accurate Advice</h1>
                  <h1 className={styles.valueForMoney}>Value for Money</h1>
                  <img className={styles.lineIcon} alt="" src="/line-4.svg" />
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/line-4.svg"
                  />
                </div>
              </div>
              <DhruvTennisBoxing
                maskGroup="/mask-group-12@2x.png"
                maskGroup1="/mask-group-1@2x.png"
                maskGroup2="/mask-group-2@2x.png"
              />
              <DhruvTennisBoxing
                maskGroup="/mask-group-12@2x.png"
                maskGroup1="/mask-group-1@2x.png"
                maskGroup2="/mask-group-2@2x.png"
                propPadding="0px 0px var(--padding-8xs)"
              />
              <FrameComponent1
                maskGroup="/mask-group-12@2x.png"
                maskGroup1="/mask-group-1@2x.png"
                maskGroup2="/mask-group-2@2x.png"
              />
              <DhruvTennisBoxing
                maskGroup="/mask-group-12@2x.png"
                maskGroup1="/mask-group-1@2x.png"
                maskGroup2="/mask-group-2@2x.png"
                propPadding="unset"
              />
            </div>
          </div>
          <div className={styles.maskGroupParent3}>
            <img
              className={styles.maskGroupIcon6}
              alt=""
              src="/mask-group-16.svg"
            />
            <h3 className={styles.personalizedCoachingOurContainer}>
              <span className={styles.personalizedCoachingOurContainer1}>
                <ul className={styles.personalizedCoachingOurPla}>
                  <li className={styles.personalizedCoachingOur}>
                    Personalized Coaching: Our platform offers one-on-one
                    sessions, ensuring personalized attention to address your
                    unique needs and goals.
                  </li>
                  <li className={styles.experiencedMentorsConnect}>
                    Experienced Mentors: Connect with coaches and mentors who
                    have a wealth of experience in their respective sports,
                    bringing valuable insights to your training.
                  </li>
                  <li className={styles.flexibleSchedulingWe}>
                    Flexible Scheduling: We understand the demands of a busy
                    schedule. That's why we provide flexibility in scheduling
                    sessions to accommodate your lifestyle.
                  </li>
                  <li className={styles.seamlessChatPlatform}>
                    Seamless Chat Platform: Our user-friendly chat platform
                    makes it easy for you to interact with coaches, receive
                    feedback, and track your progress, all in one place.
                  </li>
                  <li className={styles.comprehensiveSportCoverage}>
                    Comprehensive Sport Coverage: Whether you're into mainstream
                    sports or niche disciplines, Athlete's Academy provides
                    access to a wide range of coaching services.
                  </li>
                </ul>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.joinAthletesAcademy}>
                  Join Athlete's Academy today and embark on a journey of
                  athletic excellence! No matter your skill level or experience,
                  our platform is designed to empower you on your sporting
                  endeavors. Start your training with us and unlock your full
                  potential!
                </p>
              </span>
            </h3>
          </div>
        </section>
        <section className={styles.groupParentAthleteSports}>
          <CricketIcon
            propAlignSelf="unset"
            propWidth="1603px"
            propPadding="0px var(--padding-xl)"
            propMargin="0"
          />
          <FrameSecureBox />
        </section>
      </main>
    </div>
  );
};

export default Coach;
