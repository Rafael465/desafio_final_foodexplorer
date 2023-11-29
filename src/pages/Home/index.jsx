import { Container, Form, Content  } from "./styles";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Food } from "../../components/Food";
import { Footer } from "../../components/Footer";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {

    const carouselDishes = useRef();
    const carouselDesserts = useRef();
    const carouselDrinks = useRef();
    
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

    function handleNextDish() {
        setCurrentDish((prevDish) => (prevDish +1) % totalItems );
    }

    function handlePrevDish() {
        setCurrentDish((prevDish) => (prevDish === 0 ? totalItems -1 : prevDish -1));
    }

    function handleNextDessert() {
        setCurrentDessert((prevDessert) => (prevDessert +1) % totalItems );
    }

    function handlePrevDessert() {
        setCurrentDessert((prevDessert) => (prevDessert === 0 ? totalItems -1 : prevDessert -1));
    }

    function handleNextDrink() {
        setCurrentDrink((prevDrink) => (prevDrink +1) % totalItems );
    }

    function handlePrevDrink() {
        setCurrentDrink((prevDrink) => (prevDrink === 0 ? totalItems -1 : prevDrink -1));
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

            <Header/>
            
            <Form>
                <div id="top">
                    <img src="/src/assets/pngegg2.png" alt="blue polygon" />
                    
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>
            </Form>

            <Content>

                <div className="app">
                    <h2>Refeições</h2>
                                                            
                    <div className="test" ref={carouselDishes}>
                        {[0, 1, 2].map((offset) => {
                            const index = (currentDish + offset) % totalItems;
                            const dish = dishes[index];
                            if (dish) {
                                return <Food key={String(dish.id)} data={dish} />;
                              }
                
                              return null; // or a placeholder element if needed
                        })}
                    </div>
                    <div id="arrows">
                        {totalItems > itemsPerPage && (
                            <>
                                <div className="left" onClick={handlePrevDish}>
                                    &#9665;
                                </div>                    
                                <div className="right" onClick={handleNextDish}>
                                    &#9655;
                                </div>
                            </>
                        )}
                    </div>

                    <h2>Sobremesas</h2>
                                                            
                    <div className="test" ref={carouselDesserts}>
                        {[0, 1, 2].map((offset) => {
                            const index = (currentDessert + offset) % totalItems;
                            const dessert = desserts[index];
                            if (dessert) {
                                return <Food key={String(dessert.id)} data={dessert} />;
                              }
                
                              return null; // or a placeholder element if needed
                        })}
                    </div>
                    <div id="arrows">
                        {totalItems > itemsPerPage && (
                            <>
                                <div className="left" onClick={handlePrevDessert}>
                                    &#9665;
                                </div>                    
                                <div className="right" onClick={handleNextDessert}>
                                    &#9655;
                                </div>
                            </>
                        )}
                    </div>

                    <h2>Bebidas</h2>
                                                            
                    <div className="test" ref={carouselDrinks}>
                        {[0, 1, 2].map((offset) => {
                            const index = (currentDrink + offset) % totalItems;
                            const drink = drinks[index];
                            if (drink) {
                                return <Food key={String(drink.id)} data={drink} />;
                              }
                
                              return null; // or a placeholder element if needed
                        })}
                    </div>
                    <div id="arrows">
                        {totalItems > itemsPerPage && (
                            <>
                                <div className="left" onClick={handlePrevDrink}>
                                    &#9665;
                                </div>                    
                                <div className="right" onClick={handleNextDrink}>
                                    &#9655;
                                </div>
                            </>
                        )}
                    </div>
                </div>          
            </Content>

            <Footer id="footer"/>

        </Container>
    )
}