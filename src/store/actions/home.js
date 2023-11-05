
import actionTypes from "../actions/actionTypes"
import * as apis from "../../apis"

export const getHome=()=> async(dispatch)=>{
    try {
      const response=await apis.apiHome();
 
      if(response.data?.err===0){
            dispatch({
              type:actionTypes.GET_HOME,
              dataHome:response.data.data.items
            })
      }else{
        dispatch({
          type:actionTypes.GET_HOME,
          dataHome:null
        })
      }
    } catch (error) {
      dispatch({
        type:actionTypes.GET_HOME,
        dataHome:null
      })
    }
}