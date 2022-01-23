import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'


const initialState = {
   
}


const userElementsAPI = (cosmetic) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "GET",
      url: "http://54.180.134.111/user/elements/0",
       data: {},
         headers: {
            // "Content-Type": "multipart/form-data",
        //   Accept: "application/json",
        //    "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then(async(res) => { //바디 부분
         
         
        console.log(res.data)
      })
         .catch(async (err) => {
           
        console.log("유저 성분 에러")
      
        throw new Error(err);
      });
  };
};
const userCosmeticAPI = (cosmetic) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "GET",
        url: "http://54.180.134.111/user/cosmetics/0",
         data: {},
           headers: {
              // "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
          //    "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
          .then(async(res) => { //바디 부분
           
           
          console.log(res.data)
        })
           .catch(async (err) => {
             
          console.log("유저화장품 에러")
        
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
      userCosmeticAPI,
      userElementsAPI
  };