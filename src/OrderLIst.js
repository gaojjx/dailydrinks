import React from 'react'

const deleteStyle = {
    color: '#fff',
    backgroundColor: '#d9534f'
}

function OrderLIst(props) {

    const handleDeleteClick = orderId => {
        props.handleOrderDelete(orderId)
    };

    const handleOrderEdit = orderId => {
        props.handleOrderEdit(orderId)
    };

    const renderList = props.orders.map(order => {
        return (
            <li key={order.id}>
                <p>{order.name} ${order.price}</p>
                <p>notes: {order.notes}</p>
                <button style={deleteStyle} onClick={() => handleDeleteClick(order.id)}>delete</button>
                <button onClick={() => handleOrderEdit(order.id)}>update</button>
            </li>
        )
    })

    return (
        <ul>
            {renderList}
        </ul>
    )
}

export default OrderLIst