import React from 'react'
import { useLocation } from 'react-router-dom'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/UseForm'

import HeroCard from '../heroes/HeroCard'
import { getHeroeByName } from '../selectors/getHeroeByName'


export default function SearchScreen() {

    const location = useLocation()

    console.log(location.search.slice(3))

    const [{ searchText }, handleInputChange] = useForm({ searchText: location.search.slice(3) })

    const heroesFiltered = getHeroeByName(searchText)

    const validacion = () => {

        const nombres_heroes = heroes.map(x => x.superhero.toLocaleLowerCase())


        if (nombres_heroes.includes(searchText.toLocaleLowerCase())) {
            return true
        }
    }



    // if (heroesFiltered.length === 1 && searchText === heroes.superhero) {

    // }




    // const { searchText } = formValues

    // const handleSearch = (e) => {
    //     e.preventDefault()

    //     console.log(searchText)
    //     history.push(`?q=${searchText}`)
    // }



    return (
        <div className='container mt-3 animate__animated animate__fadeIn'>
            <h1>Search Screen</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Quick way to find your hero</h4>
                    <hr />
                    {/* <form onSubmit={handleSearch}> */}
                    <input className='form-control p-4'
                        type='text'
                        placeholder='Enter the name'
                        name='searchText'
                        value={searchText}
                        onChange={handleInputChange}
                        autoComplete='off'
                        autoFocus />
                    {/* <button className='btn mt-1 btn-block btn-outline-primary'
                            type='submit'
                        >Search...</button> */}
                    {/* </form> */}

                </div>
                <div className=' col-7'>
                    <h4>Results</h4>
                    <hr />

                    {searchText === '' &&

                        <div className='alert alert-info'>
                            Search a hero
                        </div>
                    }




                    {
                        validacion() ?
                            (<div className='alert alert-success'>

                                <strong>Heroe found</strong>

                            </div>)
                            :
                            ((searchText !== '') &&

                                <div className='alert alert-danger'>
                                    you are looking for: <strong>{searchText}</strong>
                                </div>
                            )

                    }

                    {
                        heroesFiltered.map(x => <HeroCard
                            key={x.id}
                            {...x}
                        />)

                    }

                </div>
            </div>
        </div >
    )
}
