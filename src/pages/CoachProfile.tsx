import { FunctionComponent } from "react";
import GroupComponent from "../components/GroupComponent";
import FrameComponent5 from "../components/FrameComponent5";
import styles from "./CoachProfile.module.css";

const CoachProfile: FunctionComponent = () => {
  return (
    <div className={styles.coachProfile}>
      <main className={styles.coachFrame}>
        <GroupComponent />
        <div className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src="/group-13.svg" />
          <div className={styles.closeParent}>
            <h3 className={styles.close}>Close</h3>
            <img
              className={styles.materialSymbolscloseIcon}
              loading="eager"
              alt=""
              src="/materialsymbolsclose.svg"
            />
          </div>
          <FrameComponent5
            detailsAboutYourHealthAnd="Details about your Experince"
            rectangleDivAlignSelf="unset"
            rectangleDivWidth="531px"
            rectangleDivPadding="0px 0px var(--padding-4xs) 0px"
            propPadding="var(--padding-lg) var(--padding-4xl)"
            propHeight="97px"
            propHeight1="97px"
          />
          <div className={styles.saveButtonFrame}>
            <div className={styles.infoRectangle}>
              <div className={styles.saveGroup}>
                <div className={styles.squareContainer} />
                <div className={styles.finalizeFrame}>
                  <div className={styles.finalizeFrameChild} />
                  <div className={styles.save}>Save</div>
                </div>
              </div>
              <div className={styles.legalNoticeFrame}>
                <div className={styles.copyright2022FixMyBuild}>
                  <b className={styles.copyright2022}>
                    Copyright © 2024 Fix MANGLAM Ltd. All Rights Reserved.
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.fixmybuild}>
        <span className={styles.fix}>Fix</span>
        <span className={styles.mybuild}>MyBuild</span>
      </div>
      <div className={styles.backgroundRectangle} />
    </div>
  );
};

export default CoachProfile;
