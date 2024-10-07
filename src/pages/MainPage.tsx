import { FunctionComponent, useCallback } from "react";
import GroupFrame from "../components/GroupFrame";
import styles from "./MainPage.module.css";

const MainPage: FunctionComponent = () => {
  const onTennisCardImageClick = useCallback(() => {
    // Please sync "Landingh page 2" to the project
  }, []);

  const onBasketballCardImageClick = useCallback(() => {
    // Please sync "Landingh page 3" to the project
  }, []);

  const onYogaCardImageClick = useCallback(() => {
    // Please sync "Landingh page 4" to the project
  }, []);

  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPageChild} />
      <img
        className={styles.whatsappImage20240119At1}
        alt=""
        src="/whatsapp-image-20240119-at-1432-1@2x.png"
      />
      <div className={styles.wrapperFootballCard}>
        <img
          className={styles.footballCardIcon}
          loading="eager"
          alt=""
          src="/football-card@2x.png"
        />
      </div>
      <img
        className={styles.tennisCardIcon}
        loading="eager"
        alt=""
        src="/tennis-card@2x.png"
        onClick={onTennisCardImageClick}
      />
      <img
        className={styles.basketballCardIcon}
        loading="eager"
        alt=""
        src="/basketball-card@2x.png"
        onClick={onBasketballCardImageClick}
      />
      <img
        className={styles.yogaCardIcon}
        loading="eager"
        alt=""
        src="/yoga-card@2x.png"
        onClick={onYogaCardImageClick}
      />
      <div className={styles.more}>More</div>
      <img
        className={styles.arrowIcon}
        loading="eager"
        alt=""
        src="/arrow.svg"
      />
      <div className={styles.cursor} />
      <div className={styles.welcomeToAthletesContainer}>
        <p className={styles.welcomeToAthletes}>
          Welcome to Athlete's Academy – Your Gateway to Sporting Excellence!
        </p>
        <p className={styles.atAthletesAcademy}>
          At Athlete's Academy, we are dedicated to connecting aspiring athletes
          with experienced coaches and mentors through our cutting-edge chat
          platform. Whether you're passionate about football, tennis, cricket,
          athletics, yoga, or any other sport, we've got you covered!
        </p>
      </div>
      <div className={styles.sports}>Sports</div>
      <div className={styles.footballParent}>
        <b className={styles.football}>Football</b>
        <b className={styles.tennis}>Tennis</b>
        <b className={styles.basketball}>Basketball</b>
        <b className={styles.yoga}>Yoga</b>
      </div>
      <div className={styles.cardFrameSet}>
        <div className={styles.footballCard} />
        <div className={styles.whatsAppImageParent}>
          <div className={styles.whatsAppImage} />
          <div className={styles.lockup}>
            <div className={styles.cardCircleGroup}>
              <img
                className={styles.lockupWhite1}
                loading="eager"
                alt=""
                src="/lockup-white-1@2x.png"
              />
            </div>
            <img
              className={styles.cardCircleGroup1}
              alt=""
              src="/card-circle-group@2x.png"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <b className={styles.welcomeToAthletesContainer1}>
              <p className={styles.welcomeToAthletes1}>
                Welcome to Athlete's Academy – Your Gateway to Sporting
                Excellence!
              </p>
              <p className={styles.atAthletesAcademy1}>
                At Athlete's Academy, we are dedicated to connecting aspiring
                athletes with experienced coaches and mentors through our
                cutting-edge chat platform. Whether you're passionate about
                football, tennis, cricket, athletics, yoga, or any other sport,
                we've got you covered!
              </p>
            </b>
          </div>
        </div>
      </div>
      <GroupFrame />
    </div>
  );
};

export default MainPage;
