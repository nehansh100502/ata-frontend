import { FunctionComponent, useCallback } from "react";
import HeaderFrame from "../components/HeaderFrame";
import { useNavigate } from "react-router-dom";
import CricketIcon from "../components/CricketIcon";
import ContactUsGroup from "../components/ContactUsGroup";
import styles from "./Category.module.css";

const Category: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFootballCardImageClick = useCallback(() => {
    navigate("/coach");
  }, [navigate]);

  return (
    <div className={styles.category}>
      <div className={styles.categoryChild} />
      <HeaderFrame />
      <main className={styles.lockIcon}>
        <div className={styles.maskGroupParent}>
          <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
          <img className={styles.maskGroupIcon1} alt="" src="/mask-group.svg" />
          <div className={styles.basketball}>Basketball</div>
        </div>
        <section className={styles.searchIcon}>
          <div className={styles.textInputField}>
            <div className={styles.backgroundImage}>
              <div className={styles.search}>
                <div className={styles.searchChild} />
                <div className={styles.flexContainer}>
                  <img
                    className={styles.buttonGroupIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className={styles.nameSportsCategory}>
                    Name, Sports, Category
                  </div>
                </div>
                <img
                  className={styles.listItemIcon}
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <div className={styles.lineSeparator}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.popularNow}>Popular Now</div>
                </div>
                <img
                  className={styles.lineSeparatorChild}
                  loading="eager"
                  alt=""
                  src="/group-138.svg"
                />
              </div>
            </div>
            <div className={styles.circleShape}>
              <div className={styles.circleShapeChild} />
              <div className={styles.group}>
                <img
                  className={styles.footballCardIcon}
                  alt=""
                  src="/football-card@2x.png"
                  onClick={onFootballCardImageClick}
                />
                <div className={styles.horizontalRuleParent}>
                  <div className={styles.horizontalRule}>
                    <img
                      className={styles.maskGroupIcon2}
                      alt=""
                      src="/mask-group.svg"
                    />
                    <img
                      className={styles.maskGroupIcon3}
                      loading="eager"
                      alt=""
                      src="/mask-group.svg"
                    />
                  </div>
                  <div className={styles.football}>Football</div>
                </div>
              </div>
              <div className={styles.group1}>
                <img
                  className={styles.tennisCardIcon}
                  alt=""
                  src="/tennis-card@2x.png"
                />
                <div className={styles.frameParent}>
                  <div className={styles.maskGroupGroup}>
                    <img
                      className={styles.maskGroupIcon4}
                      alt=""
                      src="/mask-group.svg"
                    />
                    <img
                      className={styles.maskGroupIcon5}
                      loading="eager"
                      alt=""
                      src="/mask-group.svg"
                    />
                  </div>
                  <div className={styles.tennis}>Tennis</div>
                </div>
              </div>
              <div className={styles.group2}>
                <img
                  className={styles.yogaCardIcon}
                  alt=""
                  src="/yoga-card@2x.png"
                />
                <div className={styles.frameGroup}>
                  <div className={styles.maskGroupContainer}>
                    <img
                      className={styles.maskGroupIcon6}
                      alt=""
                      src="/mask-group-6.svg"
                    />
                    <img
                      className={styles.maskGroupIcon7}
                      loading="eager"
                      alt=""
                      src="/mask-group-6.svg"
                    />
                  </div>
                  <div className={styles.yoga}>Yoga</div>
                </div>
              </div>
              <img
                className={styles.cricketIcon}
                loading="eager"
                alt=""
                src="/cricket@2x.png"
              />
              <div className={styles.cricketWrapper}>
                <div className={styles.cricket}>Cricket</div>
              </div>
              <img
                className={styles.basketballCardIcon}
                loading="eager"
                alt=""
                src="/basketball-card2@2x.png"
              />
              <div className={styles.productCounseling}>
                <img
                  className={styles.boxingIcon}
                  loading="eager"
                  alt=""
                  src="/boxing@2x.png"
                />
                <div className={styles.groupDiv}>
                  <img
                    className={styles.maskGroupIcon8}
                    alt=""
                    src="/mask-group-8.svg"
                  />
                  <div className={styles.boxing}>Boxing</div>
                </div>
              </div>
              <div className={styles.group3}>
                <img
                  className={styles.maskGroupIcon9}
                  alt=""
                  src="/mask-group-9.svg"
                />
                <img
                  className={styles.maskGroupIcon10}
                  alt=""
                  src="/mask-group-9.svg"
                />
              </div>
            </div>
            <div className={styles.lockup}>
              <div className={styles.contactUs}>
                <img
                  className={styles.skatingIcon}
                  alt=""
                  src="/skating@2x.png"
                />
                <div className={styles.verifiedCoachesParent}>
                  <div className={styles.verifiedCoaches}>
                    <img
                      className={styles.maskGroupIcon11}
                      alt=""
                      src="/mask-group.svg"
                    />
                    <img
                      className={styles.maskGroupIcon12}
                      alt=""
                      src="/mask-group.svg"
                    />
                  </div>
                  <div className={styles.skating}>Skating</div>
                </div>
              </div>
              <div className={styles.contactUs1}>
                <img
                  className={styles.athleticsIcon}
                  alt=""
                  src="/athletics@2x.png"
                />
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.maskGroupIcon13}
                      alt=""
                      src="/mask-group-13.svg"
                    />
                    <img
                      className={styles.maskGroupIcon14}
                      alt=""
                      src="/mask-group-13.svg"
                    />
                  </div>
                  <div className={styles.athletics}>Athletics</div>
                </div>
              </div>
              <div className={styles.maskGroupParent1}>
                <img
                  className={styles.maskGroupIcon15}
                  alt=""
                  src="/mask-group-15.svg"
                />
                <img className={styles.arrwoIcon} alt="" src="/arrwo.svg" />
                <div className={styles.more}>More</div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.groupOfIconsWrapper}>
          <div className={styles.groupOfIcons}>
            <div className={styles.maskGroupParent2}>
              <img
                className={styles.maskGroupIcon16}
                alt=""
                src="/mask-group-16.svg"
              />
              <div className={styles.personalizedCoachingOurContainer}>
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
                      Comprehensive Sport Coverage: Whether you're into
                      mainstream sports or niche disciplines, Athlete's Academy
                      provides access to a wide range of coaching services.
                    </li>
                  </ul>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.joinAthletesAcademy}>
                    Join Athlete's Academy today and embark on a journey of
                    athletic excellence! No matter your skill level or
                    experience, our platform is designed to empower you on your
                    sporting endeavors. Start your training with us and unlock
                    your full potential!
                  </p>
                </span>
              </div>
            </div>
            <CricketIcon />
          </div>
        </section>
        <ContactUsGroup />
      </main>
    </div>
  );
};

export default Category;
