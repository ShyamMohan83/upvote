import styles from './TertiaryHeading.module.css';
const TertiaryHeading = ({title}) => {
    return(
        <h3 className={styles.heading}>{title}</h3>
    )
}

export default TertiaryHeading;