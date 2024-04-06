import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Component
import Cart from './shared/Cart'
//Context
import { CartContext } from '../context/CartContextProvider';
// Styles
import styles from './ShopCart.module.css';

const ShopCart = () => {
    const {state , dispatch} = useContext(CartContext);
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>

            {
                state.itemCounter > 0 && <div className={styles.payments}>
                    <p><span>total Items:</span> {state.itemCounter}</p>
                    <p><span>total Payment:</span> {state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button onClick={() => dispatch({type:"CHECKOUT"})} className={styles.checkout}>CheckOut</button>
                        <button onClick={() => dispatch({type:"CLEAR"})} className={styles.clear}>clear</button>
                    </div>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>Check Out successfully</h3>
                    <Link to="products">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemCounter === 0 && <div className={styles.complete}>
                    <h3>Wana buy ?</h3>
                    <Link to="products">Go to the Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;