import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth';

import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";
import { FiUpload } from "react-icons/fi";

import { Container, Content, Image } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { FoodItem } from "../../components/FoodItem";
import { Section } from "../../components/Section";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { Input } from '../../components/Input';

import { api } from "../../services/api";


export function Add () {
    const {food,  updateImage } = useAuth();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [ingredient, setIngredient] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    function handleImage(event) {
        const file = event.target.files[0];
        setImage(file);
    }

    function handleAddIngredient() {
        setIngredient(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredient(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleNewFood(){ 
            
        if (!title) {
            return alert("Digite o título do prato.")
        }
        
        if (newIngredient) {
            return alert("Clique em adicionar para adicionar o ingrediente.")
        }

        await api.post("/foods", {
            title,
            type,
            description,
            price,
            ingredient,
        });

        await updateImage({ food: image });

        alert("Prato criado com sucesso!");
        navigate("/");        
    }

    return (
        <Container>

            <Header/>   

            <Content>
                <div id="top">
                    <Link id="back" to="/">
                        <MdKeyboardArrowLeft id="arrow"/>
                        <ButtonText title="voltar"/>
                    </Link>

                    <h1>Novo Prato</h1>
                </div>
                
                
                <div id="image">

                    <div id="select">
                        <FiUpload />
                        <h2>Escolha a imagem</h2>
                    </div>

                    <Input 
                        id="image"
                        type='file'
                        onChange={handleImage}
                    />

                </div>

                <Input 
                    id="name"
                    title="Nome"
                    placeholder="Ex.: Salada Ceasar"
                    onChange={e => setTitle(e.target.value)}
                />
                
                <div id="type">
                    <h2>Categoria</h2>
                    <select>
                        <option value="none">Escolha a categoria</option>
                        <option value="food">Comida</option>
                        <option value="drink">Bebida</option>
                        <option value="dessert">Sobremesa</option>
                    </select>
                </div>
            
                <div className="tags" >
                    {
                        ingredient.map((ingredient, index) => (
                            <FoodItem 
                                className="item"
                                key={String(index)}
                                value={ingredient}
                                onClick={() => handleRemoveIngredient(ingredient)}
                            />
                        ))
                    }
                    <FoodItem 
                        className="new"
                        $isNew  
                        placeholder="Novo ingrediente" 
                        onChange={e => setNewIngredient(e.target.value)}
                        value={newIngredient}
                        onClick={handleAddIngredient}
                    />
                </div>                

                <Input 
                    id="price"
                    title="Preço"
                    placeholder="Adicione o valor"
                    onChange={e => setPrice(e.target.value)}
                />
            
                <Input
                    id="description"
                    title="Descrição"
                    placeholder="Descreva o prato"
                    onChange={e => setDescription(e.target.value)}
                />                
                  
                <Button  
                    id="save"
                    title="Salvar alterações"
                    onClick={handleNewFood}
                    className="custom-button" 
                />                
            </Content> 

            <Footer id="footer"/>

        </Container>
    )
}