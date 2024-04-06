import React, { useContext } from 'react';
import {Link} from "react-router-dom";

// function
import { shorten, isInCart, quantityCounter } from '../../helper/function';

// Context
import { CartContext } from '../../context/CartContextProvider';

//styles
import styles from './Product.module.css';

// Icons
import trash from '../../assets/icons/trash.svg'

const Product = ({data}) => {
    const {state, dispatch} = useContext(CartContext);
    return (
        <div className={styles.container}>
            <img src={data.image} alt="product" className={styles.cardImage} />
            <h3>{shorten(data.title)}</h3>
            <p>{data.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${data.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCounter(state , data.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})} className={styles.smallButton}><img src={trash} alt="trash" /></button>}
                    {quantityCounter(state, data.id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload: data})}className={styles.smallButton}>-</button>}
                    {quantityCounter(state, data.id) > 0 && <span className={styles.counter}>{quantityCounter(state, data.id)}</span>}
                    {
                        isInCart(state , data.id) ?
                        <button onClick={() => dispatch({type: "INCREASE", payload: data})} className={styles.smallButton}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: data})} >Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;