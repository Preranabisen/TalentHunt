import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import MainHeader from '../MainHeader'

class Categories extends Component {
    render(){
        return(
          <View>
              <MainHeader navigation={this.props.navigation}/>
              <Text>All Categories</Text>
          </View>
        )
    }
}

export default Categories;