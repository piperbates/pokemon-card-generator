import Link from 'next/link';
import styles from '../../styles/PageLayout.module.css' 

type PageLayoutProps = {
    headerText: string,
    children: JSX.Element,
}

export default function PageLayout(props: PageLayoutProps) {
    const { headerText, children } = props;

    return (
        <>
    <div className={styles.pagelayout}>
        <h1>{headerText}</h1>
        {children}
    </div>
    <div className={styles.footer}>
        <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="https://github.com/piperbates/pokemon-card-generator">Github</Link></li>
        </ul>
    </div>
    </>
    )
}