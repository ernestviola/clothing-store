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
                      tabIndex={currentFormPage === 0 ? 0 : -1}
                    />
                  </div>
                  <div className={style.row}>
                    <input
                      type='phone'
                      aria-label='Phone Number'
                      placeholder='Phone Number'
                      tabIndex={currentFormPage === 0 ? 0 : -1}
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
                      tabIndex={currentFormPage === 1 ? 0 : -1}
                    />
                    <input
                      type='text'
                      aria-label='Last Name'
                      placeholder='Last Name'
                      tabIndex={currentFormPage === 1 ? 0 : -1}
                    />
                  </div>
                  <div className={style.row}>
                    <input
                      type='text'
                      aria-label='Address Line 1'
                      placeholder='Address Line 1'
                      tabIndex={currentFormPage === 1 ? 0 : -1}
                    />
                  </div>
                  <div className={style.row}>
                    <input
                      type='text'
                      aria-label='Address Line 2'
                      placeholder='Address Line 2'
                      tabIndex={currentFormPage === 1 ? 0 : -1}
                    />
                  </div>
                  <div className={style.row}>
                    <input
                      type='text'
                      aria-label='City'
                      placeholder='City'
                      tabIndex={currentFormPage === 1 ? 0 : -1}
                    />
                    <input
                      type='text'
                      aria-label='State'
                      placeholder='State'
                      tabIndex={currentFormPage === 1 ? 0 : -1}
                    />
                    <input
                      type='text'
                      aria-label='Zip Code'
                      placeholder='Zip Code'
                      tabIndex={currentFormPage === 1 ? 0 : -1}
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
                      tabIndex={currentFormPage === 2 ? 0 : -1}
                    />
                  </div>
                  <div className={style.row}>
                    <input
                      type='text'
                      aria-label='Expiration Date'
                      placeholder='Expiration Date'
                      tabIndex={currentFormPage === 2 ? 0 : -1}
                    />
                    <input
                      type='text'
                      aria-label='Security Code'
                      placeholder='Security Code'
                      tabIndex={currentFormPage === 2 ? 0 : -1}
                    />
                  </div>
                  <div className={style.row}>
                    <input
                      type='text'
                      aria-label='Name on Card'
                      placeholder='Name on Card'
                      tabIndex={currentFormPage === 2 ? 0 : -1}
                    />
                  </div>
                </fieldset>
              </div>
            </form>
            <div className={style.indicator}>
              <button
                className={style.indicator__button}
                onClick={() =>
                  setCurrentFormPage((prev) =>
                    currentFormPage > 0 ? prev - 1 : 0,
                  )
                }
              >
                Previous
              </button>
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
              <button
                className={style.indicator__button}
                onClick={() =>
                  setCurrentFormPage((prev) =>
                    currentFormPage < 2 ? prev + 1 : 2,
                  )
                }
              >
                Next
              </button>
            </div>
          </div>
          <div className={style.products__container}>
            <h2 className={style.products__header}>Bag</h2>
            <div className={style.products}>
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
            <div className={style.pay__container}>
              <span className={style.totalCost}>Total ${totalCost}</span>
              <button className={style.pay}>Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
