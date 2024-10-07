import { FunctionComponent } from "react";
import SignUpFrame from "./SignUpFrame";
import styles from "./FrameGroupMiddle.module.css";

const FrameGroupMiddle: FunctionComponent = () => {
  return (
    <form className={styles.frameGroupMiddle}>
      <img
        className={styles.frameGroupMiddleChild}
        alt=""
        src="/group-13.svg"
      />
      <div className={styles.alreadyHaveAccountText}>
        <div className={styles.signinText}>
          <b className={styles.close}>Close</b>
          <img
            className={styles.materialSymbolscloseIcon}
            loading="eager"
            alt=""
            src="/materialsymbolsclose.svg"
          />
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.instanceChild} alt="" src="/vector-4.svg" />
        <div className={styles.passwordParent}>
          <div
            className={styles.password}
          >{`Coach                                                                         `}</div>
          <img className={styles.icon} alt="" src="/icon.svg" />
        </div>
      </div>
      <div className={styles.frameGroupPassword}>
        <div className={styles.createAccountText}>
          <h1 className={styles.createAnAccount}>Create an Account</h1>
          <div className={styles.signinText1}>
            <div className={styles.alreadyHaveAn}>Already have an account?</div>
            <b className={styles.signIn}>Sign in</b>
          </div>
        </div>
      </div>
      <div className={styles.componentInstance}>
        <div className={styles.vectorArrowDown}>
          <div className={styles.groupFrame}>
            <div className={styles.fullName}>Full Name</div>
            <img
              className={styles.fullNameField}
              alt=""
              src="/full-name-field.svg"
            />
          </div>
          <div className={styles.passwordInputParent}>
            <div className={styles.passwordInput}>
              <div className={styles.password1}>Password*</div>
              <img className={styles.icon1} alt="" src="/icon.svg" />
            </div>
            <img
              className={styles.passwordContainerIcon}
              alt=""
              src="/forgot-password-link.svg"
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.passwordGroup}>
              <div className={styles.password2}>Confirm Password*</div>
              <img className={styles.icon2} alt="" src="/icon.svg" />
            </div>
            <img
              className={styles.instanceItem}
              alt=""
              src="/forgot-password-link.svg"
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.passwordContainer}>
              <div className={styles.password3}>Email</div>
              <img className={styles.icon3} alt="" src="/icon.svg" />
            </div>
            <img
              className={styles.instanceInner}
              alt=""
              src="/forgot-password-link.svg"
            />
          </div>
          <div className={styles.componentInstance1}>
            <div className={styles.component7}>
              <div className={styles.checkboxRectangle}>
                <div className={styles.passwordFrameGroup}>
                  <img
                    className={styles.textLabelFrame}
                    alt=""
                    src="/text-label-frame@2x.png"
                  />
                </div>
                <div className={styles.arrowDownIcon}>
                  <div className={styles.athleteOrCoach}>+44</div>
                </div>
                <img
                  className={styles.materialSymbolskeyboardArroIcon}
                  alt=""
                  src="/materialsymbolskeyboardarrowdown.svg"
                />
              </div>
              <img
                className={styles.orFrameGroup}
                loading="eager"
                alt=""
                src="/vector-4-4.svg"
              />
            </div>
            <div className={styles.passwordInputInstanceParent}>
              <div className={styles.passwordInputInstance}>
                <div className={styles.signupVectorFrame}>
                  <div className={styles.password4}>Mobile phone</div>
                  <img className={styles.icon4} alt="" src="/icon.svg" />
                </div>
              </div>
              <img
                className={styles.inputFormGroup}
                alt=""
                src="/vector-4-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.signUpButton}>
        <div className={styles.welcomeFrame}>
          <div className={styles.signUp}>
            <div className={styles.signUpChild} />
            <img className={styles.signUpText} alt="" src="/vector-1.svg" />
            <div className={styles.athlete}>Athlete</div>
          </div>
          <div className={styles.signUp1}>
            <div className={styles.signUpItem} />
            <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
            <div className={styles.coach}>{`Coach `}</div>
          </div>
        </div>
      </div>
      <div className={styles.checkboxFrame}>
        <div className={styles.orFrame}>
          <div className={styles.checkBox}>
            <div className={styles.checkbox} />
            <div className={styles.password5}>
              <p className={styles.iHaveReadAndAgreeToFixmy}>
                <span
                  className={styles.iHaveRead}
                >{`I have read and agree to FixMyBuild’s `}</span>
                <b className={styles.termsOfService}>Terms of Service</b>
                <span className={styles.span}>{` `}</span>
              </p>
              <p className={styles.andPrivacyPolicy}>
                <span className={styles.and}>{`and `}</span>
                <b className={styles.privacyPolicy}>Privacy Policy</b>
                <span className={styles.span1}>.</span>
              </p>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.register}>Register</div>
          </div>
        </div>
      </div>
      <div className={styles.orGroup}>
        <SignUpFrame
          orSignInWith="Or register with"
          group55="/group-551.svg"
          propDisplay="inline-block"
        />
      </div>
      <div className={styles.rectangle}>
        <div className={styles.welcomeToAta}>Welcome to ATA</div>
      </div>
    </form>
  );
};

export default FrameGroupMiddle;
