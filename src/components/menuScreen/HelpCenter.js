import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import MainHeader from '../MainHeader'

class HelpCenter extends Component {
    render(){
        return(
          <View>
              <MainHeader navigation={this.props.navigation}/>
              <Text>Help Center</Text>
          </View>
        )
    }
}

export default HelpCenter;