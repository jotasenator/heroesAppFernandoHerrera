import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'



export default function PrivateRoute({
    isAuthenticated,
    component: Component,
    ...rest
}) {
    return (
        <div>

            <Route {...rest}
                component={(props) => (
                    (isAuthenticated) ?
                        (<Component {...props} />) :
                        (<Redirect to='/login' />)
                )



                }



            />

        </div>
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}