import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import MainHeader from '../MainHeader';
import {Picker} from 'native-base';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Teacher',
    };
  }
  handleChange = (value: string) => {
    this.setState({
      value: value,
    });
  }
  handlePrint = () => {
    if (this.state.value == 'Teacher') {
      console.log(this.state.value);
      this.props.navigation.navigate('TutorSignup');
    }
    else if (this.state.value == 'Students') {
      console.log(this.state.value);
      this.props.navigation.navigate('StudentsSignup');
    }
    else if (this.state.value == 'Employer') {
      console.log(this.state.value);
      this.props.navigation.navigate('EmployerSignup');
    }
    else if (this.state.value == 'Employee') {
      console.log(this.state.value);
      this.props.navigation.navigate('EmployeeSignup');
    }
    else if (this.state.value == 'Institutes') {
      console.log(this.state.value);
      this.props.navigation.navigate('InstitutesSignup');
    }

  }
  render() {
    return (
      <View>
        <MainHeader navigation={this.props.navigation} />
        <ScrollView style={styles.HomeView}>
          <View style={styles.LoginImage}>
            <Image
              source={require('../../assets/images/login.jpg')}
              style={styles.LoginImage}></Image>
          </View>
          <View>
            <Text style={styles.HomeInfo}>
              India’s largest online platform with a network of most trusted
              local Tutors, students, Parents, Freelancers across India. Post
              and connect with the users in your locality.
            </Text>
          </View>
          <View style={styles.ChooseRegistration}>
            <Text style={styles.ChooseTitle}>
              Choose your registration type
            </Text>
            <View style={styles.DropdownView}>
              <View style={styles.DropdownStyle}>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.DropdownPicker}
                  selectedValue={this.state.value}
                  onValueChange={this.handleChange}>
                  <Picker.Item label="Teacher" value="Teacher" />
                  <Picker.Item label="Students/ Parents" value="Students" />
                  <Picker.Item label="Employer" value="Employer" />
                  <Picker.Item label="Employee" value="Employee" />
                  <Picker.Item label="Institute" value="Institute" />
                </Picker>
              </View>
            </View>
            <View style={styles.PostLinkBlck}>
              <TouchableOpacity style={styles.CustodrButton} onPress={this.handlePrint}>
                <Text style={styles.SignUpText}>Continue to signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  HomeView: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 20,
    marginBottom: 100,
  },
  LoginImage: {
    width: '100%',
    height: 160,
    marginBottom: 30,
  },
  HomeInfo: {
    color: '#111111',
    fontWeight: '300',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  ChooseRegistration: {
    padding: 22,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 50,
    marginBottom: 50,
  },
  ChooseTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 10,
    marginBottom: 10,
  },
  CustodrButton: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 4,
    width: 200,
  },
  SignUpText: {
    color: '#fff',
    fontSize: 18,
    padding: 10,
  },
  PostLinkBlck: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    marginTop: 30,
  },
  DropdownView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  },
  DropdownStyle: {
    width: 200,
    color: '#fff',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    borderRadius: 4,
    height: 46,
  },
  DropdownPicker: {
    color: '#fff',
    bottom: 5,
  }
});
