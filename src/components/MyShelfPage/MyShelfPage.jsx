import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddItem from '../AddItem/AddItem';

// grab images by currentUserId.

function MyShelfPage() {
  const dispatch = useDispatch();
  const currentUserId = useSelector(store=>store.user.id);

  useEffect(() => {
    dispatch({
      type: 'FETCH_USER_ITEMS',
      payload: currentUserId
    })
  }, [])

  const handleDelete = (e,item) => {
    if (item.user_id === currentUserId) {
      dispatch({
        type: 'DELETE_ITEM',
        payload: {
          id: item.id,
          itemUserId: item.user_id,
        }
      });
      // alert(" PROCEED, WISE ONE ");
    } else {
      alert(" YOU FOOL! ");
    }
  }

  const shelfItems = useSelector(store => store.shelfReducer)
  return (
    <div className="container">
      <AddItem />
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>Shelf Things:
        {shelfItems.map(item => (
          <li key={item.id}>{item.descripition}<img src={item.image_url} onClick={e=>handleDelete(e,item)}></img></li>
            
        ))}

      </ul>
    </div>
  );
}

export default MyShelfPage;
