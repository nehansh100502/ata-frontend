import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCategoryTextClick = useCallback(() => {
    navigate("/category");
  }, [navigate]);

  return (
    <div className={styles.landingPage1}>
      <div className={styles.landingPage1Child} />
      <header className={styles.landingPage1Item} />
      <div className={styles.cardCircleGroupParent}>
        <img
          className={styles.cardCircleGroup}
          alt=""
          src="/card-circle-group@2x.png"
        />
        <FrameComponent />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <b className={styles.welcomeToAthletesContainer}>
            <p className={styles.welcomeToAthletes}>
              Welcome to Athlete's Academy – Your Gateway to Sporting
              Excellence!
            </p>
            <p className={styles.atAthletesAcademy}>
              At Athlete's Academy, we are dedicated to connecting aspiring
              athletes with experienced coaches and mentors through our
              cutting-edge chat platform. Whether you're passionate about
              football, tennis, cricket, athletics, yoga, or any other sport,
              we've got you covered!
            </p>
          </b>
        </div>
        <div className={styles.academyTitle}>
          <div className={styles.athletesFrame}>
            <div className={styles.athletesText}>
              <h3 className={styles.athletes}>{`Athlete's `}</h3>
              <b className={styles.academy}>Academy</b>
            </div>
          </div>
          <div className={styles.imageFrame}>
            <img
              className={styles.whatsappImage20240119At1}
              loading="eager"
              alt=""
              src="/whatsapp-image-20240119-at-1432-1@2x.png"
            />
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
            </div>
            <div className={styles.imageFrameChild} />
            <img
              className={styles.iconColor1}
              loading="eager"
              alt=""
              src="/icon-color-1@2x.png"
            />
          </div>
          <div className={styles.homeParent}>
            <img
              className={styles.lockupWhite1}
              loading="eager"
              alt=""
              src="/lockup-white-11@2x.png"
            />
            <div className={styles.homePageSections}>
              <div className={styles.home}>Home</div>
              <div className={styles.category} onClick={onCategoryTextClick}>
                Category
              </div>
              <div className={styles.blogs}>Blogs</div>
              <div className={styles.wallet}>Wallet</div>
              <TextField
                className={styles.search}
                color="primary"
                variant="filled"
                sx={{
                  "& .MuiInputBase-root": { height: "26px" },
                  width: "185px",
                }}
              />
            </div>
          </div>
          <div className={styles.loginParent}>
            <div className={styles.loginForm}>
              <div className={styles.costumerLogin}>Costumer login</div>
              <Button
                className={styles.signUp}
                disableElevation={true}
                color="primary"
                variant="contained"
                sx={{ borderRadius: "0px 0px 0px 0px", width: 104 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
