import styles from './styles.module.css'
const ErrorPage = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <h1>404</h1>
                <p>Oops! Something went wrong, please try again</p>
            </div>
        </div>
    )
}
export default ErrorPage;