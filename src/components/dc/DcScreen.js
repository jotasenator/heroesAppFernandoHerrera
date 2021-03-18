import React from 'react'
import HeroList from '../heroes/HeroList'

export default function DcScreen() {
    return (
        <div className='container mt-3'>

            <h1>DC Screen</h1>
            <hr />

            <HeroList publisher='DC Comics' />

        </div>
    )
}
