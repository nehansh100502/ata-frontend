import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

type FrameComponent7Type = {
  maskGroup?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  maskGroup,
}) => {
  return (
    <div className={styles.coachCard}>
      <div className={styles.maskGroupParent}>
        <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
        <h3 className={styles.personalizedCoachingOurContainer}>
          <span className={styles.personalizedCoachingOurContainer1}>
            <ul className={styles.personalizedCoachingOurPla}>
              <li className={styles.personalizedCoachingOur}>
                Personalized Coaching: Our platform offers one-on-one sessions,
                ensuring personalized attention to address your unique needs and
                goals.
              </li>
              <li className={styles.experiencedMentorsConnect}>
                Experienced Mentors: Connect with coaches and mentors who have a
                wealth of experience in their respective sports, bringing
                valuable insights to your training.
              </li>
              <li className={styles.flexibleSchedulingWe}>
                Flexible Scheduling: We understand the demands of a busy
                schedule. That's why we provide flexibility in scheduling
                sessions to accommodate your lifestyle.
              </li>
              <li className={styles.seamlessChatPlatform}>
                Seamless Chat Platform: Our user-friendly chat platform makes it
                easy for you to interact with coaches, receive feedback, and
                track your progress, all in one place.
              </li>
              <li className={styles.comprehensiveSportCoverage}>
                Comprehensive Sport Coverage: Whether you're into mainstream
                sports or niche disciplines, Athlete's Academy provides access
                to a wide range of coaching services.
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.joinAthletesAcademy}>
              Join Athlete's Academy today and embark on a journey of athletic
              excellence! No matter your skill level or experience, our platform
              is designed to empower you on your sporting endeavors. Start your
              training with us and unlock your full potential!
            </p>
          </span>
        </h3>
      </div>
    </div>
  );
};

export default FrameComponent7;
