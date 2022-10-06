import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function AddItem() {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const [newItem, setNewItem] = useState('');
    const [itemName, setItemName] = useState('');

    const handleSubmit = event => {
        const userId = user.id;
        event.preventDefault();
        console.log('What`s my user ID:::', userId);
        console.log('What`s my name Mitch:::', itemName);
        console.log('newItem:::::', newItem);
        const action = {
            type: 'ADD_NEW_ITEM',
            payload: {userId, itemName, newItem}
        }
        dispatch(action);
        setNewItem('');
        setItemName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="name that item"
                value={itemName}
                onChange={(event) => setItemName(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="url goes here"
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddItem;