import React from 'react'
import styles from './index.css'

const addOrderStyle = {
    borderTop: '1px solid #2f2f2f'
}


function AddOrder(props) {

    const [order, setOrder] = React.useState({name: '', price: '', notes: ''});

    const handleInputChange = e => {
        const {name, value} = e.target
        setOrder({...order, [name]: value})
    }

    const handleSaveOrder = () => {
        props.addNewOrder(order)
    }
    console.log(styles)
    return (
        <div style={addOrderStyle}>
            <p>Add a new Order</p>
            <div>
                <input type="text" value={order.name}
                       onChange={handleInputChange}
                       name="name" placeholder="drink's name"/>
                <input type="text" value={order.price} onChange={handleInputChange} name="price"
                       placeholder="drink's price"/>
                <input value={order.notes} name="notes" placeholder="drink's notes" onChange={handleInputChange}/>
                <button onClick={() => handleSaveOrder()}>confirm</button>
            </div>
        </div>
    )
}

export default AddOrder;