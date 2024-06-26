import React from 'react';

function Testimonio(props){
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio'
                 src={require(`../imagenes/${props.imagen}.jpg`)}
                 alt='imagen 1'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testigo'>{props.cargo} La run es imposible <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio'>idk"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Testimonio;