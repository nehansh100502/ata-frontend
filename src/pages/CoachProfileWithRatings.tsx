import { FunctionComponent, useCallback } from "react";
import GroupA from "../components/GroupA";
import { useNavigate } from "react-router-dom";
import DhruvTennisBoxing from "../components/DhruvTennisBoxing";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent7 from "../components/FrameComponent7";
import CricketIcon from "../components/CricketIcon";
import FrameSecureBox from "../components/FrameSecureBox";
import styles from "./CoachProfileWithRatings.module.css";

const CoachProfileWithRatings: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    // Please sync "Landing" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/category");
  }, [navigate]);

  return (
    <div className={styles.coachprofileWithRatings}>
      <div className={styles.coachprofileWithRatingsChild} />
      <GroupA onHomeTextClick={onHomeTextClick} />
      <main className={styles.vectorMinParent}>
        <section className={styles.vectorMin}>
          <div className={styles.footerLinks}>
            <div className={styles.chatNowButton}>
              <div className={styles.callNowButton}>
                <div
                  className={styles.rectangleParent}
                  onClick={onGroupContainerClick}
                >
                  <div className={styles.frameChild} />
                  <div className={styles.football}>Football</div>
                </div>
                <img
                  className={styles.callNowButtonChild}
                  loading="eager"
                  alt=""
                  src="/group-140.svg"
                />
                <h3 className={styles.coaches}>Coaches</h3>
              </div>
            </div>
            <div className={styles.athletesAcademy}>
              <div className={styles.astrocard}>
                <div className={styles.astrocardChild} />
                <div className={styles.privacyPolicyTerms}>
                  <div className={styles.contactUsGroup}>
                    <div className={styles.securePayment}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameItem} />
                        <div className={styles.online}>Online</div>
                      </div>
                    </div>
                    <img
                      className={styles.materialSymbolsverifiedRounIcon}
                      loading="eager"
                      alt=""
                      src="/materialsymbolsverifiedrounded.svg"
                    />
                  </div>
                  <div className={styles.companyLogo}>
                    <div className={styles.wrapperConnectFrame}>
                      <img
                        className={styles.connectFrameIcon}
                        alt=""
                        src="/connect-frame@2x.png"
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.ratingChild} />
                      <img
                        className={styles.starIcon}
                        loading="eager"
                        alt=""
                        src="/star.svg"
                      />
                      <div className={styles.vivekCardFrame}>5</div>
                    </div>
                  </div>
                  <div className={styles.connect}>
                    <div className={styles.groupFrame}>
                      <div className={styles.personalizedCoachingFrame}>
                        <div className={styles.sam}>Sam</div>
                        <div className={styles.footballPlayerUp}>
                          Football player, Up Skill
                        </div>
                      </div>
                    </div>
                    <div className={styles.productCounselingFrame}>
                      <div className={styles.englishHindi}>English, Hindi</div>
                    </div>
                    <div className={styles.contactUsFrame}>
                      <div className={styles.yrs}>8 yrs</div>
                    </div>
                    <div className={styles.lockupColorFrame}>
                      <img
                        className={styles.priceIcon}
                        loading="eager"
                        alt=""
                        src="/price-icon.svg"
                      />
                      <div className={styles.min}>30/min</div>
                    </div>
                  </div>
                </div>
                <div className={styles.facebookInstagramLinkedinYo}>
                  <div className={styles.priv} />
                  <div className={styles.productCounselingFrameWrapper}>
                    <div className={styles.productCounselingFrame1}>
                      <div className={styles.companyLogoFrame}>
                        <div className={styles.frameGroupConnect}>
                          <img
                            className={styles.groupIcon}
                            loading="eager"
                            alt=""
                            src="/group.svg"
                          />
                          <div className={styles.kMins}>
                            <span className={styles.k}>60k</span>
                            <span> mins</span>
                          </div>
                        </div>
                        <div className={styles.englishHindiTelegu}>
                          <div className={styles.callNowChatNow}>
                            <div className={styles.vivekCard} />
                          </div>
                          <div className={styles.maskGroup}>
                            <div className={styles.kMins1}>
                              <span className={styles.k1}>30k</span>
                              <span> mins</span>
                            </div>
                            <img
                              className={styles.fluentcall16RegularIcon}
                              loading="eager"
                              alt=""
                              src="/fluentcall16regular.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.vijayCricketAjayFootball}>
                        <div className={styles.watchIntro}>
                          <div className={styles.wrapperPrivacyPolicyTermsO}>
                            <img
                              className={styles.privacyPolicyTermsOfUse}
                              alt=""
                              src="/privacy-policy-terms-of-use@2x.png"
                            />
                          </div>
                          <img
                            className={styles.videoIcon}
                            alt=""
                            src="/video-icon.svg"
                          />
                          <div className={styles.watchIntro1}>watch Intro</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.reviews}>
                <div className={styles.reviewsChild} />
                <div className={styles.back} />
                <div className={styles.frameProductCounseling}>
                  <div className={styles.companyName}>
                    <div className={styles.ratingOverview}>Rating overview</div>
                    <div className={styles.facebookInstagramLinkedinYo1}>
                      <div className={styles.securePayCoaches}>
                        <div className={styles.frameParentWithChildrenInf}>
                          <div className={styles.parentFrameA}>
                            <div className={styles.maskGroupIconContainer}>
                              <span>5/</span>
                              <span className={styles.span}>5</span>
                            </div>
                          </div>
                          <img
                            className={styles.starIcon1}
                            loading="eager"
                            alt=""
                            src="/star-1.svg"
                          />
                          <div className={styles.ratings}>348 Ratings</div>
                        </div>
                        <div className={styles.maskGroupCoaches}>
                          <div className={styles.footballVolleyballTypeParent}>
                            <div className={styles.footballVolleyballType}>
                              <div className={styles.languageFramesIcon}>
                                <div className={styles.callNowButton1}>5</div>
                                <div className={styles.callNowButton2}>4</div>
                              </div>
                              <div className={styles.chatNowButtonLabel}>
                                <div className={styles.coloredRec}>
                                  <div className={styles.coloredRecChild} />
                                  <div className={styles.coloredRecItem} />
                                </div>
                                <div className={styles.littleColore}>
                                  <div className={styles.littleColoreChild} />
                                  <div className={styles.littleColoreItem} />
                                </div>
                              </div>
                            </div>
                            <div className={styles.athletesAcademyName}>
                              <div className={styles.productServicesFrame}>
                                <div className={styles.legalFramesPrivacy}>
                                  3
                                </div>
                                <div className={styles.littleColore1}>
                                  <div className={styles.littleColoreInner} />
                                  <div className={styles.coachSecureVerified} />
                                </div>
                              </div>
                              <div className={styles.productServicesFrame1}>
                                <div className={styles.div}>2</div>
                                <div className={styles.littleColoreWrapper}>
                                  <div className={styles.littleColore2}>
                                    <div className={styles.rectangleDiv} />
                                    <div
                                      className={styles.generalParentFrameB}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.parent}>
                              <div className={styles.div1}>1</div>
                              <div className={styles.littleColore3}>
                                <div className={styles.littleColoreChild1} />
                                <div className={styles.frameGroup} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.callNowButton3}>
                  <div className={styles.chatNowButton1}>
                    <div className={styles.frameParent}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.frameInner} />
                        <img
                          className={styles.carbonuserFilledIcon}
                          loading="eager"
                          alt=""
                          src="/carbonuserfilled.svg"
                        />
                      </div>
                      <div className={styles.maskgroup}>
                        <div className={styles.savi}>Savi</div>
                        <img
                          className={styles.starIcon2}
                          loading="eager"
                          alt=""
                          src="/star-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.chatNowButton2}>
                    <div className={styles.amazingCoachMostly}>
                      Amazing Coach mostly all doubts are clear.
                    </div>
                  </div>
                  <div className={styles.footballVolleyball} />
                  <div className={styles.chatNowButton3}>
                    <div className={styles.wrapperRectangle86Parent}>
                      <div className={styles.wrapperRectangle86}>
                        <img
                          className={styles.wrapperRectangle86Child}
                          loading="eager"
                          alt=""
                          src="/rectangle-86@2x.png"
                        />
                      </div>
                      <div className={styles.farnazParent}>
                        <div className={styles.farnaz}>Farnaz</div>
                        <img
                          className={styles.starIcon3}
                          loading="eager"
                          alt=""
                          src="/star-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.chatNowButton4}>
                    <div className={styles.coachGentlyAnsweredContainer}>
                      <p className={styles.coachGently}>
                        Coach gently answered to my questions and
                      </p>
                      <p className={styles.sharedRemedialAdvise}>
                        shared remedial advise which would create good
                      </p>
                      <p className={styles.vibesForFuture}>
                        vibes for future goal
                      </p>
                    </div>
                  </div>
                  <div className={styles.englishHindi1}>
                    <div className={styles.frameConnect} />
                    <div className={styles.callNowParent}>
                      <div className={styles.chatNowParent}>
                        <div className={styles.wrapperRectangle87}>
                          <img
                            className={styles.wrapperRectangle87Child}
                            loading="eager"
                            alt=""
                            src="/rectangle-87@2x.png"
                          />
                        </div>
                        <div className={styles.productCounseling}>
                          <div className={styles.ravi}>Ravi</div>
                          <img
                            className={styles.starIcon4}
                            loading="eager"
                            alt=""
                            src="/star-4.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chatNowButton5}>
                    <div className={styles.heHasRevealedContainer}>
                      <p className={styles.heHasRevealed}>
                        He has revealed the problems and gave solutions
                      </p>
                      <p className={styles.toComeOut}>to come out of it</p>
                    </div>
                  </div>
                </div>
                <div className={styles.reviewsInner}>
                  <div className={styles.seeAllReviewsParent}>
                    <div className={styles.seeAllReviews}>See all reviews</div>
                    <img
                      className={styles.backArrowIcon}
                      loading="eager"
                      alt=""
                      src="/back-arrow.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.maskGroup1}>
          <div className={styles.groupFrame1}>
            <div className={styles.callNowButton4}>
              <div className={styles.chatNowButton6}>
                <DhruvTennisBoxing
                  maskGroup="/mask-group-12@2x.png"
                  maskGroup1="/mask-group-1@2x.png"
                  maskGroup2="/mask-group-2@2x.png"
                  propPadding="unset"
                />
                <FrameComponent6
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
                <FrameComponent1
                  maskGroup="/mask-group-12@2x.png"
                  maskGroup1="/mask-group-1@2x.png"
                  maskGroup2="/mask-group-2@2x.png"
                  propPadding="0px 0px var(--padding-8xs)"
                />
                <DhruvTennisBoxing
                  maskGroup="/mask-group-12@2x.png"
                  maskGroup1="/mask-group-1@2x.png"
                  maskGroup2="/mask-group-2@2x.png"
                  propPadding="unset"
                />
              </div>
            </div>
            <FrameComponent7 maskGroup="/mask-group-151.svg" />
            <CricketIcon
              propAlignSelf="stretch"
              propWidth="unset"
              propPadding="unset"
              propMargin="0"
            />
          </div>
          <FrameSecureBox />
        </section>
      </main>
    </div>
  );
};

export default CoachProfileWithRatings;
