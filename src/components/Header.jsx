import React from 'react'
import styled from 'styled-components'

const TitileHeader = styled.h2`
    color: #224d4a;
    font-weight: bold;
`

const ItemNav = styled.li`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.3rem;
    color: #fff;
    font-weight: bold;
`

export default function Header() {
    return (
        <header className='p-5 d-flex justify-content-around'>
            <TitileHeader>LIBROS INCAF</TitileHeader>
            <nav>
                <ul>
                    <ItemNav>Home</ItemNav>
                    <ItemNav>Libreria</ItemNav>
                </ul>
            </nav>
        </header>
    )
}
