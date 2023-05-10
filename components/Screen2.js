import React from 'react';
import { View, Text } from 'react-native';
import bandData from '../metal.json'
import { StatusBar } from 'react-native';
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

const Screen2 = () => {
    const totalBands = bandData.length;
    const totalFans = bandData.reduce((sum, band) => sum + band.fans, 0) * 1000;
    const uniqueCountries = new Set(bandData.map(band => band.origin)).size;
    const activeBands = bandData.filter(band => band.split === '-').length;
    const splitBands = bandData.filter(band => band.split !== '-').length;

    return (
        <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar barStyle="light-content" />
            <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>Metal Stats</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Count:{totalBands}</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Fans: {totalFans.toLocaleString('en-US')}</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Countries: {uniqueCountries}</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Active: {activeBands}</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Split: {splitBands}</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Styles: {uniqueStyles.length}</Text>
        </View>
    );
}

export default Screen2;

