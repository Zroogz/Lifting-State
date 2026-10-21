const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 45 }
]

const ProductList = ({ onAddToCart }) => {
    return (
        <div>
            <h2>Product List</h2>
            {products.map(({ id, name, price }) => (
                <div key={id} style={{ marginBottom: '8px' }}>
                    <span>
                        {name} - ${price}
                    </span>
                    <button onClick={() => onAddToCart({ id, name, price })}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProductList
