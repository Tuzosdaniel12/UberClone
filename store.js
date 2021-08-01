import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/reducers";

const store = configureStore({
	reducer: {
        nav: navReducer,
    },
});

export default store;
