import { FunctionComponent } from "react";
import GroupComponent from "../components/GroupComponent";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./Profile.module.css";

const Profile: FunctionComponent = () => {
  return (
    <div className={styles.profile}>
      <main className={styles.frameParent}>
        <GroupComponent />
        <div className={styles.frameGroup}>
          <img className={styles.frameChild} alt="" src="/group-13.svg" />
          <FrameComponent4 />
          <div className={styles.copyright2022FixMyBuildWrapper}>
            <div className={styles.copyright2022FixMyBuild}>
              <b className={styles.copyright2022}>
                Copyright © 2024 Fix MANGLAM Ltd. All Rights Reserved.
              </b>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.fixmybuild}>
        <span className={styles.fix}>Fix</span>
        <span className={styles.mybuild}>MyBuild</span>
      </div>
      <div className={styles.profileChild} />
    </div>
  );
};

export default Profile;
