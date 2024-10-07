import { FunctionComponent, useCallback } from "react";
import GroupA from "../components/GroupA";
import ChatNowButton from "../components/ChatNowButton";
import DhruvTennisBoxing from "../components/DhruvTennisBoxing";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent7 from "../components/FrameComponent7";
import CricketIcon from "../components/CricketIcon";
import FrameSecureBox from "../components/FrameSecureBox";
import styles from "./CoachChat.module.css";

const CoachChat: FunctionComponent = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "Landing" to the project
  }, []);

  return (
    <div className={styles.coachChat}>
      <div className={styles.coachChatChild} />
      <GroupA onHomeTextClick={onHomeTextClick} />
      <main className={styles.callNowButton}>
        <ChatNowButton />
        <section className={styles.yogaCoaches}>
          <div className={styles.boxingCoaches}>
            <div className={styles.skatingCoaches}>
              <div className={styles.callNow}>
                <DhruvTennisBoxing
                  maskGroup="/mask-group-12@2x.png"
                  maskGroup1="/mask-group-1@2x.png"
                  maskGroup2="/mask-group-2@2x.png"
                  propPadding="unset"
                />
                <FrameComponent6
                  maskGroup="/mask-group-4@2x.png"
                  maskGroup1="/mask-group-5@2x.png"
                  maskGroup2="/mask-group-61@2x.png"
                />
                <DhruvTennisBoxing
                  maskGroup="/mask-group-4@2x.png"
                  maskGroup1="/mask-group-5@2x.png"
                  maskGroup2="/mask-group-61@2x.png"
                  propPadding="unset"
                />
                <FrameComponent1
                  maskGroup="/mask-group-4@2x.png"
                  maskGroup1="/mask-group-5@2x.png"
                  maskGroup2="/mask-group-61@2x.png"
                  propPadding="0px 0px var(--padding-8xs)"
                />
                <DhruvTennisBoxing
                  maskGroup="/mask-group-4@2x.png"
                  maskGroup1="/mask-group-5@2x.png"
                  maskGroup2="/mask-group-61@2x.png"
                  propPadding="unset"
                />
              </div>
            </div>
            <FrameComponent7 maskGroup="/mask-group-161.svg" />
            <CricketIcon
              propAlignSelf="stretch"
              propWidth="unset"
              propPadding="unset"
              propMargin="0"
            />
          </div>
          <FrameSecureBox />
        </section>
      </main>
    </div>
  );
};

export default CoachChat;
