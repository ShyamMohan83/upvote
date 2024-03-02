import propTypes from 'prop-types';
import styles from './PrimaryHeading.module.css';

const PrimaryHeading = ({title}) => {
    return(
        <h1 className={styles.primaryHeading}>{title}</h1>
    );
}
PrimaryHeading.propTypes = {
    title: propTypes.string
}

export default PrimaryHeading;