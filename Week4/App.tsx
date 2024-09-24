import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

const views = {
  1: <Page1 />,
  2: <Page2 />,
  3: <Page3 />,
  4: <Page4 />,
};

export default function App() {
  const [currentView, setCurrentView] = useState<keyof typeof views>(4);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>{views[currentView]}</View>
      <View style={{ flexDirection: 'row', flexShrink: 1 }}>
        {Array.from(Array(4)).map((value, index) => (
          <View style={{ width: '25%' }}>
            <Button
              title={`Page ${index + 1}`}
              onPress={() => setCurrentView((index + 1) as keyof typeof views)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
