import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import MainHeader from '../MainHeader';

class StudentsForm extends Component {
  render() {
    return (
      <View>
        <MainHeader navigation={this.props.navigation} />
        <ScrollView style={styles.FormMainView}>

          <View style={styles.FormView}>
             <View>
                 <Text>Student Form</Text>
                
             </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default StudentsForm;

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
