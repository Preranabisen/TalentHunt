import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainHeader from '../MainHeader';

class TutorSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      authflag: 1,
      toggleCheckBox: false,
    };
  }
  handleSubmit = () => {
    if (this.state.username == 'admin@gmail.com' && this.state.password == '1234') {
        this.props.navigation.navigate('TutorForm');
    } else {
        alert('Incorrect Credntials!');
    }
}
  render() {
    return (
      <View>
        <MainHeader navigation={this.props.navigation} />
        <ScrollView style={styles.HomeView}>
          <View>
            <Text style={styles.RegistrationTitle}>Tutor Registraion</Text>
            <View style={styles.RegistrationView}>
              <TouchableOpacity style={styles.FacebookBtn}>
                  <Icon name="facebook" size={32} color="#fff" style={{marginRight: 10}}></Icon>
                <Text style={styles.FacebookText}>Sign in with Facebook</Text>
              </TouchableOpacity>
              <View>
                <TextInput
                  style={styles.input}
                  value={this.state.username}
                  placeholder="Email"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={text => {
                    this.setState({username: text});
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#D3D3D3"
                  value={this.state.password}
                  onChangeText={text => {
                    this.setState({password: text});
                  }}
                />
              </View>
              <TouchableOpacity style={styles.SubmitBtn} onPress={this.handleSubmit}>
                <Text style={styles.SubmitText}>SUBMIT</Text>
              </TouchableOpacity>
              <View style={styles.CheckView}>
                <CheckBox
                  disabled={false}
                  value={this.state.toggleCheckBox}
                  onValueChange={newValue => {
                      this.setState({toggleCheckBox: newValue})
                  }}
                />
                <Text style={styles.CheckText}>I have read and agree to the Terms and Conditions and Privacy Policy</Text>
              </View>
              <View>
                  <Text style={styles.ForgetText}>Forgot Password?</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TutorSignup;

const styles = StyleSheet.create({
  HomeView: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 20,
    marginBottom: 100,
  },
  input: {
    borderColor: '#0000001a',
    borderWidth: 1,
    height: 46,
    fontSize: 22,
    marginBottom: 20,
    paddingLeft: 20,
    borderRadius: 4,
  },
  RegistrationTitle: {
    fontSize: 25,
    color: '#2C3E50',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  RegistrationView: {
    borderRadius: 4,
    borderColor: '#746f6f24',
    borderWidth: 1,
    padding: 32,
  },
  FacebookBtn: {
    backgroundColor: '#4169e1',
    padding: 9,
    borderRadius: 4,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  FacebookText: {
    fontWeight: '100',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  SubmitBtn: {
    backgroundColor: '#3f51b5',
    padding: 9,
    borderRadius: 4,
    marginBottom: 30,
  },
  SubmitText: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  CheckView: {
      flexDirection: 'row',
      marginBottom: 20
  },
  CheckText: {
    color: '#575454de',
    fontSize: 16
  },
  ForgetText: {
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: '700'
  }
});
