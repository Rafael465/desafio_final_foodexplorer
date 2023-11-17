import { Container, Content } from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";


import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details () {
    return (
        <Container>
            <Header/>


            <main>

                <Content>
                    <div id="back">
                        <MdKeyboardArrowLeft id="arrow"/>
                        <ButtonText title="voltar"/>
                    </div>
                    
                    <img src="/src/assets/Mask group.png" alt="salad" />

                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho 
                        agridoce salpicado com gergelim.</p>

                    <Section id="ingredients">
                        <div className="tags">
                            <Tag title="alface"/>
                            <Tag title="cebola"/>
                            <Tag title="pão naan"/>
                        </div>
                    </Section>
                    <Section id="ingredients">
                        <div className="tags">
                            <Tag title="pepino"/>
                            <Tag title="rabanete"/>
                            <Tag title="tomate"/>
                        </div>
                    </Section>
                    
                    <div id="buy">
                        <FiMinus />
                        <h1>01</h1>
                        <FiPlus />
                        <Button icon={<PiReceipt />}  title="pedir-R$ 25,00" className="custom-button" />
                    </div>
                    
                </Content>
            </main>
        </Container>
    )
}