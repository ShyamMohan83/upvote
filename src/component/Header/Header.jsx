import styles from './Header.module.css';
import PrimaryHeading from '../PrimaryHeading/PrimaryHeading';
const Header = () => {
  return (
    <header className={styles.header}>
      <PrimaryHeading title="Vote for me"/> 
    </header>
  );
};

export default Header;