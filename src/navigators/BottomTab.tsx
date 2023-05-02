/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/pages/Home';
import Search from '../components/pages/Search';
import WatchList from '../components/pages/WatchList';
import ItemBottomTab from '../components/atoms/ItemBottomTab';

const TabBottom = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <TabBottom.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
          backgroundColor: '#242A32',
          borderTopColor: '#0296E5',
        },
        headerShown: false,
        tabBarActiveTintColor: '#0296E5',
        tabBarInactiveTintColor: '#67686D',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <TabBottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: {marginBottom: 5},
          tabBarIcon: ({color}) => (
            <ItemBottomTab
              color={color}
              source={require('../assets/ic_home.png')}
              title="Home"
            />
          ),
        }}
      />
      <TabBottom.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabelStyle: {marginBottom: 5},
          tabBarIcon: ({color}) => (
            <ItemBottomTab
              color={color}
              source={require('../assets/ic_search.png')}
              title="Search"
            />
          ),
        }}
      />
      <TabBottom.Screen
        name="Watch List"
        component={WatchList}
        options={{
          tabBarLabelStyle: {marginBottom: 5},
          tabBarIcon: ({color}) => (
            <ItemBottomTab
              color={color}
              source={require('../assets/ic_watch_list.png')}
              title="Watch List"
            />
          ),
        }}
      />
    </TabBottom.Navigator>
  );
};

export default BottomTab;
