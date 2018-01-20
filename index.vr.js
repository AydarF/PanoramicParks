import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
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
          color: "#157"
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
          <VrButton onClick={() => this.props.parkClicked(1)}>
            <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.parks.GrandCanyon}</Text>
            </View>
          </VrButton>
          <VrButton onClick={() => this.props.parkClicked(2)}>
            <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.parks.Yosemite}</Text>
            </View>
          </VrButton>
          <VrButton onClick={() => this.props.parkClicked(3)}>
            <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.parks.Bryce}</Text>
            </View>
          </VrButton>
          <VrButton onClick={() => this.props.parkClicked(4)}>
            <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.parks.Yellowstone}</Text>
            </View>
          </VrButton>
          <VrButton onClick={() => this.props.parkClicked(5)}>
            <View style={{margin: 0.1, height: 0.3, backgroundColor: '#457'}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.parks.Acadia}</Text>
            </View>
          </VrButton>  
        </View>
      )
  }
}

export default class PanoramicParks extends React.Component {
  constructor() {
    super();
    this.state = {selectedPark: ""};
  }
  
  parkClicked(selection) {
    let newPark;
    switch(selection) {
      case 1:
        newPark = "Grand Canyon";
        break;
      case 2:
        newPark = "Yosemite";
        break;
      case 3:
        newPark = "Bryce";
        break;
      case 4:
        newPark = "Yellowstone";
        break;
      case 5:
        newPark = "Acadia";
        break;        
    }
    console.log(newPark);
    this.setState({selectedPark: newPark});
  }

  componentDidMount() {
    const random = Math.floor((Math.random() * 5) + 1);
    let randPark;
    switch(random) {
      case 1:
        randPark = "Grand Canyon";
        break;
      case 2:
        randPark = "Yosemite";
        break;
      case 3:
        randPark = "Bryce";
        break;
      case 4: 
        randPark = "Yellowstone";
        break;
      case 5: 
        randPark = "Acadia";
        break;       
    }
    this.setState({selectedPark: randPark});
  }

  render() {
    const parks = {
      GrandCanyon: 'Grand Canyon',
      Yosemite: 'Yosemite',
      Bryce: 'Bryce',
      Yellowstone: 'Yellowstone',
      Acadia: 'Acadia'
    }

    return (
      <View>
        <Pano source={asset(this.state.selectedPark + '.jpg')}/>
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
    		  <TextBoxes parkClicked={this.parkClicked.bind(this)} parks={parks}/>  
    		</View>     
      </View>
    );
  }
};

AppRegistry.registerComponent('PanoramicParks', () => PanoramicParks);
