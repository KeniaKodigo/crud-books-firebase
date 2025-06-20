import React from 'react'
import libros from '../assets/libros.jpg'
import styled from 'styled-components'

const Title = styled.h1`
    color: #fff;
    font-size: 2.3rem;
    font-weight: bold;
`

export default function Welcome() {
    return (
        <section className='container my-5'>
            <section className='d-flex justify-content-around align-items-center'>
                <div>
                    <Title>CRUD DE LIBROS INCAF</Title>
                    <button className='btn btn-dark'>Ver Libros</button>
                </div>
                <img src={libros} alt="logo libros" className='w-25 rounded' />
            </section>
        </section>
    )
}
