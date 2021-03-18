import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import MarvelScreen from '../components/marvel/MarvelScreen'

import DcScreen from '../components/dc/DcScreen'
import HeroeScreen from '../components/heroes/HeroeScreen'
import { Navbar } from '../components/ui/Navbar'
import SearchScreen from '../components/search/SearchScreen'

export default function DashboardRoutes() {
    return (
        <>

            <Navbar />


            <Switch>
                <Route exact path='/marvel' component={MarvelScreen} />
                <Route exact path='/dc' component={DcScreen} />
                <Route exact path='/hero/:heroeId' component={HeroeScreen} />
                <Route exact path='/search' component={SearchScreen} />

                <Redirect to='/marvel' />


            </Switch>

        </>
    )
}
