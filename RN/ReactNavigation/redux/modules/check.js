import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'

const CAMERACHECK = "CAMERACHECK"

const cameraCheck = createAction(CAMERACHECK, (cameraCheck) => ({ cameraCheck }))
const initialState = {
   cameraCheck: false,
}


const check1API = (check) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "POST",
      url: "http://54.180.134.111/skin/daily/status",
       data: {id:check},
         headers: {
            // "Content-Type": "multipart/form-data",
        //   Accept: "application/json",
        //    "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then(async(res) => { //바디 부분
         
        dispatch(cameraCheck(true)) 
        
      })
         .catch(async (err) => {
           
        console.log("체크1 에러")
      
        throw new Error(err);
      });
  };
};
const check2API = (check) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "POST",
        url: "http://54.180.134.111/skin/daily/Stimulation",
         data: {id:check},
           headers: {
              // "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
          //    "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
          .then(async(res) => { //바디 부분
           
            dispatch(cameraCheck(true)) 
     
        })
           .catch(async (err) => {
             
          console.log("체크2 에러")
        
          throw new Error(err);
        });
    };
};
const check3API = (num) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "POST",
        url: "http://54.180.134.111/skin/worry",
         data: {id:num},
           headers: {
              // "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
          //    "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
          .then(async(res) => { //바디 부분
           
           
            dispatch(cameraCheck(true)) 
        })
           .catch(async (err) => {
             
          console.log("체크3 에러")
        
          throw new Error(err);
        });
    };
  };

  const ratingAPI = (num) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "POST",
        url: "http://54.180.134.111/skin/daily/self-check",
         data: {score:num},
           headers: {
              // "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
          //    "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
          .then(async(res) => { //바디 부분
           
           
            dispatch(cameraCheck(true)) 
        })
           .catch(async (err) => {
             
          console.log("체크3 에러")
        
          throw new Error(err);
        });
    };
  };

export default handleActions(
    {
        [CAMERACHECK]: (state, action) =>
        produce(state, (draft) => {
          draft.cameraCheck = action.payload.cameraCheck
        }),
       
        
    },
  
    initialState
  );

  export const actionCreators = {
      check1API,
      check2API,
      check3API,
      ratingAPI,
      cameraCheck,
  };