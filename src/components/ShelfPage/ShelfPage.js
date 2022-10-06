import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ShelfPage() {
const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'FETCH_ITEMS'
    })
  }, [])


  const shelfItems = useSelector(store => store.shelfReducer)
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>Shelf Things:
        {shelfItems.map(item => (
          <li key={item.id}>{item.descripition}<img src={item.image_url}></img></li>
            
        ))}

      </ul>
    </div>
  );
}

export default ShelfPage;
