import { configureStore } from "@reduxjs/toolkit/react";
import changeState from "./project2";

export default configureStore({
    reducer: {
        text: changeState,
    }
})