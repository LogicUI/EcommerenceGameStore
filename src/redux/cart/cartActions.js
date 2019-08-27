import {ADD_ITEM} from "./cartType";

export const addItemToCart = (item) => {
    return {
        type: ADD_ITEM,
        payload:item
    }
} 

