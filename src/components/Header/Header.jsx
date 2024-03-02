import PrimaryHeading from '../PrimaryHeading/PrimaryHeading';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <PrimaryHeading title="Vote for me"/> 
    </header>
  );
};

export default Header;