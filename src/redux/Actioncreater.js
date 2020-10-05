import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

// add thunk

export const fetchDishes = ()=> (dispatch) => {
     dispatch(dishesLoading(true))
     return fetch(baseUrl+'dishes')
            .then(response=>{//1. get error from server
                  if(response.ok) return response;
                  else{
                      var errmess= new Error(
                          'Error '+response.status + ': ' + response.statusText
                      )
                      errmess.response = response;
                      console.log(errmess)
                      throw errmess;
                  }
            },
            errmess=>{//2.handle error
                var errrrr = new Error(errmess.message)
                throw errrrr;
            })
            .then(response=> response.json())
            .then(dishes=> dispatch(addDishes(dishes)))
            .catch(errmess=> dispatch(dishesFailed(errmess.message)))
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

// setup fetch comment


export const fetchComments = ()=> (dispatch) => {
    return fetch(baseUrl+'comments')
            .then(response=>{//1. get error from server
                    if(response.ok) return response;
                    else{
                        var errmess= new Error(
                            'Error '+response.status + ': ' + response.statusText
                        )
                        errmess.response = response;
                        throw errmess;
                    }
            },
            errmess=>{//2.handle error
                var errrrr = new Error(errmess.message)
                throw errrrr;
            })
           .then(response=> response.json())
           .then(comments=> dispatch(addComments(comments)))
           .catch(errmess=> dispatch(commentsFailed(errmess.message)))
}
export const commentsFailed = (errmessage)=>({
    type : ActionTypes.COMMENTS_FAILED,
    payload : errmessage
})
export const addComments = (comments)=>
    ({
    type : ActionTypes.ADD_COMMENTS,
    payload : comments
})
export const addComment = (comment)=>({
    type : ActionTypes.ADD_COMMENT,
    payload :  comment
});
export const postComment = (dishId , rating , author , comment)=>(dispatch)=>{
    const newComment = {
        dishId : parseInt(dishId),
        rating , author , comment  
    } 
    newComment.date = new Date().toISOString();
    // post comment to server
    return fetch(baseUrl + 'comments' , {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers : {
            'Content-Type' : 'application/json'
        },
        credentials : 'same-origin'
    })
    .then(response=>{//1. get error from server
            if(response.ok) return response;
            else{
                var errmess= new Error(
                    'Error '+response.status + ': ' + response.statusText
                )
                errmess.response = response;
                throw errmess;
            }
    },
    errmess=>{//2.handle error
        var errrrr = new Error(errmess.message)
        throw errrrr;
    })
    .then(response=> response.json())
    .then((response)=> dispatch(addComment(response)))
    .catch(errmess=> {
         console.log('Post comments' , errmess.message)
         alert('your commnet could not b posted\n Error: ' + errmess.message)
        })
}  

// setup promos fetch

export const fetchPromos = ()=> (dispatch) => {
    dispatch(promosLoading(true))
    return fetch(baseUrl+'promotions')
            .then(response=>{//1. get error from server
                    if(response.ok) return response;
                    else{
                        var errmess= new Error(
                            'Error '+response.status + ': ' + response.statusText
                        )
                        errmess.response = response;
                        throw errmess;
                    }
            },
            errmess=>{//2.handle error
                var errrrr = new Error(errmess.message)
                throw errrrr;
            })
           .then(response=> response.json())
           .then(promos=> dispatch(addPromos(promos)))
           .catch(errmess=> dispatch(promosFailed(errmess.message)))
}

export const promosLoading = ()=> ({
   type : ActionTypes.PROMOS_LOADING,
})

export const promosFailed = (errmessage)=>({
   type : ActionTypes.PROMOS_FAILED,
   payload : errmessage
})

export const addPromos = (promos)=>({
   type : ActionTypes.ADD_PROMOS,
   payload : promos
})