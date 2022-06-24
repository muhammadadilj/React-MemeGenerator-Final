import React from 'react';
import trollface from '../images/trollface.png';

export default function Header() {
    return (
        <header className='header'>
            <img className="trollface" src={require('../images/trollface.png')} alt="trollface"/>
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project Final</h4>
        </header>
    );
}