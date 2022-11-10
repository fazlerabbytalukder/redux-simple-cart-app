import { combineReducers } from "redux";
import { cartReducer } from "./Reducers/cartReducers";
import { productReducer } from "./Reducers/productReducers";
import { selectedReducer } from "./Reducers/selectedCartReducer";

const rootReducer = combineReducers({
    products: productReducer,
    carts: cartReducer,
    selectedProduct: selectedReducer,
});

export default rootReducer;