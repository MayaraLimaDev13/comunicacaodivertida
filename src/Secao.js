import React, { useRef, useState, useEffect } from 'react';
import Pictograma from './Pictograma';
import './App.css';

const Secao = ({ titulo, pictogramas, onVoltar, showVoltar }) => {
    const audioRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

     // Efeito para limpar o áudio quando o componente desmontar
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    const handleSelection = (pictograma, index) => {
        // Se houver link, abre em nova aba
        if (pictograma.link) {
            window.open(pictograma.link, '_blank');
            return;
        }

        // Se houver áudio, executa normalmente
        if (pictograma.audio) {
            if (audioRef.current) {
                audioRef.current.pause();
            }
            
            const audioElement = new Audio(pictograma.audio);
            audioRef.current = audioElement;
            audioElement.play();
            setSelectedIndex(index);
        }
    };

    return (
        <section aria-labelledby={titulo}>
            <h2>{titulo}</h2>
            <div className="pictograma-container" role='group'>
                {pictogramas.map((pictograma, index) => (
                    <Pictograma 
                        key={index} 
                        {...pictograma} 
                        onSelect={() => handleSelection(pictograma, index)} 
                        isSelected={index === selectedIndex}
                    />
                ))}
            </div>
            {showVoltar && (
                <button onClick={onVoltar} aria-label="Voltar para a navegação inicial">
                    Voltar
                </button>
            )}
        </section>
    );
};
export default Secao;