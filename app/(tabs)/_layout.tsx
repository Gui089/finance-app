import { useTheme } from '@shopify/restyle';
import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor:theme.colors.lightgreen  ,
          borderTopEndRadius:50,
          borderTopStartRadius:50
        }
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIconStyle:{
            backgroundColor:theme.colors.primary
          }
        }}
      />
       <Tabs.Screen
        options={{
          title: 'Home',
          tabBarItemStyle:{
            backgroundColor:'#000'
          }
        }}
      />
    </Tabs>
  );
}
