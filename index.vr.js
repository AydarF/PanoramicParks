import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class PanoramicParks extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('horseshoebend.jpg')}/>
		<View
		  style={{
		    width: 2,
		    flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            transform: [{translate: [0,0,-5]}],
            layoutOrigin: [0.5,0.5]			
		  }}
		>
		  <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}><Text style={{fontSize: 0.2, textAlign: 'center'}}>Grand Canyon</Text></View>
		  <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}><Text style={{fontSize: 0.2, textAlign: 'center'}}>Yosemite</Text></View>
		  <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}><Text style={{fontSize: 0.2, textAlign: 'center'}}>Bryce</Text></View>
		  <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}><Text style={{fontSize: 0.2, textAlign: 'center'}}>Yellowstown</Text></View>
		  <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}><Text style={{fontSize: 0.2, textAlign: 'center'}}>Acadia</Text></View>
		</View>
        
      </View>
    );
  }
};

AppRegistry.registerComponent('PanoramicParks', () => PanoramicParks);
