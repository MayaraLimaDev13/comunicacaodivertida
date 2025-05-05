import React from 'react';
const Pictograma = ({ imagem, texto, onSelect, isSelected }) => {
    const handleClick = () => {
        onSelect(); // notifica o componente pai que o pictograma foi selecionado
    };
    return (
        <div 
            className={`pictograma ${isSelected ? 'selected' : ''}`} 
            onClick={handleClick} 
            role='button' 
            tabIndex='0' 
            aria-label={texto}
        >
            <img src={imagem} alt={texto} />
            <p>{texto}</p>
        </div>
    );
};

export default Pictograma;