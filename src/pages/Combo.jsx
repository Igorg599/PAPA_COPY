import React from 'react';
import ComboFriends from '../components/Blocks/ComboBlock/ComboFriends';
import {useDispatch} from 'react-redux';
import Button from '../components/Button';
import ComboModalTrio from '../components/Modals/ComboModalTrio';

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

import One from '../assets/img/sauce/cezar-1000x1000.jpg';
import Two from '../assets/img/sauce/tomatnyj-1000x1000.jpg';
import Three from '../assets/img/sauce/syrnyj-1000x1000.jpg';
import Sal from '../assets/img/sauce/syrnyj-1000x1000.jpg';
import Bar from '../assets/img/sauce/bbq-1000x1000.jpg';

import Pepsico from '../assets/img/drink/1025757071.jpg';
import Mors from '../assets/img/drink/mors-1000x1000.jpg';

import Trio from '../assets/img/trio.jpg';
import Friends from '../assets/img/combo/dljadruzej.jpg';
import Duo from '../assets/img/combo/dljadvoih.jpg';
import Hard from '../assets/img/combo/vecherinka.jpg';
import Lanch from '../assets/img/combo/lanch.jpg';


function Combo() {
  const ComboItems = [{name: "Комбо 'Ланч'", imageUrl: Lanch, price: 600, descr: "В состав комбо входят 1 пицца размером S на выбор, 2 салата 'Греческий', 2 морса 0,3л на выбор (860 гр.). Доступен для заказа с 11:00 до 16:00."}, {name: "Комбо 'Для друзей'", imageUrl: Friends, price: 2700, descr: "В состав входят 5 пицц размером M (4,000.00 гр.), 2 л. напитка на выбор и 5 соусов."}, {name: "Комбо 'Для двоих'", imageUrl: Duo, price: 950, descr: "В состав входят 2 пиццы размером S (1,200.00 гр.), 1 л. напитка на выбор и 2 соуса."}, {name: "Комбо 'Вечеринка'", imageUrl: Hard, price: 5000, descr: "В состав входят 10 пицц размером M (4,000.00 гр.), 3 л. напитка на выбор и 10 соусов."}];

  const ComboTrio = {name: "Горячее трио", imageUrl: Trio, price: [1250, 1750, 2100], descr: "Выбери 3 пиццы одного размера на пышном тесте, 3 соуса и 1 напиток по специальной цене."};

  const [modalActive, setmodalActive] = React.useState(false);
  const dispatch = useDispatch();

  const handleAddComboToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    });
  }

  return (
    <div className="container">
        <div className="content__items"> 
          <>
            <div className="items-block">
              <img
              className="items-block__image"
              src={ComboTrio.imageUrl}
              alt="Combo"
              onClick={() => {setmodalActive(true); document.body.style.overflow = 'hidden'}}
              />
              <h4 className="items-block__title">{ComboTrio.name}</h4>
              <div className="items-block__descr">{ComboTrio.descr}</div>
              <div className="items-block__bottom">
                <div className="items-block__price">от {ComboTrio.price[0]} ₽</div>
                <Button onClick={() => {setmodalActive(true); document.body.style.overflow = 'hidden'}} className="button--add" outline>
                  <span>Выбрать</span>
                </Button>
              </div>
            </div> 
            <ComboModalTrio active={modalActive} item={ComboTrio} onClickAddCombo={handleAddComboToCart} setActive={setmodalActive} itemsPizza={itemsPizza} itemsDrink={itemsDrink} itemsSauce={itemsSauce}/>
          </>
          {ComboItems.map((item, index) => (
            <ComboFriends item={item} key={index} onClickAddCombo={handleAddComboToCart} itemsPizza={itemsPizza} itemsDrink={itemsDrink} itemsSauce={itemsSauce}/>
          ))}
        </div>
    </div>
  )
}
  
export default Combo;

const itemsPizza = [
  {
    "id": 1,
    "imageUrl": Chicken,
    "name": "Чикен Рэнч",
    "descr": "Состав: соус 'Чесночный' сыр 'Моцарелла', бекон, запечёная куриная грудка, огурцы маринованные, томаты.",
    "price": [390, 615, 775],
    "rating": 0
  },
  {
    "id": 2,
    "imageUrl": Chicago,
    "name": "Чикаго",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', бекон, лук красный, копченая куриная грудка, томаты, перец сладкий, шампиньоны, колбаски 'Пепперони'.",
    "price": [410, 625, 790],
    "rating": 0
  },
  {
    "id": 3,
    "imageUrl": Superm,
    "name": "Супермясная",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', колбаски 'Пепперони', бекон, свинина запечёная, запечёная куриная грудка, свежая телятина, ветчина, баварские колбаски.",
    "price": [450, 670, 860],
    "rating": 1
  },
  {
    "id": 4,
    "imageUrl": Pepperoni,
    "name": "Пепперони",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', колбаски 'Пепперони', шампиньоны.",
    "price": [425, 660, 850],
    "rating": 0
  },
  {
    "id": 5,
    "imageUrl": Papapizza,
    "name": "Папа Пицца",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', перец сладкий, говядина запечёная, свинина запечёная, куриная грудка, лук красный, сыр 'Фета', огурцы маринованные, маслины.",
    "price": [400, 615, 770],
    "rating": 0
  },
  {
    "id": 6,
    "imageUrl": Ohota,
    "name": "Охотничья",
    "descr": "Состав: соус 'Чесночный', сыр 'Моцарелла', огурцы маринованные, лук красный, курица копченая, баварские колбаски, бекон",
    "price": [390, 615, 775],
    "rating": 0
  },
  {
    "id": 7,
    "imageUrl": Ogaio,
    "name": "Огайо",
    "descr": "Состав: соус горчичный, сыр 'Моцарелла', томаты, говядина, бекон, лук красный, чеснок.",
    "price": [415, 610, 785],
    "rating": 0
  },
  {
    "id": 8,
    "imageUrl": Newmexico,
    "name": "Нью-Мексико",
    "descr": "Состав: соус «Мутти», сыр 'Моцарелла', колбаски 'Пепперони', ветчина, томаты, огурцы маринованные, острый перчик халапенью.",
    "price": [440, 640, 885],
    "rating": 0
  },
  {
    "id": 9,
    "imageUrl": Newyork,
    "name": "Нью-Йорк",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', перец сладкий, маслины, лук красный, колбаски 'Пепперони', бекон",
    "price": [420, 670, 860],
    "rating": 0
  },
  {
    "id": 10,
    "imageUrl": Myaso,
    "name": "Мясная",
    "descr": "Состав: соус горчичный, сыр 'Моцарелла', копчёная куриная грудка, ветчина, бекон, колбаски 'Пепперони'.",
    "price": [420, 600, 800],
    "rating": 0
  },
  {
    "id": 11,
    "imageUrl": More,
    "name": "Морская",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', снежный краб, креветки, лосось",
    "price": [535, 850, 1110],
    "rating": 0
  },
  {
    "id": 12,
    "imageUrl": Mari,
    "name": "Мириэль",
    "descr": "Состав: соус 'Чесночный', сыр 'Моцарелла', томаты, сыр 'Фета', чеснок, укроп.",
    "price": [389, 589, 799],
    "rating": 0
  },
  {
    "id": 13,
    "imageUrl": Mehico,
    "name": "Мехико",
    "descr": "Состав: соус «Мутти», сыр 'Моцарелла', маслины, свинина запечёная, томаты, свежая телятина, перец сладкий, лук красный, острый перчик халапенью.",
    "price": [435, 690, 865],
    "rating": 0
  },
  {
    "id": 14,
    "imageUrl": Margaritaluxe,
    "name": "Маргарита De Luxe",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', томаты черри.",
    "price": [420, 655, 830],
    "rating": 0
  },
  {
    "id": 15,
    "imageUrl": Margarita,
    "name": "Маргарита",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', томаты.",
    "price": [355, 540, 660],
    "rating": 0
  },
  {
    "id": 16,
    "imageUrl": Mayami,
    "name": "Майами",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', креветки тигровые, лосось копчёный, лимон, базилик.",
    "price": [565, 865, 1110],
    "rating": 0
  },
  {
    "id": 17,
    "imageUrl": Classica,
    "name": "Классическая",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', шампиньоны, ветчина.",
    "price": [395, 615, 775],
    "rating": 0
  },
  {
    "id": 18,
    "imageUrl": Carolina,
    "name": "Каролина",
    "descr": "Состав: соус 'Горчичный', сыр 'Моцарелла', бекон, куриная грудка, лук красный, соус 'Барбекью'.",
    "price": [420, 640, 800],
    "rating": 0
  },
  {
    "id": 19,
    "imageUrl": Caperolla,
    "name": "Каперолла",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', колбаски 'Пепперони', копчёная грудка, шампиньоны, томаты 'Черри', сыр 'Чеддер', лук порей, чеснок, укроп.",
    "price": [430, 670, 860],
    "rating": 0
  },
  {
    "id": 20,
    "imageUrl": Zao,
    "name": "ЗАО",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', запечёная куриная грудка, чеснок, лук красный, морковь по-корейски, свежий огурец.",
    "price": [420, 640, 800],
    "rating": 0
  },
  {
    "id": 21,
    "imageUrl": Zhulien,
    "name": "Жюльен",
    "descr": "Состав: соус 'Чесночный', сыр 'Моцарелла', куриная грудка, шампиньоны, лук красный.",
    "price": [385, 605, 760],
    "rating": 0
  },
  {
    "id": 22,
    "imageUrl": Dizhon,
    "name": "Дижон",
    "descr": "Состав: соус горчичный, сыр 'Моцарелла', баварские колбаски, шампиньоны, бекон, лук красный, огурцы маринованные.",
    "price": [440, 600, 810],
    "rating": 0
  },
  {
    "id": 23,
    "imageUrl": Dakota,
    "name": "Дакота",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', колбаски 'Пепперони', шампиньоны, куриная грудка, маслины.",
    "price": [415, 630, 795],
    "rating": 0
  },
  {
    "id": 24,
    "imageUrl": Grek,
    "name": "Греческая",
    "descr": "Состав: Соус 'Цезарь', сыр 'Моцарелла', огурцы маринованные, лук красный, сыр 'Фета', томаты, перец сладкий, маслины.",
    "price": [405, 625, 790],
    "rating": 0
  },
  {
    "id": 25,
    "imageUrl": Gavaikur,
    "name": "Гавайская с курицей",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', курица копчёная, куриная грудка, ананас.",
    "price": [405, 630, 800],
    "rating": 1
  },
  {
    "id": 26,
    "imageUrl": Gavaivet,
    "name": "Гавайская с ветчиной",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', ветчина, ананас.",
    "price": [400, 620, 785],
    "rating": 0
  },
  {
    "id": 27,
    "imageUrl": Vega,
    "name": "Вегетарианская",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', томаты, лук красный, перец сладкий, шампиньоны, маслины.",
    "price": [390, 610, 765],
    "rating": 0
  },
  {
    "id": 28,
    "imageUrl": Barbeku,
    "name": "Барбекью",
    "descr": "Состав: соус 'Барбекью', сыр 'Моцарелла', огурцы маринованные, лук красный, курица копченая, томаты, говядина запечёная, колбаски 'Пепперони'.",
    "price": [395, 615, 780],
    "rating": 0
  },
  {
    "id": 29,
    "imageUrl": Bavar,
    "name": "Баварская",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', колбаски 'Пепперони', баварские колбаски, шампиньоны, бекон, лук красный.",
    "price": [395, 620, 785],
    "rating": 0
  },
  {
    "id": 30,
    "imageUrl": Aloxa,
    "name": "Алоха",
    "descr": "Состав: соус 'Мутти', сыр 'Моцарелла', курица копчёная, куриная грудка, ананас, халапенью.",
    "price": [410, 640, 810],
    "rating": 0
  },
  {
    "id": 31,
    "imageUrl": Sir,
    "name": "4 сыра",
    "descr": "Состав: соус 'Мутти', сыры 'Фетта', 'Моцарелла', 'Гауда', 'Чеддер'.",
    "price": [425, 670, 850],
    "rating": 1
  },
  {
    "id": 32,
    "imageUrl": Sezon,
    "name": "4 сезона",
    "descr": "Состав: соус 'Мутти', сыры: 'Моцарелла', 'Чеддер', 'Гауда', 'Фета', шампиньоны, ветчина, томаты, колбаски 'Пепперони'.",
    "price": [425, 670, 850],
    "rating": 1
  },
  {
    "id": 33,
    "imageUrl": Sto,
    "name": "108-й",
    "descr": "Состав: соус 'Барбекью', сыр 'Моцарелла', бекон, баварские колбаски, курица копчёная, томаты, колбаски 'Пепперони', огурцы маринованные, лук красный.",
    "price": [405, 645, 805],
    "rating": 1
  }
];

const itemsDrink = [
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

const itemsSauce = [
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