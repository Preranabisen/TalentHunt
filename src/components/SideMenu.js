import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Drawer} from 'react-native-paper';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';


import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export function SideMenu(props) {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props} style={styles.DrawerView}>
        <View style={styles.DrawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <EntypoIcon name="home" color={color} size={size} />
              )}
              label="Home"
              labelStyle={styles.MenuItem}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FoundationIcon
                name="video" color={color} size={size} />
              )}
              label="Courses"
              labelStyle={styles.MenuItem}
              onPress={() => {
                props.navigation.navigate('Courses');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesomeIcon
                name="book" color={color} size={size} />
              )}
              label="Success Stories"
              labelStyle={styles.MenuItem}
              onPress={() => {
                props.navigation.navigate('SuccessStories');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesomeIcon
                name="shopping-cart" color={color} size={size} />
              )}
              label="Write A review"
              labelStyle={styles.MenuItem}
              onPress={() => {
                props.navigation.navigate('WriteReview');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesomeIcon
                name="pie-chart" color={color} size={size} />
              )}
              label="All categories"
              labelStyle={styles.MenuItem}
              onPress={() => {
                props.navigation.navigate('Categories');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontistoIcon
                name="player-settings" color={color} size={size} />
              )}
              label="Help Center"
              labelStyle={styles.MenuItem}
              onPress={() => {
                props.navigation.navigate('HelpCenter');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  ProfileName: {
    color: '#fff',
    fontSize: 24,
  },
  DrawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
  DrawerView: {
    marginTop: -7,
  },
  Account: {
    color: '#fff',
    fontFamily: 'Roboto-Regular'
  },
  Balance: {
    color: '#fff',
  },
  MenuItem: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Roboto-Medium'
  }
});
