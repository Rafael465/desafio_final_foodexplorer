import { Container, Form, Content  } from "./styles";

import { motion } from "framer-motion";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Food } from "../../components/Food";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const carouselDesserts = useRef();
    const carouselDrinks = useRef();
    const carouselDishes = useRef();
    const [widthDesserts, setWidthDesserts] = useState(0);
    const [widthDrinks, setWidthDrinks] = useState(0);
    const [widthDishes, setWidthDishes] = useState(0);

    const [search, setSearch] = useState("");
    const [ingredientSelected, setIngredientSelected] = useState([]);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        setWidthDesserts(carouselDesserts.current?.scrollWidth - carouselDesserts.current?.offsetWidth);
        setWidthDrinks(carouselDrinks.current?.scrollWidth - carouselDrinks.current?.offsetWidth);
        setWidthDishes(carouselDishes.current?.scrollWidth - carouselDishes.current?.offsetWidth);
    }, []); 
    
    
    const desserts = foods.filter(food => food.type === 'dessert');
    const drinks = foods.filter(food => food.type === 'drink');
    const dishes = foods.filter(food => food.type === 'food');

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

                <h2>Refeições</h2>

                <motion.div ref={carouselDishes} className="carousel" whileTap={{ cursor: "grabbing"}}>
                    <motion.div
                        className="inner"
                        drag="x"
                        dragConstraints={{ left: -widthDishes, right: 0}}
                    >

                        {
                            dishes.map(dishes => (
                                <Food className="item"
                                    key={String(dishes.id)}
                                    data={dishes}
                                    onClick={() => handleDetails(dishes.id)}                                
                                />                       
                            ))
                        }

                    </motion.div>                    
                </motion.div>

                <h2>Sobremesas</h2>

                <motion.div ref={carouselDesserts} className="carousel" whileTap={{ cursor: "grabbing"}}>
                    <motion.div 
                        className="inner"
                        drag="x"
                        dragConstraints={{ left: -widthDesserts, right: 0}}
                    >

                        {
                            desserts.map(desserts => (
                                <Food className="item"
                                    key={String(desserts.id)}
                                    data={desserts}
                                    onClick={() => handleDetails(desserts.id)}                                
                                />                       
                            ))
                        }
                    </motion.div>                    
                </motion.div>

                <h2>Bebidas</h2>

                <motion.div ref={carouselDrinks} className="carousel" whileTap={{ cursor: "grabbing"}}>
                    <motion.div 
                        className="inner"
                        drag="x"
                        dragConstraints={{ left: -widthDrinks, right: 0}}
                    >

                        {
                            drinks.map(drinks => (
                                <Food className="item"
                                    key={String(drinks.id)}
                                    data={drinks}
                                    onClick={() => handleDetails(drinks.id)}                                
                                />                       
                            ))
                        }

                    </motion.div>                    
                </motion.div>
                                    
            </Content>

            <Footer id="footer"/>

        </Container>
    )
}