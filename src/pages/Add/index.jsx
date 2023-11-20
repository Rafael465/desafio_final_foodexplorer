import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';

import { ButtonText } from "../../components/ButtonText";
import { FoodItem } from "../../components/FoodItem";
import { Section } from "../../components/Section";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { Input } from '../../components/Input';

import { api } from "../../services/api";

import { Container, Content } from "./styles";

export function Add () {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [ingredient, setIngredient] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const navigate = useNavigate();

    function handleAddIngredient() {
        setIngredient(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredient(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleNewDish(){
        await api.post("/foods", {
            title,
            description,
            ingredient,
        });

        alert("Nota criada com sucesso!");
        navigate("/");

        
    }

    return (
        <Container>
            <Header/>

            <main>
                <Content>
                    <div className="desktop">
                        <Link id="back" to="/">
                            <MdKeyboardArrowLeft id="arrow"/>
                            <ButtonText title="voltar"/>
                        </Link>
                    </div>
                    
                    <h1>Adicionar Prato</h1>
                    
                    <h2>Imagem do prato</h2>

                    <button id="image">Selecione a imagem</button>

                    <h2>Nome</h2>

                    <div id="name">
                        <Input 
                            placeholder="Ex.: Salada Ceasar"
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>

                    <h2>Categoria</h2>

                    <button id="image">Selecione a imagem</button>

                    <Section title="Ingredientes">
                        <div className="tags">
                            {
                                ingredient.map((ingredient, index) => (
                                    <FoodItem 
                                        key={String(index)}
                                        value={ingredient}
                                        onClick={() => handleRemoveIngredient(ingredient)}
                                    />
                                ))
                            }

                            <FoodItem 
                                $isNew  
                                placeholder="Novo ingrediente" 
                                onChange={e => setNewIngredient(e.target.value)}
                                value={newIngredient}
                                onClick={handleAddIngredient}
                            />
                        </div>
                    </Section>


                    <h2>Preço</h2>

                    <div id="name">
                        <Input />
                    </div>

                    <h2>Descrição</h2>

                    <div id="description">
                        <Input 
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                      
                    <Button  
                        title="Salvar alterações"
                        onClick={handleNewDish}
                        className="custom-button" 
                    />
                
                </Content>
            </main>
            <Footer id="footer"/>
        </Container>
    )
}