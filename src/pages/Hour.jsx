import React from 'react';


import freePizza from '../assets/img/pizza-free.jpg';

function Hour() {
    React.useEffect(() => {
        document.body.style.overflow = 'auto';
    }, []);
    
    return (
        <div className="hour">
            <div className="container">
                <h2 className="hour__title">Пицца за опоздание</h2>
                <img className="hour__img" src={freePizza} alt="pizza"></img>
                <div className="hour__des1">Дарим за опоздание любую пиццу из меню размером S при следующем заказе (в акции не участвуют пиццы с морепродуктами).</div>
                <div className="hour__des2">Условия получения бесплатной пиццы:</div>
                <div className="hour__des-bottom">1) Заказ должен быть оформлен через наш сайт, приложение, по телефону или в офисе компании и его стоимость не превышает 2000 рублей;</div>
                <div className="hour__des-bottom">2) Максимальное время доставки зависит от вашего адреса. Уточнить его можно у оператора или в Яндекс. Картах <a href="https://vk.cc/ahSmgx">https://vk.cc/ahSmgx;</a></div>
                <div className="hour__des-bottom">3) Отсчёт времени начинается с момента печати чека и указывается на нём;</div>
                <div className="hour__des-bottom">4) Воспользоваться правом получения бесплатной пиццы можно только в течение 14 дней с момента опоздания, оформив заказ на доставку;</div>
                <div className="hour__des-bottom">5) В случае опоздания курьер выдаёт срочный купон, который в последствии Вы обмениваете на бесплатную пиццу размером S;</div>
                <div className="hour__des-bottom">6) Данная акция не распространяется на опоздания при оформлении предзаказа.</div>
            </div>
        </div>
    )
}

export default Hour;