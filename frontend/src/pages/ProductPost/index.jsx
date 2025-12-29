import { useState } from "react"
import API from '../../services/api.js'


function ProductPost () {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState('');

    const [ response, setResponse ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            title, price: Number(price), stock: Number(stock), category
        }
        try {
            const res = await API.post('/api/products', productData);
            setResponse( res.data.message);
            console.log('Product Saved: ', res.data);
        } catch (error) {
            console.error('Failed to post product: ', error.message);
            alert('Failed to post product');
        }


    }
    return (
        <div className="product-post">
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Title"
                    type="text"
                    value={title}
                    onChange={e=> setTitle(e.target.value)}
                    required
                />
                <input 
                    placeholder="Price"
                    type="text"
                    value={price}
                    onChange={e=> setPrice(e.target.value)}
                    required
                />
                <input 
                    placeholder="Stock"
                    type="text"
                    value={stock}
                    onChange={e=> setStock(e.target.value)}
                    required
                />
                <input 
                    placeholder="Category"
                    type="text"
                    value={category}
                    onChange={e=> setCategory(e.target.value)}
                    required
                />
                <button type="submit">Post Product</button>
            </form>
            { response && <p>{ response }</p> }
        </div>
    )
}

export default ProductPost;
