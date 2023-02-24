import Card from '@/components/Card/Card';
import PageLayout from '@/components/Layout/PageLayout';
import styles from '@/styles/About.module.css' 
import { PokemonType } from "@/types/allPokemonTypes";
import Link from 'next/link';
import mugshot from '../images/mugshot.jpeg'

export default function AboutPage() {

    console.log(mugshot)

    const myData: PokemonType = {
        name: 'Piper',
        id: 36,
        sprites: {
            other: {
                'official-artwork': {'front_default': mugshot.src}
            },
        },
        moves: [
            {move: {name: 'Splash'}},
            {move: {name: 'Rest'}}
        ],
        height: 16,
        weight: 1143,
        stats: [
            {stat: {name: 'HP'},
            base_stat: 95,}
        ],
        abilities: [
            {ability: {name: 'Sketch'}},
        ],
        types: [
            {type: {
                name: 'bug',
                url: ''
            }}
        ]
        }

    return (
        <PageLayout headerText="About">
            <div className={styles.aboutBox}>
                <div className={styles.aboutContent}>
                    <p>Thanks so much for checking out my little project! This project is pretty simple but it has a lot of sentimental value as it's a remake of the very first app I ever built using an API.</p>
                    
                    <p>I decided to rebuild this as part of a project to remake all my older beginner projects to see how far I've come as a developer. The first iteration of this app was vanilla JavaScript and was pretty janky code. I can't claim this version is perfect but it's better than it was before!</p>
                
                    <p>If you have any feedback or want to learn more about me, I'd love to hear your comments!</p>
                
                    <Link href="https://github.com/piperbates/">My Github</Link>
                </div>

                <Card
                    name={myData.name}
                    sprites={myData.sprites} 
                    id={myData.id}
                    moves={myData.moves}
                    height={myData.height}
                    weight={myData.weight}
                    stats={myData.stats}
                    abilities={myData.abilities}
                    types={myData.types}
                />
                <Link href="/generator">Back to the app</Link>
            </div>
        </PageLayout>
    )
}