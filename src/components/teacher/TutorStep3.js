import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import MainHeader from '../MainHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalstyles} from '../globalStyles/FormStyles';

class TutorStep3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang1: false,
      selectedLang2: false,
      selectedLang3: false,
      selectedLang4: false,
      selectedLang5: false,
      selectedLang6: false,
      selectedLang7: false,
      selectedLang8: false,
      selectedLang9: false,
      selectedLang10: false,
      selectedLang11: false,
      selectedLang12: false,
      selectedLang13: false,
      selectedLang14: false,
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
            <View style={styles.Step3FormSection}>
              <Text style={styles.SegmentHeading}>
                You can select maximum 6 segments
              </Text>
              <View style={styles.SegmentView}>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang1}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang1: !this.state.selectedLang1})
                    }
                  />
                  <Text style={styles.CheckText}>I have reAcademic Enrichment</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang2}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang2: !this.state.selectedLang2})
                    }
                  />
                  <Text style={styles.CheckText}>Application / Enterprise Platform</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang3}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang3: !this.state.selectedLang3})
                    }
                  />
                  <Text style={styles.CheckText}>Basic Computer / Office</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang4}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang4: !this.state.selectedLang4})
                    }
                  />
                  <Text style={styles.CheckText}>Business Training</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang5}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang5: !this.state.selectedLang5})
                    }
                  />
                  <Text style={styles.CheckText}>CA CPT</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang6}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang6: !this.state.selectedLang6})
                    }
                  />
                  <Text style={styles.CheckText}>Certification</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang7}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang7: !this.state.selectedLang7})
                    }
                  />
                  <Text style={styles.CheckText}>Class 1 - 5</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang8}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang8: !this.state.selectedLang8})
                    }
                  />
                  <Text style={styles.CheckText}>Class 11 - 12</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang9}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang9: !this.state.selectedLang9})
                    }
                  />
                  <Text style={styles.CheckText}>English Speaking</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang10}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang10: !this.state.selectedLang10})
                    }
                  />
                  <Text style={styles.CheckText}>Graphics & Multimedia</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang11}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang11: !this.state.selectedLang11})
                    }
                  />
                  <Text style={styles.CheckText}>Health & Fitness</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang12}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang12: !this.state.selectedLang12})
                    }
                  />
                  <Text style={styles.CheckText}>Hobby Classes</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang13}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang13: !this.state.selectedLang13})
                    }
                  />
                  <Text style={styles.CheckText}>Languages</Text>
                </View>
                <View style={styles.CheckView}>
                  <CheckBox
                    center
                    checked={this.state.selectedLang14}
                    checkedIcon={
                      <View style={styles.checkSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    uncheckedIcon={
                      <View style={styles.UncheckSelectIcon}>
                        <Icon
                          name="checkmark-sharp"
                          size={15}
                          color="#fff"></Icon>
                      </View>
                    }
                    onPress={() =>
                      this.setState({selectedLang14: !this.state.selectedLang14})
                    }
                  />
                  <Text style={styles.CheckText}>Law Subjects</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={globalstyles.PreviousStepBtn}
                onPress={() => this.props.navigation.navigate('TutorStep2')}>
                <Text style={globalstyles.PreviousStepText}>previous</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={globalstyles.NextStepBtn}
                onPress={() => this.props.navigation.navigate('TutorStep4')}>
                <Text style={globalstyles.NextStepText}>Next Step</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TutorStep3;

const styles = StyleSheet.create({
  Step3FormSection: {
    borderRadius: 4,
    borderColor: '#746f6f24',
    borderWidth: 1,
    margin: 20,
  },
  SegmentHeading: {
    textAlign: 'center',
    borderBottomColor: '#746f6f24',
    borderBottomWidth: 1,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
  CheckView: {
    flexDirection: 'row',
  },
  CheckText: {
    color: '#575454de',
    fontSize: 16,
    marginLeft: -10,
    marginTop: 3,
  },
  SegmentView: {
    padding: 20,
  },
  UncheckSelectIcon: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#fff',
    borderColor: '#575454de',
    borderWidth: 1,
    padding: 2,
    marginLeft: -20,
    marginTop: -10
  },
  checkSelectIcon: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#4169e1',
    padding: 2,
    marginLeft: -20,
    marginTop: -10
  },
});
