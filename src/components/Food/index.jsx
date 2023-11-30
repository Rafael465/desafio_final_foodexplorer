import { Container } from './styles';
import { Ingredient } from '../Ingredient';

import { MdKeyboardArrowRight } from "react-icons/md";
import { FiPlus, FiMinus, FiHeart } from "react-icons/fi";
import { useState } from 'react';

export function Food({ data, ...rest }) {
    const [amount, setAmount] = useState(0);

    const handleIncrement = () => {
        setAmount(prevAmount => prevAmount +1);
    };

    const handleDecrement = () => {
        setAmount(prevAmount => prevAmount -1);
    };

    const handleButton = (e) => {
        e.preventDefault();
        alert(`Adicionado ${amount} unidades de ${data.title}`)
    }

    return (
        <Container {...rest}>
            <div id='heart'>
                <FiHeart />
            </div>

            <div id='content'>
                <img src="/src/assets/Mask group-3.png" alt="prato de salada" />
                <div id='foodName'>
                    <h1>{data.title}</h1>
                    <MdKeyboardArrowRight id="arrow"/>
                </div>

                <h2>R$ {data.price}</h2>

                <div id="amount">
                    <FiMinus onClick={handleDecrement}/>
                    <h1>{amount}</h1>
                    <FiPlus onClick={handleIncrement}/>
                </div>

                <button id='include' title="include" onClick={handleButton}>Include</button>

                {/* 
                
                {
                    data.ingredient &&
                    <footer>
                        {
                            data.ingredient.map( ingredient => <Ingredient key={ingredient.name} title={ingredient.name} />)
                        }
                    </footer>
                }
                */}
            </div>

        </Container>
    )
}