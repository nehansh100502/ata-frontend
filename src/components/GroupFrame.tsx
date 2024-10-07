import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./GroupFrame.module.css";

const GroupFrame: FunctionComponent = () => {
  return (
    <header className={styles.groupFrame}>
      <div className={styles.welcomeMessage} />
      <div className={styles.colorIcon}>
        <img
          className={styles.iconColor1}
          loading="eager"
          alt=""
          src="/icon-color-1@2x.png"
        />
        <div className={styles.sportsCategoryName}>
          <div className={styles.homeCategory}>
            <h3 className={styles.athletes}>{`Athlete's `}</h3>
            <b className={styles.academy}>Academy</b>
          </div>
        </div>
      </div>
      <div className={styles.loginText}>
        <div className={styles.cardCircleGroup}>
          <div className={styles.home}>Home</div>
          <div className={styles.category}>Category</div>
          <div className={styles.blogs}>Blogs</div>
          <div className={styles.wallet}>Wallet</div>
          <TextField
            className={styles.search}
            color="primary"
            variant="filled"
            sx={{ "& .MuiInputBase-root": { height: "26px" }, width: "184px" }}
          />
        </div>
      </div>
      <div className={styles.customerLogin}>
        <div className={styles.signUpButton}>
          <div className={styles.costumerLogin}>Costumer login</div>
          <button className={styles.signUp}>
            <div className={styles.signUpChild} />
            <img className={styles.vectorSignUp} alt="" src="/vector-1.svg" />
            <div className={styles.signUp1}>Sign up</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default GroupFrame;
