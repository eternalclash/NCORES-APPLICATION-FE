import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'
const GET_LIST = "GET_LIST";
const GET_BOUMAN = "GET_BOUMAN"
const AQUA_SCORE = "AQUA_SCORE"
const OILL_SCORE = "OILL_SCORE"
const PIGMENT_SCORE = "PIGMENT_SCORE"
const SENSITIVE_SCORE = "SENSITIVE_SCORE"
const WINKLE_SCORE = "WINKLE_SCORE"
const getList=createAction(GET_LIST,(getList)=>({getList}))
const getBouman = createAction(GET_BOUMAN,(getBouman)=>({getBouman}))

const aquaScore = createAction(AQUA_SCORE,(aquaScore)=>({aquaScore}))
const oillScore = createAction(OILL_SCORE,(oillScore)=>({oillScore}))
const pigmentScore = createAction(PIGMENT_SCORE,(pigmentScore)=>({pigmentScore}))
const sensitiveScore = createAction(SENSITIVE_SCORE,(sensitiveScore)=>({sensitiveScore}))
const winkleScore = createAction(WINKLE_SCORE,(winkleScore)=>({winkleScore}))
// function changeChart(score)
// {
//  const aqua = {
//      data: [],
//      color: [],
//      keys: [],
//  };
//  const aquaData = {};
//  console.log("85에러")
//  console.log(score.length)
//  for (let i = 0; i < score.length; i++)
//  {    console.log("88에러")
//      aqua.color.push(score[i].color)
//      console.log("90에러")
//      aqua.keys.push(score[i].tag)
//      console.log("92에러")
//      aquaData[`${score[i].tag}`] = score[i].rate
//      console.log("94에러")
//      if (i == score.length-1)
//      { console.log("91에러")
//       aqua.data=aquaData
//          }
       
//  }
//     console.log(aqua)
//     return aqua
// }
function changeChart(score,sum)
{
 const aqua = {
     data: [],
     color: [],
     keys: [],
 };
 const aquaData = {};

   
 for (let i = 0; i < 3; i++)
 {   
     aqua.color.push(`#`+score[i].color)
     aqua.keys.push(score[i].tag)
     aquaData[`${score[i].tag}`] = score[i].rate
     sum -= score[i].rate
     console.log(sum)
     if (i == 2)
     {  
         if (sum > 0)
         {   aqua.color.push('#C4C4C4')
             aqua.keys.push('all')
             aquaData['all'] = sum
           }
      aqua.data.push(aquaData)
         }
       
 }
    console.log(score)
    return aqua
}


const initialState = {
    
    getList: "",
    getBouman: "",
    aquaScore: {},
    oillScore: {},
    pigmentScore: {},
    sensitiveScore: {},
    winkleScore: {},
    
}


const getListAPI = (id) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "GET",
      url: `http://54.180.134.111/skin/status/list`,
       data: {},
         headers: {
            // "Content-Type": "multipart/form-data",
        //   Accept: "application/json",
        //    "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then(async(res) => { //바디 부분
        //  console.log(res.data)
         dispatch(getList(res.data))
      
      })
         .catch(async (err) => {
           
        console.log("리스트 에러")
      
        throw new Error(err);
      });
  };
};
const getBoumanAPI = (element) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "GET",
        url: `http://54.180.134.111/skin/status/bouman`,
         data: {},
           headers: {
              // "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
          //    "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
           .then(async (res) => { //바디 부분
            console.log(res.data)
        // await  dispatch(getBouman(res.data))
        // await   dispatch(aquaScore(changeChart(res.data.aquaScore,100)))
        // await   dispatch(oillScore(changeChart(res.data.oilScore,100)))
        // await   dispatch(sensitiveScore(changeChart(res.data.sensitiveScore,100)))
        // await   dispatch(pigmentScore(changeChart(res.data.pigmentScore,100)))
        // await   dispatch(winkleScore(changeChart(res.data.winkleScore,100)))
              
       
        })
           .catch(async (err) => {
             
          console.log("바우만 에러")
        
          console.log(err)
        });
    };
  };

export default handleActions(
    {
        [GET_LIST]: (state, action) =>
        produce(state, (draft) => {
          draft.getList= action.payload.getList
        }),
        [GET_BOUMAN]: (state, action) =>
        produce(state, (draft) => {
          draft.getBouman= action.payload.getBouman
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
      getListAPI,
      getBoumanAPI,
  };