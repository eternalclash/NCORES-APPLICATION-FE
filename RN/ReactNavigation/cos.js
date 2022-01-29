{getBouman.oilScore[0]&&  <View style={styles.row2}>
<View style={{width:20,height:20,backgroundColor:"#323632",borderRadius:10}}></View>            
            <Text style={{ fontSize: 15, marginLeft: 10 }}>이번 주엔 {getBouman.oilScore[0].score}점이었어요</Text>
        </View>}
        {getBouman.oilScore[1]&& <View style={styles.row2}>
<View style={{width:20,height:20,backgroundColor:"#607060",borderRadius:10}}></View>            
<Text style={{fontSize:15,marginLeft:10}}>일주일 전엔 {getBouman.oilScore[1].score}점이었어요</Text>
        </View>}
        {getBouman.oilScore[2]&& <View style={styles.row2}>
<View style={{width:20,height:20,backgroundColor:"#8D998D",borderRadius:10}}></View>            
<Text style={{fontSize:15,marginLeft:10}}>한달 전엔 {getBouman.oilScore[2].score}점이었어요</Text>
        </View>}