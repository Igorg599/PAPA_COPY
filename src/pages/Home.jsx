import React from 'react';
import PizzaBlock from '../components/Blocks/PizzaBlock';
import {useSelector, useDispatch} from 'react-redux';
import PopularBlock from '../components/Blocks/PopularBlock';

import Chicken from '../assets/img/pizza/chikenrench.jpg';
import Chicago from '../assets/img/pizza/chikago.jpg';
import Superm from '../assets/img/pizza/supermjasnaja.jpg';
import Pepperoni from '../assets/img/pizza/pepperoni.jpg';
import Papapizza from '../assets/img/pizza/papapicca.jpg';
import Ohota from '../assets/img/pizza/ohotnichja.jpg';
import Ogaio from '../assets/img/pizza/ogajo.jpg';
import Newmexico from '../assets/img/pizza/nju-meksiko.jpg';
import Newyork from '../assets/img/pizza/nju-jork.jpg';
import Myaso from '../assets/img/pizza/mjasnaja.jpg';
import More from '../assets/img/pizza/morskaja.jpg';
import Mari from '../assets/img/pizza/miriel.jpg';
import Mehico from '../assets/img/pizza/mehiko.jpg';
import Margaritaluxe from '../assets/img/pizza/magodeljuks.jpg';
import Margarita from '../assets/img/pizza/margo.jpg';
import Mayami from '../assets/img/pizza/majmi.jpg';
import Classica from '../assets/img/pizza/klassicheskaja.jpg';
import Carolina from '../assets/img/pizza/karolina.jpg';
import Caperolla from '../assets/img/pizza/kaperolla.jpg';
import Zao from '../assets/img/pizza/zao.jpg';
import Zhulien from '../assets/img/pizza/zhjulen.jpg';
import Dizhon from '../assets/img/pizza/dizhon.jpg';
import Dakota from '../assets/img/pizza/dakota.jpg';
import Grek from '../assets/img/pizza/grecheskaja.jpg';
import Gavaikur from '../assets/img/pizza/gavajskajaskuricej.jpg';
import Gavaivet from '../assets/img/pizza/gavajskajasvetchinoj.jpg';
import Vega from '../assets/img/pizza/vegetarianskaja.jpg';
import Barbeku from '../assets/img/pizza/barbekju.jpg';
import Bavar from '../assets/img/pizza/bavarskaja.jpg';
import Aloxa from '../assets/img/pizza/aloha.jpg';
import Sir from '../assets/img/pizza/4syra.jpg';
import Sezon from '../assets/img/pizza/4sezona.jpg';
import Sto from '../assets/img/pizza/108.jpg';

const Home = () => {
  React.useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);
  
  const dispatch = useDispatch();
  const cartItems = useSelector(({cart}) => cart.items);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    });
  };

  React.useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <>
      <div className="container">
        <h3 className="popular__title_pop">Популярное</h3>
      </div>
      <div className="popular">
        <ul>
          {
            items.filter(obj => obj.rating === 1).map(obj => 
            <PopularBlock 
            onClickAddPizza={handleAddPizzaToCart} 
            key={obj.id}
            {...obj}/>)
          }
        </ul>
      </div>
        <div className="container">
          <h3 className="popular__title_all">Все пиццы</h3>
          <div className="content__items">
            { items.map(obj => 
              <PizzaBlock 
              onClickAddPizza={handleAddPizzaToCart} 
              key={obj.id}
              addedCount={cartItems[obj.id] && 
              cartItems[obj.id].items.length}
              {...obj}/>)
            }
          </div>
      </div>
    </>
  )
}

export default Home;


const items = [
  {
    "id": 1,
    "imageUrl": Chicken,
    "name": "Чикен Рэнч",
    "descr": "Состав: соус 'Чесночный' сыр 'Моцарелла', бекон, запечёная куриная грудка, огурцы маринованные, томаты.",
    "price": [390, 615, 775, 1290],
    "rating": 0
  },
  {
    "id": 2,
    "imageUrl": Chicago,
    "name": "Чикаго",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', бекон, лук красный, копченая куриная грудка, томаты, перец сладкий, шампиньоны, колбаски 'Пепперони'.",
    "price": [410, 625, 790, 1340],
    "rating": 0
  },
  {
    "id": 3,
    "imageUrl": Superm,
    "name": "Супермясная",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', колбаски 'Пепперони', бекон, свинина запечёная, запечёная куриная грудка, свежая телятина, ветчина, баварские колбаски.",
    "price": [490, 730, 960, 1600],
    "rating": 1
  },
  {
    "id": 4,
    "imageUrl": Pepperoni,
    "name": "Пепперони",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', колбаски 'Пепперони', шампиньоны.",
    "price": [425, 660, 850, 1460],
    "rating": 0
  },
  {
    "id": 5,
    "imageUrl": Papapizza,
    "name": "Папа Пицца",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', перец сладкий, говядина запечёная, свинина запечёная, куриная грудка, лук красный, сыр 'Фета', огурцы маринованные, маслины.",
    "price": [400, 615, 770, 1280],
    "rating": 0
  },
  {
    "id": 6,
    "imageUrl": Ohota,
    "name": "Охотничья",
    "descr": "Состав: соус 'Чесночный', сыр 'Моцарелла', огурцы маринованные, лук красный, курица копченая, баварские колбаски, бекон",
    "price": [390, 615, 775, 1290],
    "rating": 0
  },
  {
    "id": 7,
    "imageUrl": Ogaio,
    "name": "Огайо",
    "descr": "Состав: соус горчичный, сыр 'Моцарелла', томаты, говядина, бекон, лук красный, чеснок.",
    "price": [400, 590, 790, 1250],
    "rating": 0
  },
  {
    "id": 8,
    "imageUrl": Newmexico,
    "name": "Нью-Мексико",
    "descr": "Состав: соус «Мутти», сыр 'Моцарелла', колбаски 'Пепперони', ветчина, томаты, огурцы маринованные, острый перчик халапенью.",
    "price": [440, 640, 885, 1460],
    "rating": 0
  },
  {
    "id": 9,
    "imageUrl": Newyork,
    "name": "Нью-Йорк",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', перец сладкий, маслины, лук красный, колбаски 'Пепперони', бекон",
    "price": [450, 670, 900, 1480],
    "rating": 0
  },
  {
    "id": 10,
    "imageUrl": Myaso,
    "name": "Мясная",
    "descr": "Состав: соус горчичный, сыр 'Моцарелла', копчёная куриная грудка, ветчина, бекон, колбаски 'Пепперони'.",
    "price": [420, 600, 800, 1330],
    "rating": 0
  },
  {
    "id": 11,
    "imageUrl": More,
    "name": "Морская",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', снежный краб, креветки, лосось",
    "price": [535, 850, 1110, 1970],
    "rating": 0
  },
  {
    "id": 12,
    "imageUrl": Mari,
    "name": "Мириэль",
    "descr": "Состав: соус 'Чесночный', сыр 'Моцарелла', томаты, сыр 'Фета', чеснок, укроп.",
    "price": [389, 589, 799, 1330],
    "rating": 0
  },
  {
    "id": 13,
    "imageUrl": Mehico,
    "name": "Мехико",
    "descr": "Состав: соус «Мутти», сыр 'Моцарелла', маслины, свинина запечёная, томаты, свежая телятина, перец сладкий, лук красный, острый перчик халапенью.",
    "price": [435, 690, 865, 1490],
    "rating": 0
  },
  {
    "id": 14,
    "imageUrl": Margaritaluxe,
    "name": "Маргарита De Luxe",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', томаты черри.",
    "price": [600, 730, 810, 1300],
    "rating": 0
  },
  {
    "id": 15,
    "imageUrl": Margarita,
    "name": "Маргарита",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', томаты.",
    "price": [355, 540, 660, 1240],
    "rating": 0
  },
  {
    "id": 16,
    "imageUrl": Mayami,
    "name": "Майами",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', креветки тигровые, лосось копчёный, лимон, базилик.",
    "price": [565, 865, 1110, 1960],
    "rating": 0
  },
  {
    "id": 17,
    "imageUrl": Classica,
    "name": "Классическая",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', шампиньоны, ветчина.",
    "price": [395, 615, 775, 1300],
    "rating": 0
  },
  {
    "id": 18,
    "imageUrl": Carolina,
    "name": "Каролина",
    "descr": "Состав: соус 'Горчичный', сыр 'Моцарелла', бекон, куриная грудка, лук красный, соус 'Барбекью'.",
    "price": [420, 640, 800, 1340],
    "rating": 0
  },
  {
    "id": 19,
    "imageUrl": Caperolla,
    "name": "Каперолла",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', колбаски 'Пепперони', копчёная грудка, шампиньоны, томаты 'Черри', сыр 'Чеддер', лук порей, чеснок, укроп.",
    "price": [430, 670, 860, 1485],
    "rating": 0
  },
  {
    "id": 20,
    "imageUrl": Zao,
    "name": "ЗАО",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', запечёная куриная грудка, чеснок, лук красный, морковь по-корейски, свежий огурец.",
    "price": [420, 640, 800, 1340],
    "rating": 0
  },
  {
    "id": 21,
    "imageUrl": Zhulien,
    "name": "Жюльен",
    "descr": "Состав: соус 'Чесночный', сыр 'Моцарелла', куриная грудка, шампиньоны, лук красный.",
    "price": [385, 605, 760, 1260],
    "rating": 0
  },
  {
    "id": 22,
    "imageUrl": Dizhon,
    "name": "Дижон",
    "descr": "Состав: соус горчичный, сыр 'Моцарелла', баварские колбаски, шампиньоны, бекон, лук красный, огурцы маринованные.",
    "price": [440, 600, 810, 1260],
    "rating": 0
  },
  {
    "id": 23,
    "imageUrl": Dakota,
    "name": "Дакота",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', колбаски 'Пепперони', шампиньоны, куриная грудка, маслины.",
    "price": [415, 630, 795, 1320],
    "rating": 0
  },
  {
    "id": 24,
    "imageUrl": Grek,
    "name": "Греческая",
    "descr": "Состав: Соус 'Цезарь', сыр 'Моцарелла', огурцы маринованные, лук красный, сыр 'Фета', томаты, перец сладкий, маслины.",
    "price": [600, 730, 810, 1300],
    "rating": 0
  },
  {
    "id": 25,
    "imageUrl": Gavaikur,
    "name": "Гавайская с курицей",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', курица копчёная, куриная грудка, ананас.",
    "price": [405, 630, 800, 1350],
    "rating": 1
  },
  {
    "id": 26,
    "imageUrl": Gavaivet,
    "name": "Гавайская с ветчиной",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', ветчина, ананас.",
    "price": [400, 620, 785, 1320],
    "rating": 0
  },
  {
    "id": 27,
    "imageUrl": Vega,
    "name": "Вегетарианская",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', томаты, лук красный, перец сладкий, шампиньоны, маслины.",
    "price": [390, 610, 765, 1280],
    "rating": 0
  },
  {
    "id": 28,
    "imageUrl": Barbeku,
    "name": "Барбекью",
    "descr": "Состав: соус 'Барбекью', сыр 'Моцарелла', огурцы маринованные, лук красный, курица копченая, томаты, говядина запечёная, колбаски 'Пепперони'.",
    "price": [395, 615, 780, 1350],
    "rating": 0
  },
  {
    "id": 29,
    "imageUrl": Bavar,
    "name": "Баварская",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', колбаски 'Пепперони', баварские колбаски, шампиньоны, бекон, лук красный.",
    "price": [395, 620, 785, 1320],
    "rating": 0
  },
  {
    "id": 30,
    "imageUrl": Aloxa,
    "name": "Алоха",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', курица копчёная, куриная грудка, ананас, халапенью.",
    "price": [410, 640, 810, 1390],
    "rating": 0
  },
  {
    "id": 31,
    "imageUrl": Sir,
    "name": "4 сыра",
    "descr": "Состав: соус 'Мутти', сыры 'Фетта', 'Моцарелла', 'Гауда', 'Чеддер'.",
    "price": [425, 670, 850, 1470],
    "rating": 1
  },
  {
    "id": 32,
    "imageUrl": Sezon,
    "name": "4 сезона",
    "descr": "Состав: соус 'Мутти', сыры: 'Моцарелла', 'Чеддер', 'Гауда', 'Фета', шампиньоны, ветчина, томаты, колбаски 'Пепперони'.",
    "price": [425, 670, 850, 1440],
    "rating": 1
  },
  {
    "id": 33,
    "imageUrl": Sto,
    "name": "108-й",
    "descr": "Состав: соус 'Барбекью', сыр 'Моцарелла', бекон, баварские колбаски, курица копчёная, томаты, колбаски 'Пепперони', огурцы маринованные, лук красный.",
    "price": [405, 645, 805, 1400],
    "rating": 1
  }
]
