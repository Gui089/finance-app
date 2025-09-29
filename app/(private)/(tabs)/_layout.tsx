import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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
          backgroundColor:theme.colors.lightgreen,
          height:100,
          borderTopEndRadius:48,
          borderTopStartRadius:48,
        },
        tabBarActiveBackgroundColor: theme.colors.primary,
        tabBarItemStyle:{
          borderRadius:16,
        },
        tabBarIconStyle:{
          marginTop:10
        }
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({color}) => <Ionicons name="home-outline" size={28} color={theme.colors.void}/>,
        }}
      />
       <Tabs.Screen
        name="analysis/index"
        options={{
          title: '',
          tabBarIcon: ({color}) => <Ionicons name="analytics" size={28} color={theme.colors.void}/>,
        }}
      />
      <Tabs.Screen
        name="category/index"
        options={{
          title: '',
          tabBarIcon: ({color}) => <Ionicons name="transgender-outline" size={28} color={theme.colors.void}/>,
        }}
      />
      <Tabs.Screen
        name="transactions/index"
        options={{
          title: '',
          tabBarIcon: ({color}) => <MaterialIcons name="category" size={28} color={theme.colors.void} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: '',
           tabBarIcon: ({color}) => <Ionicons name="person-outline" size={28} color={theme.colors.void}/>,
        }}
      />
    </Tabs>
  );
}
