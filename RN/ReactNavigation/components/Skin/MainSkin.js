import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Text,G,Path,Rect } from 'react-native-svg'

const MainSkin = () => {

    const data = [ 10, 5, 25, 15, 20 ]

    
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
       
       
            // <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
            //     <BarChart
            //         bandwidth={4}
            //         data={data}
            //         svg={{ fill: 'rgba(134, 65, 244, 0.8)' ,strokeWidth: 1,}}
            //         contentInset={{ top: 10, bottom: 10 }}
            //         spacingInner={0.7}
            //         // spacing={0.2}
            //         // gridMin={0}
            //     >   
            //         {/* <Grid direction={Grid.Direction.HORIZONTAL}/> */}
            //         <Labels/>
            //     </BarChart>
            // </View>
        <View style={{
            height: 200, flexDirection: 'row', justifyContent:'center',marginTop:40,marginHorizontal:15,
        }}>
            <BarChart
                style={{ flex:1}}
                contentInset={{ top: 40, bottom: 10 }}
                data={data}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
    
                spacingInner={0.7}
                spacing={0.2}
                gridMin={0}
            >
              
                <Labels/>
            </BarChart>
        </View>
    )
}

export default MainSkin
