import React, { useState } from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import { View, Button } from 'react-native';

const views = {
  1: <Page1 />,
  2: <Page2 />,
  3: <Page3 />,
  4: <Page4 />,
  5: <Page5 />,
  6: <Page6 />,
  7: <Page7 />,
  8: <Page8 />,
};

const YourApp = () => {
  const [tab, setTab] = useState<keyof typeof views>(8);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        {views[tab]}
      </View>
      <View
        style={{
          display: 'flex',
          flexWrap:"wrap",
          flexDirection: 'row',
          justifyContent:"center",
          position: 'absolute',
          gap: 8,
          bottom: 4,
          left: 0,
          right: 4,
        }}>
        {showMenu && Array.from(Array(8).keys()).map((item, index) => (
          <Button
            title={`Page ${item + 1}`}
            key={index}
            onPress={() => {
              setTab((index + 1) as keyof typeof views);
              setShowMenu(false)
            }}
          />
        ))}

        {!showMenu && <Button title="menu" onPress={() => setShowMenu(true)}/>}
      </View>
    </>
  );
};

export default YourApp;
