import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import MainHeader from '../MainHeader'

class WriteReview extends Component {
    render(){
        return(
          <View>
              <MainHeader navigation={this.props.navigation}/>
              <Text>Write A Review</Text>
          </View>
        )
    }
}

export default WriteReview;