import { useNavigate, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Container, Content } from "./styles";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Ingredient } from "../../components/Ingredient";
import { ButtonText } from "../../components/ButtonText";
import { PiReceipt } from "react-icons/pi";
import { USER_ROLE } from '../../utils/roles';
import { FoodItem } from "../../components/FoodItem";
import { useAuth } from '../../hooks/auth';
import { Section } from "../../components/Section";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";

export function Details ({ data, ...rest }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();


    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [ingredient, setIngredient] = useState([]);
    const [description, setDescription] = useState("");
    const [image, setImage]= useState("");

    const [amount, setAmount] = useState(0);
    
    const handleIncrement = () => {
        setAmount(prevAmount => prevAmount +1);
    };

    const handleDecrement = () => {
        setAmount(prevAmount => prevAmount -1);
    };

    const handleEdit = () => {
        navigate(`/edit/${id}`);
    }

    useEffect(() => {
        async function fetchFoodDetails() {
            try {
                const response = await api.get(`/foods/${id}`);
                const food = response.data;

                setTitle(food.title);
                setPrice(food.price);
                setDescription(food.description);
                setImage(food.image);
                setIngredient(food.ingredient);
            } catch (error) {
                console.error("Error fetching food details:", error);
            }
        }

        fetchFoodDetails();
    }, [id]);

    return (
        <Container {...rest}>
            <Header/>

            <main>
                <Content {...rest}>
                    <div className="desktop">
                        <Link id="back" to="/">
                            <MdKeyboardArrowLeft id="arrow"/>
                            <ButtonText title="voltar"/>
                        </Link>

                        <img src={`http://localhost:3333/files/${image}`} alt="prato de salada" />                        
                    
                    </div>

                    <div id="description">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        
                        <div id="tags">
                            {ingredient.map((ingredient, index) => (
                                    <FoodItem 
                                        className="item"
                                        key={String(index)}
                                        value={ ingredient.name }
                                        onClick={() => handleRemoveIngredient(ingredient)}
                                    />
                                ))                          
                            }
                        </div>
                        
                        {user.role === USER_ROLE.CUSTOMER && 
                            <div id="buy">
                                <FiMinus onClick={handleDecrement}/>
                                <h1>{amount}</h1>
                                <FiPlus onClick={handleIncrement}/>

                                <Button icon={<PiReceipt />}  title={`pedir-R$ ${price}`} className="custom-button" />
                            </div>
                        }

                        {user.role === USER_ROLE.ADMIN && 
                            <div id="buy">
                                <Button title="Editar Prato" onClick={handleEdit}/>
                            </div>
                        }

                    </div>                    
                </Content>
            </main>
            <Footer id="footer"/>
        </Container>

        
    )
}