import styles from '../../styles/Card.module.css' 

type CardBoxProps = {
    header: string,
    children: JSX.Element,
}

export default function CardBox(props: CardBoxProps) {
    const { children, header } = props;

    return (<div className={styles.cardBox}>
        <h1>{header}</h1>
        {children}
    </div>)
}