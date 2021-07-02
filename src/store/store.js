import { createStore } from '@reduxjs/toolkit';
import { app } from './reducers/reducers'

const store = createStore(app);

export default store;