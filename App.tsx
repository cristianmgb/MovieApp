import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SplasScreen from './src/components/pages/SplashScreen';

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
    <SafeAreaView>
      <View>
        <Text>Hola mundo</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
