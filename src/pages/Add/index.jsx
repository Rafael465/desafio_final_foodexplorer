import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth';

import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiUpload } from "react-icons/fi";

import { Container, Content } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { FoodItem } from "../../components/FoodItem";
import { Section } from "../../components/Section";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { Input } from '../../components/Input';

import { api } from "../../services/api";


export function Add () {
    const { updateImage } = useAuth();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [ingredient, setIngredient] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    
    const [imageFile, setImageFile] = useState(null);

    const navigate = useNavigate();

    function handleImage(event) {
        const file = event.target.files[0];
        setImageFile(file);
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

        const response = await api.post("/foods", {
            title,
            type,
            description,
            price,
            ingredient,
        });

        //console.log(food)
        await updateImage({ imageFile : imageFile, id : response.data.id });

        alert("Prato criado com sucesso!");
        //navigate("/");        
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
                
                <div id="divOne">

                    <div id="image">

                        <h2>Imagem do prato</h2>                        

                        <label htmlFor="file" id="select">
                            <FiUpload />
                            <h2>Escolha a imagem</h2>
                        </label>

                        <Input 
                            id="file"
                            type='file'
                            onChange={handleImage}
                        />
                    </div>                      

                    <div id="name">
                        <Input 
                            id="inputName"
                            title="Nome"
                            placeholder="Ex.: Salada Ceasar"
                            onChange={e => setTitle(e.target.value)}                            
                        />
                    </div>

                    <div id="typeInput">
                        <h2>Categoria</h2>
                        <select onChange={e => setType(e.target.value)}>
                            <option value="none">Escolha a categoria</option>
                            <option value="food">Comida</option>
                            <option value="drink">Bebida</option>
                            <option value="dessert">Sobremesa</option>
                        </select>
                    </div>
                </div>

                <div id="divTwo">
                    <div id="flexTags" >

                        <h2>Ingredientes</h2>
                    
                        <div id="tags" >
                            {ingredient.map((ingredient, index) => (
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
                    </div>

                    <div id="price">
                        <Input 
                            id="priceInput"
                            title="Preço"
                            placeholder="Adicione o valor"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                </div>

                <div id="description">
                    <textarea
                        id="descriptionInput"
                        title="Descrição"
                        placeholder="Descreva o prato"
                        onChange={e => setDescription(e.target.value)}
                    /> 
                </div>            
                  
                <div id="save">
                    <Button  
                        id="saveButton"
                        title="Salvar alterações"
                        onClick={handleNewFood}
                        className="custom-button" 
                    />
                </div>

            </Content> 

            <Footer id="footer"/>

        </Container>
    )
}