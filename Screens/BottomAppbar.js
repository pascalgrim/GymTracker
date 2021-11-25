import * as React from 'react';
import { View , StyleSheet} from 'react-native';
import { BottomNavigation, FAB, Text } from 'react-native-paper';
import { Colors } from '../colors';
import myTheme from '../myTheme';
import PieChart from '../components/PieChart';


const HomeRoute = () => <PieChart style={{flex:1}}/>;

const AlbumsRoute = () => <FAB
style={styles.fab}
big
icon="plus"
onPress={() => console.log('Pressed')}
/>;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomAppbar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'albums', title: 'Stats', icon: 'poll' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      theme={myTheme}
      barStyle={{ backgroundColor: Colors.bg }}
      shifting={true}
    />
    
  );
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    left:150,
    bottom: 20,
  },
})
export default BottomAppbar;