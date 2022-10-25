
import { configureStore } from "@reduxjs/toolkit";
import todos from "./todo";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';



const redusersed = todos.reducer
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer =  persistReducer(persistConfig,redusersed)

 const store = configureStore({

reducer:{
    todos:persistedReducer
},
middleware: [thunk]

})
export type AppDispatch = typeof store.dispatch;
export type Appstate = ReturnType<typeof store.getState>
export const persistor = persistStore(store)
export default store;