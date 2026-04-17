import { useContext, useState } from 'react';
import style from './checkout.module.css';
import CartContext from '../../context/CartContext';
import CheckoutItem from './CheckoutItem/CheckoutItem';

const Checkout = () => {
  const cartOperations = useContext(CartContext);
  const cart = cartOperations.cart;
  const totalCost = cartOperations.totalCost;

  const [currentFormPage, setCurrentFormPage] = useState(0);

  return (
    <div className={style.container}>
      <div className={style.main}>
        <h1 className={style.header}> Checkout</h1>
        <div className={style.main__content}>
          <div className={style.form__container}>
            <form className={style.formViewport}>
              <div
                className={style.formSlider}
                style={{
                  transform: `translateX(calc(${currentFormPage * -100}%/3))`,
                }}
              >
                <fieldset>
                  <legend>Contact</legend>
                  <div className={style.row}>
                    <input
                      type='email'
                      aria-label='Email'
                      placeholder='Email'
                    />
                  </div>
                  <div className={style.row}>
                    <input
                      type='phone'
                      aria-label='Phone Number'
                      placeholder='Phone Number'
                    />
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Delivery</legend>
                  <div className={style.row}>
                    <input
                      type='text'
                      aria-label='First Name'
                      placeholder='First Name'
                    />
                    <input
                      type='text'
                      aria-label='Last Name'
                      placeholder='Last Name'
                    />
                  </div>
                  <div className={style.row}>
                    <input
                      type='text'
                      aria-label='Address Line 1'
                      placeholder='Address Line 1'
                    />
                  </div>
                  <div className={style.row}>
                    <input
                      type='text'
                      aria-label='Address Line 2'
                      placeholder='Address Line 2'
                    />
                  </div>
                  <div className={style.row}>
                    <input type='text' aria-label='City' placeholder='City' />
                    <input type='text' aria-label='State' placeholder='State' />
                    <input
                      type='text'
                      aria-label='Zip Code'
                      placeholder='Zip Code'
                    />
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Payment</legend>
                  <div className={style.row}>
                    <input
                      type='text'
                      aria-label='Credit Card Number'
                      placeholder='Credit Card Number'
                    />
                  </div>
                  <div className={style.row}>
                    <input
                      type='text'
                      aria-label='Expiration Date'
                      placeholder='Expiration Date'
                    />
                    <input
                      type='text'
                      aria-label='Security Code'
                      placeholder='Security Code'
                    />
                  </div>
                  <div className={style.row}>
                    <input
                      type='text'
                      aria-label='Name on Card'
                      placeholder='Name on Card'
                    />
                  </div>
                </fieldset>
              </div>
            </form>
            <div className={style.indicator}>
              <button
                className={`${style.formCircle} ${currentFormPage === 0 ? style.formCircleActive : ''}`}
                onClick={() => setCurrentFormPage(0)}
              ></button>
              <button
                className={`${style.formCircle} ${currentFormPage === 1 ? style.formCircleActive : ''}`}
                onClick={() => setCurrentFormPage(1)}
              ></button>
              <button
                className={`${style.formCircle} ${currentFormPage === 2 ? style.formCircleActive : ''}`}
                onClick={() => setCurrentFormPage(2)}
              ></button>
            </div>
          </div>
          <div className={style.products}>
            <div>
              {Object.entries(cart).map(([, v]) => {
                return (
                  <CheckoutItem
                    key={v.title}
                    itemData={v}
                    addToCart={cartOperations.addToCart}
                    removeFromCart={cartOperations.removeFromCart}
                  />
                );
              })}
            </div>
            <span>Total ${totalCost}</span>
            <button className={style.pay}>Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
