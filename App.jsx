import React, {useEffect} from 'react';
import {Text} from 'react-native';
import BootSplash from "react-native-bootsplash";
import StartingScreen from './src/screens/StartingScreen';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {

  useEffect(() => {
    const init = async () => {
      // yahan app startup ka kaam hota hai
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash hidden");
    });

  }, []);

  return <StackNavigation/>;
};

export default App;