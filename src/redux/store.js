import { createStore,compose,applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducers";


const middleWares= [Thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if(process.env.NODE_ENV==="development")
{
    middleWares.push(logger);



}

const store=createStore(rootReducer,composeEnhancer(applyMiddleware(...middleWares)));

export default store;