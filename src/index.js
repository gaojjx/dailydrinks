import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import OrderLIst from "./OrderLIst";
import AddOrder from "./AddOrder";
import EditOrder from "./EditOrder";

const initOrders = [
    {id: 1, name: 'latte', price: 35, notes: 'latte'}, {id: 2, name: 'flat white', price: 38, notes: 'flat white'}
]

function Index() {
    let maxOrderId = 0
    const [orders, setOrders] = React.useState(initOrders)
    const [editForm, setEditFrom] = React.useState(false)
    const [editOrder, setEditOrder] = React.useState({id: 1, name: '', price: 0, notes: ''})
    const handleInputChange = e => {
        const {name, value} = e.target
        setEditOrder({...editOrder, [name]: value})
    }

    const addNewOrder = order => {
        order.id = maxOrderId + 1
        orders.push(order)
        maxOrderId = order.id
        setOrders([...orders])
    }
    const handleOrderDelete = orderId => {
        const index = orders.findIndex(order => order.id === orderId);
        if (index > -1) {
            orders.splice(index, 1);
        }
        setOrders([...orders])
    }

    const handleOrderEdit = orderId => {
        const order = orders.find(order => order.id === orderId);
        let isEditForm = !editForm
        if (editOrder.id !== orderId) isEditForm = true
        setEditFrom(isEditForm)
        setEditOrder(order)
    }

    const handleSaveEditOrder = () => {
        const index = orders.findIndex(order => order.id === editOrder.id);
        orders[index] = editOrder
        setOrders([...orders])
    }

    return (
        <div>
            <div><OrderLIst orders={orders} handleOrderEdit={handleOrderEdit} handleOrderDelete={handleOrderDelete}/></div>
            {
                editForm ? <EditOrder
                    editOrder={editOrder}
                    handleInputChange={handleInputChange}
                    handleSaveEditOrder={handleSaveEditOrder}
                /> : null
            }
            <AddOrder addNewOrder={addNewOrder}/>
        </div>
    )
}

ReactDOM.render(<Index/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
