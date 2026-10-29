import styles from '@/styles/app/obras/loading.module.scss'

const SKELETON_COUNT = 6

const Loading = () => {
    return (
        <div className={styles.wrap}>
            {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <div key={i} className={styles.card}>
                    <div className={styles.cover} />
                    <div className={styles.title} />
                    <div className={styles.lines}>
                        <div className={styles.line} />
                        <div className={styles.line} />
                        <div className={styles.line} />
                    </div>
                    <div className={styles.button} />
                </div>
            ))}
        </div>
    )
}

export default Loading
