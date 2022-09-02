import styles from "./Window.module.css";


export function Window() {
    return (
        <div className={styles.display}>
            <div className={styles.top}>
                <div className={styles.buttons}>
                    <button>-</button>
                    <button>^</button>
                    <button>x</button>
                </div>
            </div>

            <div className={styles.content}>
                <h2>
                    Hello World!
                </h2>

                <p>
                    The first challenge!
                </p>
            </div>
        </div>
    );
}