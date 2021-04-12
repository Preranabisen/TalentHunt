import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MainHeader from '../MainHeader';
import {RadioButton} from 'react-native-paper';
import {globalstyles} from '../globalStyles/FormStyles';

const TutorStep2 = props => {
  const [checked, setChecked] = useState('');

  return (
    <View>
      <MainHeader navigation={props.navigation} />
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
            <Text style={styles.Step2Heading}>I am interested in</Text>
            <View style={styles.Step2View}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={styles.Step2Option}>Face to Face Tutoring</Text>
            </View>
            <View style={styles.Step2View}>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text style={styles.Step2Option}>Online Tutoring</Text>
            </View>
            <View style={styles.Step2View}>
              <RadioButton
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
              <Text style={styles.Step2Option}>
                Both Face to Face & Online Tutoring
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              style={globalstyles.PreviousStepBtn}
              onPress={() => props.navigation.navigate('TutorStep1')}>
              <Text style={globalstyles.PreviousStepText}>previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={globalstyles.NextStepBtn}
              onPress={() => props.navigation.navigate('TutorStep3')}>
              <Text style={globalstyles.NextStepText}>Next Step</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TutorStep2;

const styles = StyleSheet.create({

  Step2Heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 25,
  },
  Step2View: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  Step2Option: {
    marginTop: 8,
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
 
});
