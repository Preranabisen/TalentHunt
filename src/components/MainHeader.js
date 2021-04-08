import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <View style={styles.HeaderMenu}>
        <View style={styles.HeaderMenuIcon}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <Ionicon name="menu-sharp" size={32} color="#000"></Ionicon>
            </TouchableOpacity>
        </View>
        <View style={styles.HeaderMenuTitle}>
            <Image source={require('../assets/images/logo.png')} style={styles.LogoImage}></Image>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HeaderMenu: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    borderColor: '#0000001a',
    borderWidth: 1
  },
  HeaderMenuIcon: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  HeaderMenuTitle: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  HeaderTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto-Medium',
  },
  
  LogoImage: {
   width: 160,
   height: 35,
  },
});

export default MainHeader;
