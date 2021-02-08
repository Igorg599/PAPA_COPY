import React from 'react';
import SnacksBlock from '../components/Blocks/SnacksBlock';
import {useSelector, useDispatch} from 'react-redux';

import Kar from '../assets/img/snacks/kartofelnyedolki-1000x1000.jpg';
import Nag from '../assets/img/snacks/naggetsy-1000x1000.jpg';

const Snacks = () => {
  React.useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector(({cart}) => cart.items);

  const handleAddSnacksToCart = (obj) => {
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
            <SnacksBlock 
            onClickAddSnacks={handleAddSnacksToCart}
            key={obj.id}
            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
            {...obj}/>)
          }
        </div>
    </div>
  )
  }
  
  export default Snacks;

const items = [
  {
    "id": 1546,
    "imageUrl": "https://kfccpn.ru/wp-content/uploads/2019/07/stripsy.png",
    "name": "Сырные стрипсы и 1 соус",
    "descr": "Состав: пшеничная лепёшка, соус 'Сырный', сыр 'Моцарелла'.  Вес: 250.00 г",
    "price": 150
  },
  {
    "id": 238,
    "imageUrl": Nag,
    "name": "Наггетсы куриные",
    "descr": "Запеченое куриное филе в панировке. Вес: 150.00 г",
    "price": 150
  },
  {
    "id": 376,
    "imageUrl": Kar,
    "name": "Картофельные дольки",
    "descr": "Запеченое куриное филе в панировке. Вес: 150.00 г",
    "price": 150
  }
];