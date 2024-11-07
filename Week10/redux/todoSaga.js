// redux/todoSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoFailure,
} from './todoSlice';
import { API_URL } from '../pages/TodoApp';

function* addTodoSaga(action) {
  try {
    const response = yield call(axios.post, API_URL, {
      name: action.payload,
      isChecked: false,
    });
    yield put(addTodoSuccess(response.data));
  } catch (error) {
    yield put(addTodoFailure(error.message));
  }
}

function* updateTodoSaga(action) {
  try {
    const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, {
      name: action.payload.name,
    });
    yield put(updateTodoSuccess(response.data));
  } catch (error) {
    yield put(updateTodoFailure(error.message));
  }
}

export default function* todoSaga() {
  yield takeLatest(addTodoRequest.type, addTodoSaga);
  yield takeLatest(updateTodoRequest.type, updateTodoSaga);
}
