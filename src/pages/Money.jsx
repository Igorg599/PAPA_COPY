import React from 'react';
import Nal from '../assets/img/nilchkoj.png';
import Karta from '../assets/img/kartoj.png';

function Money() {
    React.useEffect(() => {
        document.body.style.overflow = 'auto';
    }, []);
    
    return (
        <div className="money">
            <div className="container">
                <h2 className="about__title">Способы оплаты:</h2>
                <div className="money__block">
                    <img src={Nal} alt="money"></img>
                    <div className="money__descr">
                        <div className="money__desc1">Наличный расчёт</div>
                        <div className="money__desc2">Если товар доставляется курьером, то оплата может осуществляться наличными курьеру в руки. Если необходимо подготовить для Вас сдачу, сообщите об этом оператору при оформлении заказа. При получении товара обязательно проверьте комплектацию товара и наличие чека.</div>
                    </div>
                </div>
                <div className="money__block">
                    <img src={Karta} alt="money"></img>
                    <div className="money__descr">
                        <div className="money__desc1">Банковской картой при получении заказа курьеру</div>
                        <div className="money__desc2">Если товар доставляется курьером, то оплата может осуществляться банковской картой курьеру при помощи мобильного терминала. Если Вы выбираете такой способ оплаты, то необходимо сообщить об этом оператору при оформлении заказа. При получении товара обязательно проверьте комплектацию товара и наличие чека.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Money;