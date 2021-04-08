import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import MainHeader from '../MainHeader';

class Home extends Component {
  render() {
    return (
      <View>
        <MainHeader navigation={this.props.navigation} />
        <ScrollView style={styles.HomeView}>
          <View style={styles.HeadingView}>
            <Text style={styles.HomeHeading}>Looking to teach?</Text>
          </View>
          <View>
            <Text style={styles.HomeInfo}>
              Join Knowlarity.com and connect with more than 25 Lakh students on
              the platform. Create a strong profile and grow your network. From
              Maths to Music, from Abacus to Accounting, from Spanish to
              Sanskrit, from Computers to Chess, for tiny tots or for seasoned
              professionals - there are thousands of dedicated tutors on
              LearnPick for you to choose from.
            </Text>
            <Text style={styles.HomeInfo}>
              Live in a small town with very few good tutors? No problem, the
              best tutors from Mumbai, Delhi and Bangalore will be at your
              service through our world-class online video tutoring system!
            </Text>
          </View>
          <View style={styles.SignUpView}>
            <TouchableOpacity style={styles.SignUpBtn}>
              <Text style={styles.SignUpText}>Signup as a Tutor</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.howItWrkSteps}>
            <Text style={styles.stepNum}>1</Text>
            <Text style={styles.stepLine}></Text>
            <Text style={styles.stepNum}>2</Text>
            <Text style={styles.stepLine}></Text>
            <Text style={styles.stepNum}>3</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  HomeView: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 20,
  },
  HeadingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  HomeHeading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#212529',
  },
  HomeInfo: {
    color: '#111111',
    fontWeight: '300',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  SignUpBtn: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    borderWidth: 1,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  howItWrkSteps: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SignUpView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  SignUpText: {
    color: '#fff',
    fontSize: 18,
    padding: 10,
  },
  stepNum: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#afb9d2',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  stepLine: {
     borderColor: '#3b3b3b1f',
     borderWidth: 1,
     width: '26%'
  }
});
