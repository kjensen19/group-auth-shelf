import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ITEMS" actions
function* fetchItems() {
  console.log('HERE???')
  try {
    const response = yield axios.get('/api/shelf');

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_ITEMS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// saga will be fired on FETCH_USER_ITEMS
function* fetchUserItems(action) {
  console.log('HERE???')
  try {
    const response = yield axios.get(`/api/shelf/user`);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_ITEMS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}


function* deleteItem(action) {
  console.log('DELETING???')
  try {
    const response = yield axios({
        method: 'DELETE',
        url: `/api/shelf/${action.payload.id}`,
        data: action.payload  
    })

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'FETCH_ITEMS' });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* itemSaga() {
  yield takeLatest('FETCH_ITEMS', fetchItems);
  yield takeLatest('DELETE_ITEM', deleteItem);
  yield takeLatest('FETCH_USER_ITEMS', fetchUserItems);
}

export default itemSaga;
