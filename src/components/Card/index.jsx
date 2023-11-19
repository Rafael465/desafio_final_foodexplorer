import { Container } from './styles';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";


import { Button } from '../../components/Button';

export function Card ({ data, ...rest}) {
    return (
        <Container {...rest}>
            <img src="/src/assets/Mask group.png" alt="" />
            <div id='title'>
                <h2>Salada Ravanello</h2>
                <MdKeyboardArrowRight id="arrow"/>
            </div>
            <p>R$ 25,00</p>
            <div id="buy">
                <FiMinus />
                <h1>01</h1>
                <FiPlus />
            </div> 
                <Button  title="incluir" className="custom-button" />
        </Container>
    )

}