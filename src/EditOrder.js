import React from 'react'
const editOrderStyle = {
    borderTop: '1px solid #2f2f2f',
}

function EditOrder(props) {
    const orderId = props.editOrder.id
    return (
        <div style={editOrderStyle}>
            <p>Update this Order</p>
            <div>
                <p>name: <input type="text" value={props.editOrder.name} name="name" placeholder="drink's name"
                                onChange={props.handleInputChange}/></p>
                <p>price: <input type="text" value={props.editOrder.price} name="price" placeholder="drink's price"
                                 onChange={props.handleInputChange}/></p>
                <p>notes: <textarea value={props.editOrder.notes} name="notes" placeholder="drink's notes"
                                    onChange={props.handleInputChange}/></p>
                <button onClick={() => props.handleSaveEditOrder()}>update order</button>
            </div>
        </div>
    );
}

export default EditOrder