import React, {useState,useEffect} from 'react'
import { View } from 'react-native'
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'
import { Text, G, Path, Rect } from 'react-native-svg'
import { useSelector,useDispatch } from 'react-redux'
import * as scale from 'd3-scale'
const MainSkin = ({getScore}) => {
    const data = useSelector(state=>state.skin.getScore)
    // const data = getScore
    useEffect(() => {
        
    },[])
    const Labels = ({ x, y, bandwidth, data }) => (
        
        data.map((value, index) => (
            <G key={index}>
               
            <Text
                key={index}
                x={x(index) + (bandwidth / 2)}
                y={y(value) - 20 }
                fontSize={14}
                fill={'black'}
                alignmentBaseline={ 'hanging' }
                textAnchor={'middle'}
            >
                 {value>1?`${value}`:''}
                </Text>
               
            </G>
        ))
    )
   
    return (
       
       
        <View style={{
            height: 200, flexDirection: 'row', justifyContent:'center',marginTop:40,marginHorizontal:10,
        }}>
            <BarChart
                style={{ flex:1}}
                contentInset={{ top: 40, bottom: 10 }}
                data={getScore?getScore:data}
                svg={{ fill: '#191A1A' }}
    
                spacingInner={0.7}
                spacing={0.2}
                gridMin={0}
            >
              
                <Labels />
              
            </BarChart>
            </View>
    )
}

export default MainSkin
