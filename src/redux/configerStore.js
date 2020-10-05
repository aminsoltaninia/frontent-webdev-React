import { createStore , combineReducers , applyMiddleware } from 'redux';
import {createForms} from 'react-redux-form'
import { DishesR} from './dishes';
import { CommentsR} from './comments';
import { LeadersR} from './leaders';
import { PromotionsR} from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = ()=>{
   const store = createStore(
      combineReducers({
         dishes : DishesR ,
         leaders : LeadersR ,
         promotions : PromotionsR ,
         comments : CommentsR ,
         ...createForms({
            feedback : InitialFeedback
         })
      }),
      applyMiddleware(thunk , logger)
      
   )
   return store;
}
