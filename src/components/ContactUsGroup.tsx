import { FunctionComponent } from "react";
import styles from "./ContactUsGroup.module.css";

const ContactUsGroup: FunctionComponent = () => {
  return (
    <section className={styles.contactUsGroup}>
      <div className={styles.contactUsGroupChild} />
      <div className={styles.secureArea}>
        <div className={styles.frameParent}>
          <div className={styles.lockupColor1Wrapper}>
            <img
              className={styles.lockupColor1}
              alt=""
              src="/lockup-color-1@2x.png"
            />
          </div>
          <div className={styles.athletesAcademyContainer}>
            <p className={styles.athletesAcademy}>
              Athlete's Academy – Your Gateway to Sporting Excellence!
            </p>
            <p className={styles.atAthletesAcademy}>
              At Athlete's Academy, we are dedicated to connecting aspiring
              athletes with experienced coaches and mentors through our
              cutting-edge chat platform. Whether you're passionate about
              football, tennis, cricket, athletics, yoga, or any other sport,
              we've got you covered!
            </p>
          </div>
        </div>
        <div className={styles.secureAreaInner}>
          <div className={styles.frameGroup}>
            <div className={styles.productParent}>
              <div className={styles.product}>{`Product `}</div>
              <div className={styles.counselingCoachAdvice}>
                <p className={styles.counseling}>Counseling</p>
                <p className={styles.coachAdvice}>Coach-Advice</p>
              </div>
            </div>
            <div className={styles.coachesParent}>
              <div className={styles.coaches}>Coaches</div>
              <div className={styles.cricketFootballTennisContainer}>
                <p className={styles.cricket}>Cricket</p>
                <p className={styles.football}>Football</p>
                <p className={styles.tennis}>Tennis</p>
                <p className={styles.yoga}>Yoga</p>
                <p className={styles.boxing}>Boxing</p>
                <p className={styles.skating}>Skating</p>
                <p className={styles.athletics}>Athletics</p>
                <p className={styles.basketball}>Basketball</p>
                <p className={styles.more}>More</p>
              </div>
            </div>
            <div className={styles.productCoachesFrame}>
              <div className={styles.company}>Company</div>
              <div className={styles.privacyPolicyTermsContainer}>
                <p className={styles.privacyPolicy}>Privacy Policy</p>
                <p className={styles.termsOfUse}>Terms Of Use</p>
                <p className={styles.joinUs}>Join Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.privacyPolicyJoinUsFrame}>
        <div className={styles.chatSupport}>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.availableOnChat}>
            <div className={styles.socialMediaIcons}>
              <div className={styles.weAreAvailableContainer}>
                <p className={styles.weAreAvailable24X7OnCha}>
                  <span>{`       We are available 24 x 7 on chat support, `}</span>
                  <span className={styles.clickToStart}>
                    click to start chat
                  </span>
                </p>
                <p className={styles.emailIdNdsdndsnndkncom}>
                  <span className={styles.emailId}> Email ID</span>
                  <span> : ndsdndsn@ndkn.com</span>
                </p>
              </div>
              <img
                className={styles.socialMediaIconsChild}
                alt=""
                src="/group-115.svg"
              />
              <img
                className={styles.socialMediaIconsItem}
                alt=""
                src="/group-114.svg"
              />
            </div>
            <div className={styles.socialMediaPlatforms}>
              <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
              <img
                className={styles.instagramIcon}
                alt=""
                src="/instagram.svg"
              />
              <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
              <img className={styles.youtubeIcon} alt="" src="/youtube.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secureFrame}>
        <div className={styles.privateFrame}>
          <div className={styles.contactUsText}>
            <div className={styles.secureText}>
              <div className={styles.secure}>Secure</div>
              <div className={styles.confidentialText}>
                <div className={styles.privateConfidentialContainer}>
                  <p
                    className={styles.privateConfidential}
                  >{`       Private & Confidential`}</p>
                  <p className={styles.verifiedCoaches}> Verified Coaches</p>
                  <p className={styles.securePayments}> Secure Payments</p>
                </div>
                <img
                  className={styles.confidentialTextChild}
                  alt=""
                  src="/group-120.svg"
                />
                <img
                  className={styles.confidentialTextItem}
                  alt=""
                  src="/group-116.svg"
                />
                <img
                  className={styles.confidentialTextInner}
                  alt=""
                  src="/group-133.svg"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.privateFrameChild}
            alt=""
            src="/group-130.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsGroup;
