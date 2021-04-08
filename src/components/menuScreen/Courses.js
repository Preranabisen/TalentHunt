import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import MainHeader from '../MainHeader'

class Courses extends Component {
    render(){
        return(
          <View>
              <MainHeader navigation={this.props.navigation}/>
              <Text>Courses</Text>
          </View>
        )
    }
}

export default Courses;