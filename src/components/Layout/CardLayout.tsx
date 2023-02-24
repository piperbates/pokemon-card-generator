import Arrow from "../Arrow/Arrow";
import Card from "../Card/Card";
import styles from '../../styles/CardLayout.module.css' 

export default function CardLayout() {
    return (
        <div className={styles.cardLayout}>
            <Arrow direction={-1} label="<" />
            <Card />
            <Arrow direction={+1} label=">" />
        </div>
    )
}