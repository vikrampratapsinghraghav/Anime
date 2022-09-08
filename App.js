import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Airing from './components/Airing'
import Complete from './components/Complete'
import Upcoming from './components/Upcoming'
import AnimeDetail from './components/AnimeDetail'
import Favorites from './components/favorites'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();

const CompleteStack = createNativeStackNavigator();
const CompleteStackComponent = () => {
  return (
    
      <CompleteStack.Navigator>
        <CompleteStack.Screen
          name="CompleteScreen"
          component={Complete}
          options={{ headerShown: false }}
          // options={{ title: 'Welcome' }}
        />
        <CompleteStack.Screen name="AnimeDetail" component={AnimeDetail} options={{ headerShown: false }} />
      </CompleteStack.Navigator>
   
  );
};

const UpcomingStack = createNativeStackNavigator();
const UpcomingStackComponent = () => {
  return (
    
      <UpcomingStack.Navigator>
        <UpcomingStack.Screen
          name="UpcomingScreen"
          component={Upcoming}
          options={{ headerShown: false }}
  
        />
        <UpcomingStack.Screen name="AnimeDetail" component={AnimeDetail} options={{ headerShown: false }}  />
      </UpcomingStack.Navigator>
   
  );
};

const AiringStack = createNativeStackNavigator();
const AiringStackComponent = () => {
  return (
    
      <AiringStack.Navigator>
        <AiringStack.Screen
          name="AiringScreen"
          component={Airing}
          options={{ headerShown: false }}
  
        />
        <AiringStack.Screen name="AnimeDetail" component={AnimeDetail} options={{ headerShown: false }}  />
      </AiringStack.Navigator>
   
  );
};

function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarIconStyle: { display: "none" },
      tabBarLabelStyle: {fontSize: 14, paddingBottom: 8}
    }}
    >
       <Tab.Screen name="Complete" component={CompleteStackComponent} options={{ headerShown: false }} />
      <Tab.Screen name="Airing" component={AiringStackComponent} options={{ headerShown: false }} />
      <Tab.Screen name="Upcoming" component={UpcomingStackComponent} options={{ headerShown: false }} />
     
     
    </Tab.Navigator>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
     <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}


