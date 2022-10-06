import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();
  const currentUserId = useSelector(store=>store.user.id);

  useEffect(() => {
    dispatch({
      type: 'FETCH_ITEMS'
    })
  }, [])

  const handleDelete = (e,item) => {
    console.log(item.id, item.user_id, "user id", currentUserId);
    
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

export default ShelfPage;
