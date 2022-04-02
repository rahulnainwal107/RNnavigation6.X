/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {createContext} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';

import InitialStack from './src/navigation/InitialStack';
import {colors, strings} from './src/theme';

export const ThemeContext = createContext();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ThemeContext.Provider value={{colors, strings}}>
        <SafeAreaProvider>
          <NavigationContainer>
            <InitialStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeContext.Provider>
    </SafeAreaView>
  );
};

export default App;
