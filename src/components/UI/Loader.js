import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
export default Loader