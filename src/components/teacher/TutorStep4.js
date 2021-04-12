import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import MainHeader from '../MainHeader';
import {globalstyles} from '../globalStyles/FormStyles';

class TutorStep4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: '',
    };
  }
  render() {
    return (
      <View>
        <MainHeader navigation={this.props.navigation} />
        <ScrollView style={globalstyles.FormMainView}>
          <View style={globalstyles.FormView}>
          <View style={globalstyles.FormUpperHeading}>
              <Text style={globalstyles.FormFirstHeading}>
                Let us know more about your self
              </Text>
              <Text style={globalstyles.FormSubHeading}>
                Fill all form field to go to next step
              </Text>
            </View>
            <View style={globalstyles.StepFormSection}>
              <Text style={globalstyles.FeesHeading}>Choose your fees</Text>
              <View>
                <Text>
                  <Text style={globalstyles.Required}>* </Text>
                  <Text style={globalstyles.FormLabel}>My Fees: INR</Text>
                </Text>
                <TextInput
                  style={globalstyles.FormInput}
                  value={this.state.rate}
                  placeholder="Rate/ Hour"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={text => {
                    this.setState({rate: text});
                  }}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={globalstyles.PreviousStepBtn}
                onPress={() => this.props.navigation.navigate('TutorStep3')}>
                <Text style={globalstyles.PreviousStepText}>previous</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={globalstyles.NextStepBtn}
                onPress={() => this.props.navigation.navigate('TutorStep5')}>
                <Text style={globalstyles.NextStepText}>Next Step</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TutorStep4;
