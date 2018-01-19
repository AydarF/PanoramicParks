import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

class Title extends React.Component {
  constructor() {
    super();
    this.state = {title: 'Panoramic Parks'};
  }
  render() {
    return (
      <View>
        <Text style={{
          fontSize: 0.2,
          textAlign: 'center',
          color: "#457"
        }}>
          {this.state.title}
        </Text>
      </View>
    )
  }
} 

class TextBoxes extends React.Component {
  render () {
    return (
        <View>
          <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}><Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.parks.GrandCanyon}</Text></View>
          <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}><Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.parks.Yosemite}</Text></View>
          <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}><Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.parks.Bryce}</Text></View>
          <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}><Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.parks.Yellowstown}</Text></View>
          <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}><Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.parks.Acadia}</Text></View>  
        </View>
      )
  }
}

export default class PanoramicParks extends React.Component {
  render() {
    const parks = {
      GrandCanyon: 'Grand Canyon',
      Yosemite: 'Yosemite',
      Bryce: 'Bryce',
      Yellowstown: 'Yellowstown',
      Acadia: 'Acadia'
    }

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
    		  }}>
          <Title />
    		  <TextBoxes parks ={parks}/>  
    		</View>     
      </View>
    );
  }
};

AppRegistry.registerComponent('PanoramicParks', () => PanoramicParks);
