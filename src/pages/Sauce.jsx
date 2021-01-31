import React from 'react';
import SauceBlock from '../components/Blocks/SauceBlock';
import {useSelector, useDispatch} from 'react-redux';

import One from '../assets/img/sauce/cezar-1000x1000.jpg';
import Two from '../assets/img/sauce/tomatnyj-1000x1000.jpg';
import Three from '../assets/img/sauce/syrnyj-1000x1000.jpg';
import Sal from '../assets/img/sauce/syrnyj-1000x1000.jpg';
import Bar from '../assets/img/sauce/bbq-1000x1000.jpg';

const Sauce = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(({cart}) => cart.items);

    const handleAddSauceToCart = (obj) => {
      dispatch({
        type: 'ADD_PIZZA_CART',
        payload: obj
      });
    }

  
    return (
      <div className="container">
          <div className="content__items">
            { 
              items.map(obj => 
              <SauceBlock 
              onClickAddSauce={handleAddSauceToCart} 
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}/>)
              
            }
          </div>
      </div>
    )
  }
  
  export default Sauce;

const items = [
  {
    "id": 178,
    "imageUrl": One,
    "name": "Соус 'Чесночный'",
    "descr": "Соус 'Чесночный' собственного приготовления.  Вес: 40.00 г",
    "price": 35
  },
  {
    "id": 2978,
    "imageUrl": One,
    "name": "Соус 'Цезарь' (Heinz)",
    "descr": "Соус 'Цезарь' (Heinz).   Вес: 40.00 г",
    "price": 35
  },
  {
    "id": 5653,
    "imageUrl": Two,
    "name": "Соус 'Томатный'",
    "descr": "Соус 'Томатный' собственного приготовления.    Вес: 40.00 г",
    "price": 35
  },
  {
    "id": 4857,
    "imageUrl": Three,
    "name": "Соус 'Сырный' (Heinz)",
    "descr": "Соус 'Сырный' (Heinz).   Вес: 40.00 г",
    "price": 35
  },
  {
    "id": 5789,
    "imageUrl": Sal,
    "name": "Соус 'Спайси'",
    "descr": "Соус 'Спайси' собственного приготовления.    Вес: 40.00 г",
    "price": 35
  },
  {
    "id": 76896,
    "imageUrl": One,
    "name": "Соус 'Горчичный'",
    "descr": "Соус 'Горчичный' собственного приготовления.  Вес: 40.00 г",
    "price": 35
  },
  {
    "id": 778998,
    "imageUrl": Bar,
    "name": "Соус 'Барбекью' (Heinz)",
    "descr": "Соус 'Барбекью' (Heinz).   Вес: 40.00 г",
    "price": 35
  }
];