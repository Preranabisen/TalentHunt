import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import MainHeader from '../MainHeader';

class TutorForm extends Component {
  render() {
    return (
      <View>
        <MainHeader navigation={this.props.navigation} />
        <ScrollView style={styles.FormMainView}>

          <View style={styles.FormView}>
             <View>
                 <Text>Let us know more about your self</Text>
                 <Text>Fill all form field to go to next step</Text>
             </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TutorForm;

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
