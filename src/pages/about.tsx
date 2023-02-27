import Card from '@/components/Card/Card';
import PageLayout from '@/components/Layout/PageLayout';
import styles from '@/styles/About.module.css' 
import { PokemonType } from "@/types/allPokemonTypes";
import Link from 'next/link';
import mugshot from '../images/mugshot.jpeg'

export default function AboutPage() {

    const myData: PokemonType = {
        name: 'Piper',
        id: 36,
        sprite: mugshot.src,
        moves: [
            'Splash',
            'Rest'
        ],
        height: 16,
        weight: 1143,
        hp: 95,
        ability: 'Sketch',
        types: [
           'Bug',
        ],
        mainType: 'bug'
        }

    return (
        <PageLayout headerText="About">
            <div className={styles.aboutBox}>
                <div className={styles.aboutContent}>
                    <p>Thanks so much for checking out my little project! This project is pretty simple but it has a lot of sentimental value as it's a remake of the very first app I ever built using an API.</p>
                    
                    <p>I decided to rebuild this as part of a project to remake all my older beginner projects to see how far I've come as a developer. The first iteration of this app was vanilla JavaScript and was pretty janky code. I can't claim this version is perfect but it's better than it was before!</p>
                
                    <p>If you have any feedback or want to learn more about me, I'd love to hear your comments!</p>
                
                    <Link href="https://github.com/piperbates/">My Github</Link>
                    <br/>
                    <Link href="/">Back to the app</Link>

                </div>

                <div>
                <Card
                    name={myData.name}
                    sprite={myData.sprite} 
                    id={myData.id}
                    moves={myData.moves}
                    height={myData.height}
                    weight={myData.weight}
                    hp={myData.hp}
                    ability={myData.ability}
                    types={myData.types}
                    mainType={myData.mainType}
                />
                </div>
            </div>
        </PageLayout>
    )
}