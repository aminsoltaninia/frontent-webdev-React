import { createStore , combineReducers , applyMiddleware } from 'redux';
import { DishesR} from './dishes';
import { CommentsR} from './comments';
import { LeadersR} from './leaders';
import { PromotionsR} from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = ()=>{
   const store = createStore(
      combineReducers({
         dishes : DishesR ,
         leaders : LeadersR ,
         promotions : PromotionsR ,
         comments : CommentsR 
      }),
      applyMiddleware(thunk , logger)
      
   )
   return store;
}
