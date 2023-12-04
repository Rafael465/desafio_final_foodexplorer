import { Container, Form, Content  } from "./styles";

import { api } from "../../services/api";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Header } from "../../components/Header";
import { Food } from "../../components/Food";
import { Footer } from "../../components/Footer";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {  
    
    const [search, setSearch] = useState("");

    const [ingredientSelected, setIngredientSelected] = useState([]);
    const [foods, setFoods] = useState([]);

    const itemsPerPage = 3;
    const totalItems = foods.length;

    const [currentDish, setCurrentDish] = useState(0);
    const [currentDessert, setCurrentDessert] = useState(0);
    const [currentDrink, setCurrentDrink] = useState(0);

    const desserts = foods.filter(food => food.type === 'dessert');
    const drinks = foods.filter(food => food.type === 'drink');
    const dishes = foods.filter(food => food.type === 'food');

    const details = useNavigate();

    function handleDetails(id) {
        details(`/edit/${id}`);
    }

    function handleNextDish() {
        setCurrentDish((prevDish) => (prevDish +1) % dishes.length );
    }

    function handlePrevDish() {
        setCurrentDish((prevDish) => (prevDish === 0 ? dishes.length -1 : prevDish -1));
    }

    function handleNextDessert() {
        setCurrentDessert((prevDessert) => (prevDessert +1) % desserts.length );
    }

    function handlePrevDessert() {
        setCurrentDessert((prevDessert) => (prevDessert === 0 ? desserts.length -1 : prevDessert -1));
    }

    function handleNextDrink() {
        setCurrentDrink((prevDrink) => (prevDrink +1) % drinks.length );
    }

    function handlePrevDrink() {
        setCurrentDrink((prevDrink) => (prevDrink === 0 ? drinks.length -1 : prevDrink -1));
    }

    const navigate = useNavigate();

    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchFoods() {
            const response = await api.get(`/foods?title=${search}&ingredient=${ingredientSelected}`, { withCredentials: true });
            setFoods(response.data)
        };
        
        fetchFoods();

    }, [ingredientSelected, search]);
    return (
        
        <Container>            

            <Header 
                id="header"
                setSearch={setSearch}
                search={search}    
            />
            
            <Form>
                <div id="top">
                    <img src="/src/assets/pngegg 1.png" alt="blue polygon" />
                    
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>
            </Form>

            <Content>

                <div className="app">

                    <h2>Refeições</h2>
                    {dishes.length > 0 && (
                        <>
                            <div className="test" >
                                {dishes.slice(currentDish, currentDish + itemsPerPage).map((dish) => (
                                    <Food key={String(dish.id)} data={dish} />
                                ))}  
                            </div>
                            <div id="arrows">
                                {totalItems > itemsPerPage && (
                                    <>
                                        <div className="left" onClick={handlePrevDish}>
                                            <IoIosArrowBack />
                                        </div>                    
                                        <div className="right" onClick={handleNextDish}>
                                            <IoIosArrowForward />
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    )}

                    <h2>Sobremesas</h2>
                    {dishes.length > 0 && (
                        <>
                            <div className="test" >
                                {desserts.slice( currentDessert, currentDessert + itemsPerPage).map((dessert) => (
                                    <Food key={String(dessert.id)} data={dessert} />
                                ))}
                            </div>
                            <div id="arrows">
                                {totalItems > itemsPerPage && (
                                    <>
                                        <div className="left" onClick={handlePrevDessert}>
                                            <IoIosArrowBack />
                                        </div>                    
                                        <div className="right" onClick={handleNextDessert}>
                                            <IoIosArrowForward />
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    )}


                    <h2>Bebidas</h2>

                    {dishes.length > 0 && (
                        <>
                           <div className="test" >
                                {drinks.slice( currentDrink, currentDrink + itemsPerPage).map((drink) => (
                                    <Food key={String(drink.id)} data={drink} />
                                ))}
                            </div>
                            <div id="arrows">
                                {totalItems > itemsPerPage && (
                                    <>
                                        <div className="left" onClick={handlePrevDrink}>
                                            <IoIosArrowBack />
                                        </div>                    
                                        <div className="right" onClick={handleNextDrink}>
                                            <IoIosArrowForward />
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </div>          
            </Content>

            <Footer id="footer"/>

        </Container>
    )
}