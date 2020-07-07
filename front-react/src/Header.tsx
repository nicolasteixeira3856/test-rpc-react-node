import React from 'react';

interface HeaderProps {
    title: string;
}

/* Nome da função sempre em letra maiuscula para não confundir com elementos HTML */

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;