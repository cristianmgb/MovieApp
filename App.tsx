import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import SplasScreen from './src/components/pages/SplashScreen';
import StackNavigation from './src/navigators/StackNavigation';

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const launchSplash = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    launchSplash();
  }, []);

  if (isLoading) {
    return <SplasScreen />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
