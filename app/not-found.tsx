import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <del>
                <dt className={styles.title}>ページが見つかりませんでした</dt>
                <dd className={styles.container}>
                    あなたがアクセスしようとしたページは存在しません。
                    <br />
                    URLを再度ご確認ください
                </dd>
            </del>
        </div>
    );
}