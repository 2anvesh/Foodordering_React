import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quality</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
              <div key={item._id} className='cart-items-title cart-items-item'>
                <img src={item.image} alt=""/>
                <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>₹{item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)}className='cross'>x</p>
              </div>
              <hr/>
              </div>
              
              
            );
          } else {
            return null; // You can also return null if you don't want to render anything
          }
        })}
      </div>
      <div className='cart-bottom'>
         <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Total</p>
              <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        
         </div>
         <div className='class-promocode'>
            <div>
              <p>If you have a promocode,Etner it here</p>
              <div className='class-promocode-input'>
                  <input type='text' placeholder='promo code'></input>
                  <button>Submit</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Cart;

