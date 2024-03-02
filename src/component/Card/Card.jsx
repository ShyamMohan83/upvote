import { TertiaryHeading } from "../TertiaryHeading";
import styles from "./Card.module.css";

const Card = ({ vote }) => {
  return (
    <div className={styles.card}>
      <TertiaryHeading title="Vote Heading" />
      <p>Reason to Vote Form</p>
      <div>
        <label> number of up Vote(10)</label>
        <label> number of down Vote(10)</label>
      </div>
    </div>
  );
};

export default Card;
