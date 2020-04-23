// import {ADD_TODO,REMOVE_TODO} from "./action.types";

// export default (state,action)=>{
//     switch (action.type) {
//         case ADD_TODO:
//             return[...state,action.payload]//payload is used along with action to carry data or information with action to pass some information
//             //here todo like a baggage which carry string(ADD_TODO/REMOVE_TODO) along with action and store it into state.
//         case REMOVE_TODO:
//             return state.filter(todo=>todo.id!==action.payload)     
    
//         default:
//             break;
//     }
// }

import { ADD_TODO, REMOVE_TODO } from "./action.types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
};
