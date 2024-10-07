import { FunctionComponent } from "react";
import styles from "./GroupA.module.css";

type GroupAType = {
  /** Action props */
  onHomeTextClick?: () => void;
};

const GroupA: FunctionComponent<GroupAType> = ({ onHomeTextClick }) => {
  return (
    <header className={styles.groupA}>
      <div className={styles.frameB}>
        <div className={styles.lockupcolor}>
          <div className={styles.athletesAcademy} />
          <div className={styles.productCoaches}>
            <div className={styles.counselingCoachAdvice}>
              <h2 className={styles.athletes}>{`Athlete's `}</h2>
              <div className={styles.football}>
                <div className={styles.tennis} />
                <img
                  className={styles.iconColor1}
                  loading="eager"
                  alt=""
                  src="/icon-color-1@2x.png"
                />
              </div>
            </div>
            <h3 className={styles.academy}>Academy</h3>
          </div>
          <div className={styles.skating}>
            <div className={styles.frameC}>
              <div className={styles.home} onClick={onHomeTextClick}>
                Home
              </div>
              <div className={styles.category}>Category</div>
              <div className={styles.blogs}>Blogs</div>
              <div className={styles.wallet}>Wallet</div>
              <div className={styles.search}>
                <div className={styles.searchChild} />
                <img
                  className={styles.dhruvIcon}
                  alt=""
                  src="/terms-of-use.svg"
                />
                <div className={styles.nameSportsCategory}>
                  Name, Sports, Category
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sEEMORE}>
            <div className={styles.frameD}>
              <div className={styles.costumerLogin}>Costumer login</div>
              <div className={styles.signUp}>
                <div className={styles.signUpChild} />
                <img
                  className={styles.frameContainerIcon}
                  alt=""
                  src="/vector-1.svg"
                />
                <div className={styles.signUp1}>Sign up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GroupA;
