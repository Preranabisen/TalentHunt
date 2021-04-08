import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import MainHeader from '../MainHeader'

class SuccessStories extends Component {
    render(){
        return(
          <View>
              <MainHeader navigation={this.props.navigation}/>
              <Text>Success Stories</Text>
          </View>
        )
    }
}

export default SuccessStories;