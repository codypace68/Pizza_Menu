import React from 'react';
import ReactDOM from 'react-dom';
import { pizzaData } from './data';
import './index.css';

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <div className='header'>
            <h1>Cody Pizzeria</h1>
        </div>
    );
}

function Menu() {
    return (
        <div className='menu'>
            <h2>Pizza Menu</h2>
            <ul className="pizza-list pizzas">
                {pizzaData.map((pizza,i) => <Pizza key={i} {...pizza} />)}
            </ul>
        </div>
    )        
}

function Footer() {
    const curHour = new Date().getHours();
    const openHour = 10;
    const closeHour = 21;
    const isOpen = curHour >= openHour && curHour <= closeHour;

    // if (curHour < openHour || curHour > closeHour) {
    //     return <h1>Sorry, we're closed :/</h1>
    // }

    return (
        <h1 className='footer'>
            {isOpen ? "We're open until " + closeHour + ":00 come get it while it's hot!" : 'Sorry, we are closed'}
        </h1>
    )
    }

function Pizza(pizza) {
    const { name, photoName, ingredients, price, soldOut } = pizza;

    return (
        <li className="pizza">
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{price}</span>
            </div>
        </li>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode><App /></React.StrictMode>)