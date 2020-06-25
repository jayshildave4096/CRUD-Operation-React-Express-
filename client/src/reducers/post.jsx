// import { ADD_POST, REMOVE_POST, UPDATE_POST } from "../actions/index.jsx";

// const initialState = [];

// export default function Post(state = initialState, action) {
//   switch (action.type) {
//     case ADD_POST:
//       return [
//         ...state,
//         {
//           id: action.id,
//           prod_name: action.prod_name,
//           prod_type: action.prod_type,
//           prod_status:action.prod_status,
//           prod_desc:action.prod_desc,
//           prod_quantity:action.prod_quantity,
//           cust_name:action.cust_name,
//           cust_number:action.cust_number,
//           cust_mail:action.cust_mail
//         }
//       ];
//     case REMOVE_POST:
//       return state.filter(({ id }) => id !== action.id);
//     case UPDATE_POST:
//       return state.map(
//         post => (post.id === action.id ? { ...post, ...action } : post)
//       );
//     default:
//       return state;
//   }
// }
