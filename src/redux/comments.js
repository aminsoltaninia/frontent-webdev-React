
import {Comments} from '../shared/comment';
import * as ActionTypes from './ActionTypes';

export const CommentsR = (state = Comments , action)=>{
    
     switch(action.type){
        case ActionTypes.ADD_COMMENT :
             var comment = action.payload;
             comment.id = state.length
             comment.date = new Date().toISOString();
             console.log(comment)
          return state.concat(comment);  // get copy of state then add new comment
        default :
            return state;
     }
      
}