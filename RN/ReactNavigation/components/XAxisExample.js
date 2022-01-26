
   
import React from 'react'
import { BarChart, XAxis, YAxis, LineChart,Grid } from 'react-native-svg-charts'
import { View } from 'react-native'
import * as scale from 'd3-scale'

class XAxisExample extends React.PureComponent {
    render() {

        const data = [ 50,1,50,50,50,50,50]

    return (
      <View style={{ height: 200,flex:1}}>
        <BarChart
          style={{ height:150, margin: 20,borderRadius:10}}
          data={ data }
          gridMin={ 0 }
          contentInset={{ top: 10, bottom: 10 }}
                svg={{ fill: 'rgb(134, 65, 244)' }}
                spacingInner={0.7}
                spacing={0.2}
        >
  
        </BarChart>
        <XAxis
                style={{
                      }}
          data={ data }
          formatLabel={ (value, index) => index }
          contentInset={{ left: 20, right: 20 }}
          svg={{ fontSize: 15, fill: 'black' }}
        />
      </View>
    )
      }

}

export default XAxisExample