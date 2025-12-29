import { useState, useEffect } from "react";
import API from '../../services/api.js';

const ProductList = () => {
    console.log('product list');
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetch () {
            try {
                const res = await API.get('/api/products');
                setProducts( res.data.message || []);
            } catch (e) {
                setError( e.message);
            }
        }
        fetch();
    }, []);


    if (error ) {
        return <div>Error: { error }</div>
    }

    return (
        <div>
            <ul>
                { products.map( p => (<li key={p.id}>{p.title}</li>)
                )}
            </ul>
            {error && <div>{error}</div>}
        </div>
    )
}

export default ProductList;