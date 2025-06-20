import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: #224d4a;
    font-size: 2rem;
    font-weight: bold;
`

export default function RegisterBook() {
    return (
        <section className='container w-50 bg-white py-3 mb-3'>
            <Title className="my-3">Registro de Libros</Title>
            <form>
                <div className="mb-3">
                    <label className="form-label fw-bold">Titulo</label>
                    <input type="text" className='form-control' placeholder='Ingresa el titulo del libro' />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Autor</label>
                    <input type="text" className='form-control' placeholder='Ingresa el autor del libro' />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Genero</label>
                    <select className='form-control'>
                        <option value="">Seleccionar un genero...</option>
                        <option value="Romance">Romance</option>
                        <option value="Terror">Terror</option>
                        <option value="Accion">Accion</option>
                    </select>
                </div>

                <div className="mb-3">
                    <input type="submit" className='btn btn-primary' value='Guardar Libro' />
                </div>
            </form>
        </section>
    )
}
