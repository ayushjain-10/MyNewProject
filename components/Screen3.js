import { FlatList, View, Text, StatusBar } from 'react-native';
import bandData from '../metal.json';
import {uniq} from 'lodash';

// Extract unique styles from band data
const getUniqueStyles = () => {
    const styles = [];
    bandData.forEach(band => {
      band.style.split(',').forEach(style => {
        styles.push(style.trim());
      });
    });
    return uniq(styles);
  }
  
  // Get the unique styles
  const uniqueStyles = getUniqueStyles();

  const StyleItem = ({ style }) => (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 10 }}>
      <Text style={{ color: '#fff', fontSize: 18 }}>{style}</Text>
    </View>
  );
  
  // Use the StyleItem component in the FlatList
  const Screen3 = () => {
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <StatusBar barStyle="light-content" />
        <FlatList
          data={uniqueStyles}
          renderItem={({ item }) => <StyleItem style={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

export default Screen3;
