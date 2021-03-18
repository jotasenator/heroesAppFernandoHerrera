import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export default function LoginScreen({ history }) {//props por default

    const { dispatch } = useContext(AuthContext)

    const handleClick = () => {
        // history.push('/')
        // history.replace('/')
        dispatch({
            type: types.login,
            payload: {
                name: 'Maykel'
            }
        })
        history.replace('/')

    }



    return (
        <div className='container mt-5'>
            <h1>Login </h1>
            <hr />

            <button className='btn btn-primary'
                onClick={handleClick}>
                Login

            </button>
        </div>
    )
}
