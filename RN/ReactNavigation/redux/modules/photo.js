import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'


const initialState = {
   
}


const postImageAPI = (image) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "POST",
      url: "http://54.180.134.111/photo",
       data: image,
         headers: {
            "Content-Type": "multipart/form-data",
        //   Accept: "application/json",
        //    "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then(async(res) => {
         console.log(await AsyncStorage.getItem("token"))
         
         console.log("사진 성공!")
      })
         .catch(async (err) => {
            console.log(await AsyncStorage.getItem("token"))
        console.log("사진 전송 실패")
      
        throw new Error(err);
      });
  };
};


export default handleActions(
    {
      
       
        
    },
  
    initialState
  );

  export const actionCreators = {
    postImageAPI,
  };