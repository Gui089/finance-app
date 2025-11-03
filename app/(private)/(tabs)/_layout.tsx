import { AnimatedTabIcon } from "@/src/components/ animatedTabIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@shopify/restyle";
import { Tabs } from "expo-router";
import React from "react";


export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.lightgreen,
          height: 90,
          borderTopEndRadius: 32,
          borderTopStartRadius: 32,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          alignItems:'center',
          paddingTop:15
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <AnimatedTabIcon
              focused={focused}
              icon={<Ionicons name="home-outline" size={26} color={ focused ? theme.colors.fencegreen : theme.colors.void} />}
              activeColor={theme.colors.main}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="analysis/index"
        options={{
          title: "Análise",
          tabBarIcon: ({ focused }) => (
            <AnimatedTabIcon
              focused={focused}
              icon={<Ionicons name="analytics-sharp" size={26} color={ focused ? theme.colors.fencegreen : theme.colors.void} />}
              activeColor={theme.colors.main}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="category/index"
        options={{
          title: "Categorias",
          tabBarIcon: ({ focused }) => (
            <AnimatedTabIcon
              focused={focused}
              icon={<Ionicons name="transgender-outline" size={26} color={ focused ? theme.colors.fencegreen : theme.colors.void} />}
              activeColor={theme.colors.main}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions/index"
        options={{
          title: "Transações",
          tabBarIcon: ({ focused }) => (
            <AnimatedTabIcon
              focused={focused}
              icon={<MaterialIcons name="category" size={26} color={ focused ? theme.colors.fencegreen : theme.colors.void} />}
             activeColor={theme.colors.main}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <AnimatedTabIcon
              focused={focused}
              icon={<Ionicons name="person-outline" size={26}color={ focused ? theme.colors.fencegreen : theme.colors.void} />}
              activeColor={theme.colors.main}
            />
          ),
        }}
      />
    </Tabs>
  );
}
