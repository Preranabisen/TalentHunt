import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import MainHeader from '../MainHeader';
var width = Dimensions.get('window').width - 40;
var width1 = Dimensions.get('window').width - 60;

console.log('testWidth', width/2)

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
         
          {/* <View style={styles.howItWrkSteps}>
            <Text style={styles.stepNum}>1</Text>
            <Text style={styles.stepLine}></Text>
            <Text style={styles.stepNum}>2</Text>
            <Text style={styles.stepLine}></Text>
            <Text style={styles.stepNum}>3</Text>
          </View> */}
          <View style={styles.HomeHowItWorks}>
            <View style={styles.HomeHowWorks}>
              <View style={styles.LazyImage}>
                <Image
                  source={require('../../assets/images/post_req.png')}></Image>
              </View>
              <Text style={styles.HowTitle}>
                Post your learning requirement
              </Text>
              <Text style={styles.HowDesc}>
                Want to learn something? Just enterdetails such as subject or
                category,locality and preference.
              </Text>
            </View>
            <View style={styles.HomeHowWorks}>
              <View style={styles.LazyImage}>
                <Image
                  source={require('../../assets/images/cust_resp.png')}></Image>
              </View>

              <Text style={styles.HowTitle}>Get customised responses</Text>
              <Text style={styles.HowDesc}>
                Based on your requirement you will startgetting customised
                responses from tutors andinstitutes.
              </Text>
            </View>
            <View style={styles.HomeHowWorks}>
              <View style={styles.LazyImage}>
                <Image
                  source={require('../../assets/images/compare.png')}></Image>
              </View>
              <Text style={styles.HowTitle}>Compare & select the best</Text>
              <Text style={styles.HowDesc}>
                Once you get responses, you cancompare them and choose the ones
                thatfit your learning requirement.
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.HomeInfo}>
              Knowlarity.com is India’s largest online platform with a network
              of most trusted local Tutors across India.Post and connect with
              the tutors in your locality.
            </Text>
          </View>
          <View style={styles.PostLinkBlck}>
            <TouchableOpacity style={styles.PostReqHwWrk}>
              <Text style={styles.SignUpText}>
                Post your learning requirement
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.PersonalHeading}>
              Find Personalised & 1-to-1 Classes with Online or nearby Tutors
            </Text>
            <View>
              <View style={{flexDirection: 'row', }}>
                <TouchableOpacity >
                  <Image
                    source={require('../../assets/images/menucool1.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>College Tutions</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/menucool2.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>Dance Classes</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/menucool3.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>Languages Classes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/menucool4.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>School Tutions</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/menucool5.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>College Tutions</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/menucool6.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>Study Abroad</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/menucool7.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>Study in India</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/menucool8.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>Other Exams</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/menucool9.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>Programming Languages</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/menucool10.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>IT Training</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/menucool11.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>Other IT Courses</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/menucool12.jpg')}
                    style={styles.GallaryImg}></Image>
                  <Text style={styles.RigText}>All Exam Coaching Classes</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.PostLinkBlck}>
              <TouchableOpacity style={styles.PostReqHwWrk}>
                <Text style={styles.SignUpText}>Browse all the courses</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginBottom: 40}}>
            <Text style={styles.CategoryHeading}>Popular Job Categories</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={[styles.CategoryBox, styles.RightSpacing]}>
                <Text style={styles.CategoryBoxText}>Accouting / Finance</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.CategoryBoxCount}>32</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.CategoryBox, styles.LeftSpacing]}>
                <Text style={styles.CategoryBoxText}>Automotive Jobs</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.CategoryBoxCount}>32</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={[styles.CategoryBox, styles.RightSpacing]}>
                <Text style={styles.CategoryBoxText}>
                  Construction / Facilities
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.CategoryBoxCount}>76</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.CategoryBox, styles.LeftSpacing]}>
                <Text style={styles.CategoryBoxText}>Education / Training</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.CategoryBoxCount}>31</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={[styles.CategoryBox, styles.RightSpacing]}>
                <Text style={styles.CategoryBoxText}>Healthcare</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.CategoryBoxCount}>32</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.CategoryBox, styles.LeftSpacing]}>
                <Text style={styles.CategoryBoxText}>
                  Restarant / Food Service
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.CategoryBoxCount}>67</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={[styles.CategoryBox, styles.RightSpacing]}>
                <Text style={styles.CategoryBoxText}>
                  Transportation / Logistics
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.CategoryBoxCount}>45</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.CategoryBox, styles.LeftSpacing]}>
                <Text style={styles.CategoryBoxText}>Telecommunication</Text>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.CategoryBoxCount}>96</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.PostLinkBlck}>
              <TouchableOpacity style={styles.PostReqHwWrk}>
                <Text style={styles.SignUpText}>Browse all the courses</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.HomeInfo}>
              
            </Text>
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
    marginBottom: 100,
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
    width: '26%',
  },
  HomeHowItWorks: {
    flex: 1,
  },
  HomeHowWorks: {
    marginTop: 20,
    marginBottom: 20,
  },
  LazyImage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  HowTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 10,
    marginBottom: 10,
  },
  HowDesc: {
    textAlign: 'center',
    fontSize: 18,
    color: '#111',
    marginBottom: 10,
  },
  PostReqHwWrk: {
    backgroundColor: '#006ef7',
    borderColor: '#006ef7',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 4,
  },
  PostLinkBlck: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    marginTop: 40,
  },
  PersonalHeading: {
    marginTop: 40,
    marginBottom: 60,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  GallaryImg: {
    height: 130,
    width: width / 2 ,
  },
  RigText: {
    padding: 10,
    position: 'absolute',
    left: 0,
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    opacity: 6,
    top: '40%',
  },
  CategoryBox: {
    backgroundColor: '#f7f7f7',
    borderRadius: 3,
    marginTop: 20,
    textAlign: 'center',
    padding: 20,
    height: 130,
    width: width1 / 2 ,
  },
  CategoryBoxText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
    fontSize: 15,
    fontWeight: '700',
  },
  CategoryBoxCount: {
    fontSize: 13,
    color: '#909090',
    borderRadius: 3,
    backgroundColor: '#0000000a',
    width: 40,
    textAlign: 'center',
    padding: 2,
    marginTop: 10,
  },
  CategoryHeading: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  LeftSpacing: {
    // marginLeft: 20
  },
  RightSpacing: {
    marginRight: 20
  }
});
