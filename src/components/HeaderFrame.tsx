import { FunctionComponent, useCallback } from "react";
import styles from "./HeaderFrame.module.css";

const HeaderFrame: FunctionComponent = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "Landing" to the project
  }, []);

  return (
    <div className={styles.headerFrame}>
      <header className={styles.lockupColor}>
        <div className={styles.childrenContainer}>
          <div className={styles.cricketNode} />
          <div className={styles.footballNode}>
            <div className={styles.tennisNode}>
              <b className={styles.athletes}>{`Athlete's `}</b>
              <div className={styles.boxingNode}>
                <div className={styles.skatingNode} />
                <img
                  className={styles.iconColor1}
                  loading="eager"
                  alt=""
                  src="/icon-color-1@2x.png"
                />
              </div>
            </div>
            <b className={styles.academy}>Academy</b>
          </div>
          <div className={styles.coachesList}>
            <div className={styles.counselingFrame}>
              <div className={styles.home} onClick={onHomeTextClick}>
                Home
              </div>
              <div className={styles.category}>Category</div>
              <div className={styles.blogs}>Blogs</div>
              <div className={styles.wallet}>Wallet</div>
              <div className={styles.search}>
                <div className={styles.searchChild} />
                <img
                  className={styles.termsOfUse}
                  alt=""
                  src="/terms-of-use.svg"
                />
                <div className={styles.nameSportsCategory}>
                  Name, Sports, Category
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secureContainer}>
            <div className={styles.privateInfo}>
              <div className={styles.costumerLogin}>Costumer login</div>
              <div className={styles.signUp}>
                <div className={styles.signUpChild} />
                <img
                  className={styles.searchBoxContainer}
                  alt=""
                  src="/vector-1.svg"
                />
                <div className={styles.signUp1}>Sign up</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderFrame;
