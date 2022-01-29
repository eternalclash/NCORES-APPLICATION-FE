import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'
import { RefreshControl } from "react-native";
const GET_CAMERAREPORT = "GET_CAMERAREPORT";
const AQUA_SCORE = "AQUA_SCORE"
const OILL_SCORE = "OILL_SCORE"
const PIGMENT_SCORE = "PIGMENT_SCORE"
const SENSITIVE_SCORE = "SENSITIVE_SCORE"
const WINKLE_SCORE = "WINKLE_SCORE"
const getCameraReport=createAction(GET_CAMERAREPORT,(cameraReport)=>({cameraReport}))
const aquaScore = createAction(AQUA_SCORE,(aquaScore)=>({aquaScore}))
const oillScore = createAction(OILL_SCORE,(oillScore)=>({oillScore}))
const pigmentScore = createAction(PIGMENT_SCORE,(pigmentScore)=>({pigmentScore}))
const sensitiveScore = createAction(SENSITIVE_SCORE,(sensitiveScore)=>({sensitiveScore}))
const winkleScore = createAction(WINKLE_SCORE,(winkleScore)=>({winkleScore}))

const initialState = {
    cameraReport:"",
  element: "",
  aquaScore: "",
  oillScore: "",
  pigmentScore: "",
  sensitiveScore: "",
  winkleScore: "",
}


const cameraReportAPI = (id) => {
  return async function  (dispatch, navigation) {
    await axios.get("http://54.180.134.111/skin/status", {
      headers: {
        // "Content-Type": "multipart/form-data",
    //   Accept: "application/json",
    //    "Access-Control-Allow-Origin": "*",
      "Authorization": await AsyncStorage.getItem("token"),
   },
    })
        .then(async(res) => { //바디 부분
          console.log(res.data)
          dispatch(aquaScore([{apples:res.data.dry,banana:100-res.data.dry}]))
          dispatch(oillScore([{apples:res.data.oilIndicate,banana:100-res.data.oilIndicate}]))
          dispatch(pigmentScore([{apples:res.data.pigment,banana:100-res.data.pigment}]))
          dispatch(sensitiveScore([{apples:res.data.sensitivity,banana:100-res.data.sensitivity}]))
          dispatch(winkleScore([{apples:res.data.winkle,banana:100-res.data.winkle}]))
         dispatch(getCameraReport(res.data))
         
      })
         .catch(async (err) => {
           
        console.log("카메라 에러")
      
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
        [AQUA_SCORE]: (state, action) =>
        produce(state, (draft) => {
          draft.aquaScore= action.payload.aquaScore
        }),
        [OILL_SCORE]: (state, action) =>
        produce(state, (draft) => {
          draft.oillScore= action.payload.oillScore
        }),
        [PIGMENT_SCORE]: (state, action) =>
        produce(state, (draft) => {
          draft.pigmentScore= action.payload.pigmentScore
        }),
        [SENSITIVE_SCORE]: (state, action) =>
        produce(state, (draft) => {
          draft.sensitiveScore= action.payload.sensitiveScore
        }),
        [WINKLE_SCORE]: (state, action) =>
        produce(state, (draft) => {
          draft.winkleScore= action.payload.winkleScore
        }),
        
    },
  
    initialState
  );

  export const actionCreators = {
      cameraReportAPI,
   
  };