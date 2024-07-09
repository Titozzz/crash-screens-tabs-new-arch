import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import Reanimated from 'react-native-reanimated';

// To toggle the bug, comment/uncomment the following line
const ReanimatedShadowedView = Reanimated.createAnimatedComponent(View);
// !The bug is not present when the above line is commented out

const TabNavigator = createBottomTabNavigator();
const Screen1 = () => null;
const Screen2 = () => null;

function App(): React.JSX.Element {
  return (
    <View style={{flexGrow: 1}}>
      <NavigationContainer>
        <TabNavigator.Navigator>
          <TabNavigator.Screen name="Tab1" component={Screen1} />
          <TabNavigator.Screen name="Tab2" component={Screen2} />
        </TabNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
