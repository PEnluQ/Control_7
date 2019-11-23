import React, { Component } from 'react';
import Menu from "./Components/Menu/Menu";
import './App.css';
import lavash from './img/lavash.jpg';
import burger from './img/burger.jpg';
import pita from './img/pita.jpg';
import pizza from './img/pizza.jpg';
import cake from './img/cake.jpg';
import orange from './img/orange.jpg';
import List from "./Components/List/List";

export const Food = [
  {title: 'Shaurma-Falafel', price: 155, recipe:'chickpeas, salad, tofu sauce, lavash', img:lavash},
  {title: 'Burger-Falafel', price: 110, recipe:'chickpeas, cabbage leaves, bread', img:burger},
  {title: 'Pita-Falafel', price: 120, recipe:'chickpeas, flapjack, tomato paste', img:pita},
  {title: 'Pizza-Vegetables', price: 550, recipe:'dough, mushrooms, tofu, tomatoes, bell pepper', img:pizza},
  {title: 'Cake-Coconut', price: 1500, recipe:'dough, coconut milk, syrup, fruits', img:cake},
  {title: 'Juice-Orange', price: 210, recipe:'freshly squeezed orange juice', img:orange}
];

class App extends Component {
  state = {
    list: [

    ]
  };

  render() {
    return(
        <div className='App'>
          <List
              order='Order Details:'
          />
          <Menu/>
        </div>
    )
  }
}

export default App;