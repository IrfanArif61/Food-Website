'use client'
import React, {useState, createContext, useContext, useReducer} from 'react';
import { foodsType } from './types';



export type StateType = {
  cartItems: foodsType[];
  totalPrice : number
  totalItems : number
  totalWeight : number
  orders : any[]
  products : any
  count : number
  productDetail : any
};


export type Action = {
  type: string;
  payload: any;
};





const initialState:StateType = {
  cartItems: [],
  totalPrice : 0,
  totalItems : 0,
  totalWeight : 0,
  orders : [],
  products : {},
  count : 0,
  productDetail : {}
};

const StoreContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<Action>;
}>({
  state:initialState,
  dispatch: ()=>null
});

const StoreReducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case 'cart':
      return {
        ...state,
        cartItems:  action.payload.cartItems,
        totalPrice : action.payload?.totalPrice || 0,
        totalItems : action.payload?.totalItems || 0,
        totalWeight : action.payload?.totalWeight || 0
      };
      
    case 'order':
      return {
        ...state,
        orders : action.payload
      };

    case 'product':
      return {
        ...state,
        products : action.payload
      }

      case 'count':
      return {
        ...state,
        count : action.payload
      }

      case 'detail':
        return{
          ...state,
          productDetail : action.payload
        }
    default:
      return state;
  }
};

export const useStore = () => useContext(StoreContext);

const MyStoreProvider = ({children}:{children:React.ReactElement|React.ReactElement[]} ) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  return (
    <StoreContext.Provider value={{state,dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

export default MyStoreProvider;
