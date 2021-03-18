import React from 'react'
import { getHeroeByPublisher } from '../selectors/getHeroeByPublisher'
import HeroCard from './HeroCard'

export default function HeroList({ publisher }) {

    const heroes = getHeroeByPublisher(publisher)

    return (
        <>

            <div className='card-columns animate__animated animate__fadeIn'>
                {heroes.map(x =>
                (<HeroCard key={x.id}
                    {...x} />
                ))}
            </div>


        </>
    )
}
