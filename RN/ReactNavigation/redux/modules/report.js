import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'
import { RefreshControl } from "react-native";
const GET_CAMERAREPORT = "GET_CAMERAREPORT";
const AQUA = "AQUA"
const OILL = "OILL"
const PIGMENT = "PIGMENT"
const SENSITIVE = "SENSITIVE"
const WINKLE = "WINKLE"
const getCameraReport=createAction(GET_CAMERAREPORT,(cameraReport)=>({cameraReport}))
const aqua = createAction(AQUA,(aqua)=>({aqua}))
const oill = createAction(OILL,(oill)=>({oill}))
const pigment = createAction(PIGMENT,(pigment)=>({pigment}))
const sensitive = createAction(SENSITIVE,(sensitive)=>({sensitive}))
const winkle = createAction(WINKLE,(winkle)=>({winkle}))

const initialState = {
    cameraReport:"",
  element: "",
  aqua: "",
  oill: "",
  pigment: "",
  sensitive: "",
  winkle: "",
}


const cameraReportAPI = (id) => {
  return async function  (dispatch, navigation) {
    await axios.get("https://plaluvs-backend.me/skin/status", {
      headers: {
        // "Content-Type": "multipart/form-data",
    //   Accept: "application/json",
    //    "Access-Control-Allow-Origin": "*",
      "Authorization": await AsyncStorage.getItem("token"),
   },
    })
        .then(async(res) => { //바디 부분
          console.log(res.data)
          dispatch(aqua([{apples:res.data.dry,banana:100-res.data.dry}]))
          dispatch(oill([{apples:res.data.oilIndicate,banana:100-res.data.oilIndicate}]))
          dispatch(pigment([{apples:res.data.pigment,banana:100-res.data.pigment}]))
          dispatch(sensitive([{apples:res.data.sensitivity,banana:100-res.data.sensitivity}]))
          dispatch(winkle([{apples:res.data.winkle,banana:100-res.data.winkle}]))
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
        url: `https://plaluvs-backend.me/elements/mark/${element}`,
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
        [AQUA]: (state, action) =>
        produce(state, (draft) => {
          draft.aqua= action.payload.aqua
        }),
        [OILL]: (state, action) =>
        produce(state, (draft) => {
          draft.oill= action.payload.oill
        }),
        [PIGMENT]: (state, action) =>
        produce(state, (draft) => {
          draft.pigment= action.payload.pigment
        }),
        [SENSITIVE]: (state, action) =>
        produce(state, (draft) => {
          draft.sensitive= action.payload.sensitive
        }),
        [WINKLE]: (state, action) =>
        produce(state, (draft) => {
          draft.winkle= action.payload.winkle
        }),
        
    },
  
    initialState
  );

  export const actionCreators = {
      cameraReportAPI,
   
  };