const Cart = ({ items, onRemove }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                items.map((item, index) => (
                    <div key={`${item.id}-${index}`}>
                        {item.name} - ${item.price}
                        <button onClick={() => onRemove(index)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default Cart
