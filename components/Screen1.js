import React from 'react';
import { FlatList, View, Text } from 'react-native';
import bandData from '../metal.json'
import { StatusBar } from 'react-native';



const formatFans = (num) => {
    return (num * 1000).toLocaleString('en-US');
};

const BandItem = ({ band }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <View>
            <Text style={{ color: band.split === '-' ? '#fff' : '#666', textDecorationLine: band.split === '-' ? 'none' : 'line-through', fontSize: 18, fontWeight: band.split === '-' ? 'bold' : 'normal' }}>{band.band_name}</Text>
            <Text style={{ color: '#fff', fontSize: 12 }}>Formed: {band.formed}</Text>
        </View>
        <View>
            <Text style={{ color: '#999', fontSize: 18 }}>Origin: {band.origin}</Text>
            <Text style={{ color: '#fff', fontSize: 12 }}>Fans: {formatFans(band.fans)}</Text>
        </View>
    </View>
);


const Screen1 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
            <StatusBar barStyle="light-content" />
            <FlatList
                data={bandData}
                renderItem={({ item }) => <BandItem band={item} />}
                keyExtractor={(item) => item.ID.toString()}
            />
        </View>
    );
}

export default Screen1;




