import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTennisCardImageClick = useCallback(() => {
    // Please sync "Landingh page 2" to the project
  }, []);

  const onBasketballCardImageClick = useCallback(() => {
    // Please sync "Landingh page 3" to the project
  }, []);

  const onYogaCardImageClick = useCallback(() => {
    // Please sync "Landingh page 4" to the project
  }, []);

  const onMoreContainerClick = useCallback(() => {
    navigate("/category");
  }, [navigate]);

  return (
    <div className={styles.sportsParent}>
      <h1 className={styles.sports}>Sports</h1>
      <div className={styles.frameSportsCard}>
        <div className={styles.footballTennisBasketballYog}>
          <h1 className={styles.football}>Football</h1>
          <h1 className={styles.tennis}>Tennis</h1>
          <h1 className={styles.basketball}>Basketball</h1>
          <h1 className={styles.yoga}>Yoga</h1>
        </div>
        <div className={styles.welcomeToAthletesContainer}>
          <p className={styles.welcomeToAthletes}>
            Welcome to Athlete's Academy – Your Gateway to Sporting Excellence!
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
      <div className={styles.cursorRectangle}>
        <div className={styles.cursor} />
        <div className={styles.wrapperFootballCardParent}>
          <div className={styles.wrapperFootballCard}>
            <img
              className={styles.footballCardIcon}
              loading="eager"
              alt=""
              src="/football-card@2x.png"
            />
          </div>
          <div className={styles.cardGroupSports}>
            <div className={styles.sportsCards}>
              <img
                className={styles.tennisCardIcon}
                loading="eager"
                alt=""
                src="/tennis-card1@2x.png"
                onClick={onTennisCardImageClick}
              />
            </div>
            <div className={styles.sportsCards1}>
              <img
                className={styles.basketballCardIcon}
                loading="eager"
                alt=""
                src="/basketball-card1@2x.png"
                onClick={onBasketballCardImageClick}
              />
            </div>
            <img
              className={styles.yogaCardIcon}
              loading="eager"
              alt=""
              src="/yoga-card1@2x.png"
              onClick={onYogaCardImageClick}
            />
            <div className={styles.moreWrapper}>
              <div className={styles.more} onClick={onMoreContainerClick}>
                <img
                  className={styles.arrowIcon}
                  loading="eager"
                  alt=""
                  src="/arrow.svg"
                />
                <div className={styles.more1}>More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
