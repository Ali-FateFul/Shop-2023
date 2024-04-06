import React, { useContext } from 'react';
// Component
import Product from './shared/Product';

//styles
import styles from './Store.module.css';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductsContext);
    return (
        <div className={styles.container}>
            {
                products.map(item => <Product key={item.id} data={item} />)
            }
        </div>
    );
};

export default Store;