import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, addItem, removeItem } from './redux/actions';

function App() {
    const count = useSelector(state => state.counter.count);
    const items = useSelector(state => state.items.items);
    const dispatch = useDispatch();

    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        dispatch(addItem(newItem));
        setNewItem('');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Redux Counter & Items</h1>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>

            <h2>Items:</h2>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item"
            />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => dispatch(removeItem(index))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
