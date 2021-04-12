import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import MainHeader from '../MainHeader';
import {Picker} from 'native-base';
import {globalstyles} from '../globalStyles/FormStyles';

class TutorStep6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birth: '',
      address: '',
      pincode: '',
      number: '',
      cardname: '',
      cardnumber: '',
      cvv: '',
      monthvalue: 'Month',
      yearvalue: 'Year',
    };
  }

  handleMonthChange = (value: string) => {
    this.setState({
      monthvalue: value,
    });
  };
  handleYearChange = (value: string) => {
    this.setState({
      yearvalue: value,
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
              <View>
                <Text style={globalstyles.FeesHeading}>Basic details</Text>
                <TextInput
                  style={globalstyles.FormInput}
                  value={this.state.name}
                  placeholder="Your full name"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={text => {
                    this.setState({name: text});
                  }}
                />
                <TextInput
                  style={globalstyles.FormInput}
                  value={this.state.birth}
                  placeholder="your date of birth"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={text => {
                    this.setState({birth: text});
                  }}
                />
                <TextInput
                  style={globalstyles.FormInput}
                  value={this.state.address}
                  placeholder="Communication address"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={text => {
                    this.setState({address: text});
                  }}
                />
                <TextInput
                  style={globalstyles.FormInput}
                  value={this.state.pincode}
                  placeholder="Your area pincode"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={text => {
                    this.setState({pincode: text});
                  }}
                />
                <TextInput
                  style={globalstyles.FormInput}
                  value={this.state.number}
                  placeholder="Your phone number"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={text => {
                    this.setState({number: text});
                  }}
                />
              </View>
              <View>
                <Text style={globalstyles.FeesHeading}>Payment Information</Text>
                <View>
                    <Image source={require('../../assets/images/creditCard.jpg')} style={styles.PayImage}></Image>
                    <Image source={require('../../assets/images/paypal.jpg')} style={styles.PayImage}></Image>
                </View>
                <View>
                  <Text>
                    <Text style={globalstyles.FormLabel}>Card holder name</Text>
                    <Text style={globalstyles.Required}> *</Text>
                  </Text>
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.cardname}
                    placeholder="Card holder name"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({cardname: text});
                    }}
                  />
                </View>
                <View>
                  <Text>
                    <Text style={globalstyles.FormLabel}>Card number</Text>
                    <Text style={globalstyles.Required}> *</Text>
                  </Text>
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.cardnumber}
                    placeholder="Card number"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({cardnumber: text});
                    }}
                  />
                </View>
                <View>
                  <Text>
                    <Text style={globalstyles.FormLabel}>CVV</Text>
                    <Text style={globalstyles.Required}> *</Text>
                  </Text>
                  <TextInput
                    style={globalstyles.FormInput}
                    value={this.state.cvv}
                    placeholder="CVV"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => {
                      this.setState({cvv: text});
                    }}
                  />
                </View>

                <View>
                  <Text>
                    <Text style={globalstyles.FormLabel}>Expiry Date</Text>
                    <Text style={globalstyles.Required}> *</Text>
                  </Text>
                  <View style={globalstyles.DropdownView}>
                    <View style={globalstyles.DropdownFormStyle}>
                      <Picker
                        note
                        mode="dropdown"
                        style={globalstyles.DropdownPicker}
                        selectedValue={this.state.monthvalue}
                        onValueChange={this.handleMonthChange}>
                        <Picker.Item label="Month" value="Month" />
                        <Picker.Item label="January" value="January" />
                        <Picker.Item label="February" value="February" />
                        <Picker.Item label="March" value="March" />
                        <Picker.Item label="April" value="April" />
                        <Picker.Item label="May" value="May" />
                        <Picker.Item label="June" value="June" />
                        <Picker.Item label="July" value="July" />
                        <Picker.Item label="August" value="August" />
                        <Picker.Item label="September" value="September" />
                        <Picker.Item label="Octomber" value="Octomber" />
                        <Picker.Item label="November" value="November" />
                        <Picker.Item label="December" value="December" />
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
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={globalstyles.PreviousStepBtn}
                onPress={() => this.props.navigation.navigate('TutorStep5')}>
                <Text style={globalstyles.PreviousStepText}>previous</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={globalstyles.NextStepBtn}
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={globalstyles.NextStepText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TutorStep6;

const styles = StyleSheet.create({
  PayImage: {
      width: 200,
      height: 100,
      borderColor: '#0000001a',
      borderWidth: 1,
      marginBottom: 10
  }
});
