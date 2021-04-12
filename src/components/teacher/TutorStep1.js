import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {Picker} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MainHeader from '../MainHeader';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalstyles} from '../globalStyles/FormStyles';

class TutorStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      gender: '',
      dob: '',
      mobile: '',
      whatsApp: '',
      email: '',
      area: '',
      pincode: '',
      gendervalue: 'Select gender',
      cityvalue: 'Select city',
      address: '',
      selectedLang: false,
    };
  }
  handleGenderChange = (value: string) => {
    this.setState({
      gendervalue: value,
    });
  };
  handleCityChange = (value: string) => {
    this.setState({
      cityvalue: value,
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
            <View style={globalstyles.FormSection}>
              <Text style={globalstyles.FormHeading}>Personal Profile</Text>
              <Text style={globalstyles.RequiredText}>* Required field</Text>
              <View style={globalstyles.FormSubSection}>
                <View>
                  <Text>
                    <Text style={globalstyles.Required}>* </Text>
                    <Text style={globalstyles.FormLabel}>Name</Text>
                  </Text>
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.username}
                    placeholder="UserName"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({username: text});
                    }}
                  />
                </View>
                <View>
                  <Text>
                    <Text style={globalstyles.Required}>* </Text>
                    <Text style={globalstyles.FormLabel}>Gender</Text>
                  </Text>
                  <View style={globalstyles.DropdownStyle}>
                    <Picker
                      note
                      mode="dropdown"
                      style={globalstyles.DropdownPicker}
                      selectedValue={this.state.gendervalue}
                      onValueChange={this.handleGenderChange}>
                      <Picker.Item
                        label="Select gender"
                        value="Select gender"
                      />
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                    </Picker>
                  </View>
                </View>
                <View>
                  <Text>
                    <Text style={globalstyles.Required}>* </Text>
                    <Text style={globalstyles.FormLabel}>Year of birth</Text>
                  </Text>
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.dob}
                    placeholder="Type birth year"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({dob: text});
                    }}
                  />
                </View>
                <View>
                  <Text>
                    <Text style={globalstyles.Required}>* </Text>
                    <Text style={globalstyles.FormLabel}>Mobile</Text>
                  </Text>

                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.mobile}
                    placeholder="mobile"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({mobile: text});
                    }}
                  />
                </View>
                <View>
                  <Text style={globalstyles.FormLabel}>WhatsApp</Text>
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.whatsApp}
                    placeholder="Enter whatsApp number"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({whatsApp: text});
                    }}
                  />
                </View>
                <View style={globalstyles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang}
                    checkedIcon={
                      <View style={globalstyles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={globalstyles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang: !this.state.selectedLang})
                    }
                  />
                  <Text style={globalstyles.CheckText}>
                    Same as mobile number
                  </Text>
                </View>

                <View>
                  <Text>
                    <Text style={globalstyles.Required}>* </Text>
                    <Text style={globalstyles.FormLabel}>Email</Text>
                  </Text>
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.email}
                    placeholder="Enter email"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({email: text});
                    }}
                  />
                </View>
                <View>
                  <Text>
                    <Text style={globalstyles.Required}>* </Text>
                    <Text style={globalstyles.FormLabel}>City</Text>
                  </Text>
                  <View style={globalstyles.DropdownStyle}>
                    <Picker
                      note
                      mode="dropdown"
                      style={globalstyles.DropdownPicker}
                      selectedValue={this.state.cityvalue}
                      onValueChange={this.handleCityChange}>
                      <Picker.Item label="Select city" value="Select city" />
                      <Picker.Item label="Delhi" value="Delhi" />
                      <Picker.Item label="Pune" value="Pune" />
                      <Picker.Item label="Mumbai" value="Mumbai" />
                      <Picker.Item label="Nagpur" value="Nagpur" />
                      <Picker.Item label="Agra" value="Agra" />
                      <Picker.Item label="Chennai" value="Chennai" />
                    </Picker>
                  </View>
                </View>
                <View>
                  <Text>
                    <Text style={globalstyles.Required}>* </Text>
                    <Text style={globalstyles.FormLabel}>Area</Text>
                  </Text>
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.area}
                    placeholder="Enter area"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({area: text});
                    }}
                  />
                  <Text style={globalstyles.InfoText}>
                    Mention prefered teaching locations (Ex: Kalkaji)
                  </Text>
                </View>
                <View>
                  <Text>
                    <Text style={globalstyles.Required}>* </Text>
                    <Text style={globalstyles.FormLabel}>Pincode</Text>
                  </Text>
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.pincode}
                    placeholder="Enter pin code"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({pincode: text});
                    }}
                  />
                </View>
                <View>
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.address}
                    placeholder="Type your full address"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({address: text});
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={globalstyles.NextStepBtn}
                onPress={() => this.props.navigation.navigate('TutorStep2')}>
                <Text style={globalstyles.NextStepText}>Next Step</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TutorStep1;
