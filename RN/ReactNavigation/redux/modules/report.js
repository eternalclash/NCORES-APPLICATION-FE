import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'
const GET_CAMERAREPORT = "GET_CAMERAREPORT";
const getCameraReport=createAction(GET_CAMERAREPORT,(cameraReport)=>({cameraReport}))


const initialState = {
    cameraReport:"",
    element:"",
}


const cameraReportAPI = (id) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "GET",
      url: `http://54.180.134.111/skin/status`,
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
         dispatch(getCameraReport(res.data))
      
      })
         .catch(async (err) => {
           
        console.log("홈 화장품 에러")
      
        throw new Error(err);
      });
  };
};
const markElementAPI = (element) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "POST",
        url: `http://54.180.134.111/elements/mark/${element}`,
         data: {},
           headers: {
              // "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
          //    "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
          .then(async(res) => { //바디 부분
           
           
       
        })
           .catch(async (err) => {
             
          console.log("카테고리 화장품 에러")
        
          throw new Error(err);
        });
    };
  };

export default handleActions(
    {
        [GET_CAMERAREPORT]: (state, action) =>
        produce(state, (draft) => {
          draft.cameraReport = action.payload.cameraReport
        }),
       
        
    },
  
    initialState
  );

  export const actionCreators = {
      cameraReportAPI,
   
  };