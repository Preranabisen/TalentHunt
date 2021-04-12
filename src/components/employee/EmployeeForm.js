import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import MainHeader from '../MainHeader';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <MainHeader navigation={this.props.navigation} />
        <ScrollView style={styles.FormMainView}>

          <View style={styles.FormView}>
             <View>
                 <Text>Employee Form</Text>
                
             </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default EmployeeForm;

const styles = StyleSheet.create({
  FormMainView: {
    height: '100%',
    backgroundColor: '#add8e6',
    padding: 20,
    marginBottom: 100,

  },
  FormView: {
      backgroundColor: '#fff',
  }
});
