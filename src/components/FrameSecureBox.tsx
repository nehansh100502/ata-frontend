import { FunctionComponent } from "react";
import styles from "./FrameSecureBox.module.css";

const FrameSecureBox: FunctionComponent = () => {
  return (
    <footer className={styles.frameSecureBox}>
      <div className={styles.frameSecureBoxChild} />
      <div className={styles.frameProductAndCoaches}>
        <div className={styles.rectangleLockupColor}>
          <div className={styles.frameCricketFootballTennis}>
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
        <div className={styles.groupChatSupportClickTo}>
          <div className={styles.chatSupport}>
            <div className={styles.productCoaches}>
              <h3 className={styles.product}>{`Product `}</h3>
              <div className={styles.counselingCoachAdvice}>
                <p className={styles.counseling}>Counseling</p>
                <p className={styles.coachAdvice}>Coach-Advice</p>
              </div>
            </div>
            <div className={styles.productCoaches1}>
              <h3 className={styles.coaches}>Coaches</h3>
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
            <div className={styles.textCompanyName}>
              <h3 className={styles.company}>Company</h3>
              <div className={styles.privacyPolicyTermsContainer}>
                <p className={styles.privacyPolicy}>Privacy Policy</p>
                <p className={styles.termsOfUse}>Terms Of Use</p>
                <p className={styles.joinUs}>Join Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupSocialMediaIcons}>
        <div className={styles.frameSecurePrivateConfident}>
          <h3 className={styles.contactUs}>Contact Us</h3>
          <div className={styles.chatSupportButtons}>
            <div className={styles.chatSupport1}>
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
                className={styles.chatSupportChild}
                alt=""
                src="/group-115.svg"
              />
              <img
                className={styles.chatSupportItem}
                alt=""
                src="/group-114.svg"
              />
            </div>
            <div className={styles.socialMediaLinks}>
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
      <div className={styles.secureServices}>
        <div className={styles.secureServicesInner}>
          <div className={styles.secureParent}>
            <h3 className={styles.secure}>Secure</h3>
            <div className={styles.confidentialCoaches}>
              <div className={styles.privateConfidentialContainer}>
                <p
                  className={styles.privateConfidential}
                >{`       Private & Confidential`}</p>
                <p className={styles.verifiedCoaches}> Verified Coaches</p>
                <p className={styles.securePayments}> Secure Payments</p>
              </div>
              <img
                className={styles.confidentialCoachesChild}
                alt=""
                src="/group-120.svg"
              />
              <img
                className={styles.confidentialCoachesItem}
                alt=""
                src="/group-116.svg"
              />
              <img
                className={styles.confidentialCoachesInner}
                alt=""
                src="/group-133.svg"
              />
            </div>
          </div>
        </div>
        <img
          className={styles.secureServicesChild}
          alt=""
          src="/group-130.svg"
        />
      </div>
    </footer>
  );
};

export default FrameSecureBox;
