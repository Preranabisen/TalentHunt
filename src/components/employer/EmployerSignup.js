import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainHeader from '../MainHeader'

class EmployerSignup extends Component {
    render(){
        return(
          <View>
              <MainHeader navigation={this.props.navigation}/>
              <ScrollView>
                  <View>
                      <Text>Employer Registraion</Text>
                      <View>
                         <TouchableOpacity>
                             <Text></Text>
                         </TouchableOpacity>
                      </View>
                  </View>
              </ScrollView>
          </View>
        )
    }
}

export default EmployerSignup;