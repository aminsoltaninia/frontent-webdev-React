import * as ActionTypes from './ActionTypes';
import { Dishes } from '../shared/dishes';


export const addComment = (dishId , rating , author , comment)=>({
    type : ActionTypes.ADD_COMMENT,
    payload : {
        dishId , rating , author , comment
    }
})


// add thunk

export const fetchDishes = ()=> (dispatch) => {
     dispatch(dishesLoading(true))

     setTimeout(()=>{
         dispatch(addDishes(Dishes))
         console.log("ggg" , Dishes)
     }, 2000);
}

export const dishesLoading = ()=> ({
    type : ActionTypes.DISHES_LOADING,
})

export const dishesFailed = (errmessage)=>({
    type : ActionTypes.DISHES_FAILED,
    payload : errmessage
})

export const addDishes = (dishes)=>
    ({
    type : ActionTypes.ADD_DISHES,
    payload : dishes
})