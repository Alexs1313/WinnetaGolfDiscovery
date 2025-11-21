import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import WinnetaGolfDiscoveryStack from './WinnetaGolfDiscovery/WinnetaGolfDiscoveryNavigation/WinnetaGolfDiscoveryStack';
import WinnetaGolfDiscoveryLoader from './WinnetaGolfDiscovery/WinnetaGolfDiscoveryComponents/WinnetaGolfDiscoveryLoader';

const App = () => {
  const [isVisibleLoader, setIsVisibleLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleLoader(true);
    }, 5500);
  }, []);

  return (
    <NavigationContainer>
      {isVisibleLoader ? (
        <WinnetaGolfDiscoveryStack />
      ) : (
        <WinnetaGolfDiscoveryLoader />
      )}
    </NavigationContainer>
  );
};

export default App;
