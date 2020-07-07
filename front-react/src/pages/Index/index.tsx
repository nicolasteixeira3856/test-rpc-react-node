import React from 'react';
import './styles.css'

import logo from '../../assets/logo.svg';

const Index = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta"></img>
                </header>
                <main>
                    <p>Hello World!</p>
                </main>
            </div>
        </div>
    )
}

export default Index;