import React from 'react';
import DrinkBlock from '../components/Blocks/DrinkBlock';
import {useSelector, useDispatch} from 'react-redux';

import Pepsico from '../assets/img/drink/1025757071.jpg';
import Mors from '../assets/img/drink/mors-1000x1000.jpg';


const Drink = () => {
  React.useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);
  
    const dispatch = useDispatch();
    const cartItems = useSelector(({cart}) => cart.items);

    const handleAddDrinkToCart = (obj) => {
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
              <DrinkBlock 
              onClickAddDrink={handleAddDrinkToCart} 
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
              {...obj}/>)
              
            }
          </div>
      </div>
    )
  }
  
  export default Drink;

  const items = [
    {
      "id": 1234,
      "imageUrl": Mors,
      "name": "Морс 1л.",
      "descr": "Морс 1л. в ассортименте",
      "price": 150
    },
    {
      "id": 2345,
      "imageUrl": Pepsico,
      "name": "Pepsi 1л.",
      "descr": "Безалкогольный напиток Pepsi",
      "price": 120
    }
  ];