import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MainHeader from '../MainHeader';
import {Picker} from 'native-base';
import {globalstyles} from '../globalStyles/FormStyles';

class TutorStep5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qualificationvalue: 'Qualification',
      yearvalue: 'Year',
      institute: '',
      experiencevalue: 'Select Experience',
      tutorExp: '',
      tutorApproch: '',
    };
  }
  handleQualificationChange = (value: string) => {
    this.setState({
      qualificationvalue: value,
    });
  };
  handleYearChange = (value: string) => {
    this.setState({
      yearvalue: value,
    });
  };
  handleExperienceChange = (value: string) => {
    this.setState({
      experiencevalue: value,
    });
  };
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
              <Text style={globalstyles.FeesHeading}>Profile details</Text>
              <View>
                <Text>
                  <Text style={globalstyles.Required}>* </Text>
                  <Text style={globalstyles.FormLabel}>Education:</Text>
                </Text>
                <View style={globalstyles.DropdownView}>
                  <View style={globalstyles.DropdownFormStyle}>
                    <Picker
                      note
                      mode="dropdown"
                      style={globalstyles.DropdownPicker}
                      selectedValue={this.state.qualificationvalue}
                      onValueChange={this.handleQualificationChange}>
                      <Picker.Item
                        label="Qualification"
                        value="Qualification"
                      />
                      <Picker.Item label="B.E" value="B.E" />
                      <Picker.Item label="B.COM" value="B.COM" />
                      <Picker.Item label="B.A" value="B.A" />
                      <Picker.Item label="M.COM" value="M.COM" />
                      <Picker.Item label="B.Sc" value="B.Sc" />
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
                  </View>
                  <View style={globalstyles.DropdownYearStyle}>
                    <Picker
                      note
                      mode="dropdown"
                      style={globalstyles.DropdownPicker}
                      selectedValue={this.state.yearvalue}
                      onValueChange={this.handleYearChange}>
                      <Picker.Item label="Year" value="Year" />
                      <Picker.Item label="2021" value="2021" />
                      <Picker.Item label="2020" value="2020" />
                      <Picker.Item label="2019" value="2019" />
                      <Picker.Item label="2018" value="2018" />
                      <Picker.Item label="2017" value="2017" />
                      <Picker.Item label="2016" value="2016" />
                    </Picker>
                  </View>
                </View>
                <TextInput
                  style={globalstyles.FormInput}
                  value={this.state.institute}
                  placeholder="Institute Name"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={text => {
                    this.setState({institute: text});
                  }}
                />
                <View>
                  <Text>
                    <Text style={globalstyles.Required}>* </Text>
                    <Text style={globalstyles.FormLabel}>Tutoring experience:</Text>
                  </Text>
                  <View style={globalstyles.DropdownExpStyle}>
                    <Picker
                      note
                      mode="dropdown"
                      style={globalstyles.DropdownPicker}
                      selectedValue={this.state.experiencevalue}
                      onValueChange={this.handleExperienceChange}>
                      <Picker.Item
                        label="Select Experience"
                        value="Select Experience"
                      />
                      <Picker.Item label="No previous experience" value="No previous experience" />
                      <Picker.Item label="1 Years" value="1 Years" />
                      <Picker.Item label="2 Years" value="2 Years" />
                      <Picker.Item label="3 Years" value="3 Years" />
                      <Picker.Item label="4 Years" value="4 Years" />
                      <Picker.Item label="5 Years" value="5 Years" />
                      <Picker.Item label="6 Years" value="6 Years" />
                    </Picker>
                  </View>
                </View>
                <View>
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.tutorExp}
                    placeholder="Tutoring Experience details"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({tutorExp: text});
                    }}
                  />
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.tutorApproch}
                    placeholder="Tutoring Approch details"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({tutorApproch: text});
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={globalstyles.PreviousStepBtn}
                onPress={() => this.props.navigation.navigate('TutorStep4')}>
                <Text style={globalstyles.PreviousStepText}>previous</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={globalstyles.NextStepBtn}
                onPress={() => this.props.navigation.navigate('TutorStep6')}>
                <Text style={globalstyles.NextStepText}>Next Step</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TutorStep5;

