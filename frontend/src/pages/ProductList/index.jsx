import { useState, useEffect } from "react";
import API from '../../services/api.js';

const ProductList = () => {
    console.log('product list');
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        API.get('/api/products')
            .then(res => setProducts(res.data))
            .catch(err => setError(err.message));
    }, []);
    console.log(products);
    return (
        <div className="product-list">
            <ul>
                { products.map( p => (
                    <li key={p.id}>{ p.title }</li>
                ))}
            </ul>
            {error && <p>{error}</p>}
        </div>
    )
}

export default ProductList;