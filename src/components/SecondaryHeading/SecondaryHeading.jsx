import propTypes from 'prop-types';
import styles from './SecondaryHeading.module.css';

const SecondaryHeading = ({title}) => {
    return(
        <h2 className={styles.heading}>{title}</h2>
    );
}

SecondaryHeading.propTypes = {
    title: propTypes.string
};
export default SecondaryHeading;