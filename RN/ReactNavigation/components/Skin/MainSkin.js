import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'
import { Text,G,Path,Rect } from 'react-native-svg'
import * as scale from 'd3-scale'
const MainSkin = () => {

    const data = [ 14, 80, 100, 55,25,20,5 ]
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
                 {`${value}점`}
                </Text>
               
            </G>
        ))
    )

    return (
       
       
        <View style={{
            height: 200, flexDirection: 'row', justifyContent:'center',marginTop:40,marginHorizontal:15,
        }}>
            <BarChart
                style={{ flex:1}}
                contentInset={{ top: 40, bottom: 10 }}
                data={data}
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
