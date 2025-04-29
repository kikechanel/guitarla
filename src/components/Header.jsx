import { Fragment } from 'react'

export default function Header(){
    
    const total = 100

    return (
        <Fragment>
            <p>total a pagar: {total}</p>
            <p>Después</p>
        </Fragment>
    )
}