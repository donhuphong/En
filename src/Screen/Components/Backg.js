import React from 'react';
import { SafeAreaView, Dimensions, TextInput, Image, StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HOME_PAGE = () => {
  const windownWidth = Dimensions.get('window').width;
  const widthThree = windownWidth / 4;

  const widthSencond = windownWidth / 4;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5', alignItems: 'center' }}>
      {/* header */}
      <View style={{ width: '90%', height: '100%', backgroundColor: '#F5F5F5' }}>
        <View style={{ width: '100%', height: '15%', flexDirection: 'row', marginTop: 50 }}>
          <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Text style={{ color: '#4D8D6E', fontSize: 25 }}>Hi, Phong</Text>
            <Text style={{ color: '#4D8D6E', fontSize: 35, fontWeight: 'bold' }}>Let's wasty</Text>
          </View>
          <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Image source={require('../page/ava/avata.jpg')} resizeMode='stretch' style={{ width: widthThree, height: widthThree, borderRadius: 100 }} />
          </View>
        </View>

        <View style={{ width: '100%', height: '15%', justifyContent: 'center', alignItems: 'center' }}>
          <TextInput style={{
            height: '50%',
            width: '100%',
            marginLeft: 20,
            fontSize: 20,
            backgroundColor: '#EEEEEE',
            marginRight: 10,
            borderRadius: 100,
            paddingLeft: 20
          }} placeholder='searching...' />
        </View>
        {/* tab */}
        <View style={{ width: '100%', height: '20%', justifyContent: 'center' }}>
          <View style={{ width: '100%', height: '80%', flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', width: '25%', height: '70%' }}>
              <View style={style.tab}></View>
              <Text>Flight</Text>
            </View>
            <View style={{ alignItems: 'center', width: '25%', height: '70%' }}>
              <View style={style.tab}></View>
              <Text>Hotels</Text>
            </View>
            <View style={{ alignItems: 'center', width: '25%', height: '70%' }}>
              <View style={style.tab}></View>
              <Text>Taxi</Text>
            </View>
            <View style={{ alignItems: 'center', width: '25%', height: '70%' }}>
              <View style={style.tab}></View>
              <Text>More</Text>
            </View>
          </View>
        </View>

        {/* Poppular */}
        <View style={{ width: '100%', height: '35%' }}>
          <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', width: '50%', height: '70%' }}>
              <View style={style.tab}>

              <Text>Mô tả</Text>
              </View>
            </View>
            <View style={{ alignItems: 'center', width: '50%', height: '70%' }}>
              <View style={style.tab}>

              <Text>Mô tả</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


const style = StyleSheet.create({
  tab: {
    padding: 10,
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 20,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: 'row',
  }
});

export default HOME_PAGE;