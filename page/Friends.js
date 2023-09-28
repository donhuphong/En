import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import { SearchBar } from '@rneui/themed';
// import faker from 'faker';
const windownWidth = Dimensions.get('window').width;
const FRIEND = () => {
  const [searchText, setSearchText] = useState();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      {/* header */}
      <View style={{ width: '100%', height: '100%', backgroundColor: '#F5F5F5' }}>

        <View style={{ width: '100%', height: '10%', flexDirection: 'row' }}>
          <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#4D8D6E', fontSize: 30 }}>wasty</Text>
          </View>
          <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
            <TextInput style={{
              height: '50%',
              width: '85%',
              marginLeft: 20,
              fontSize: 20,
              backgroundColor: '#EEEEEE',
              marginRight: 10,
              borderRadius: 100,
              paddingLeft: 20
            }} placeholder='searching...' />
          </View>
        </View>


        <View style={{ width: '100%', height: '90%' }}>
          <COLLECTION_F />
        </View>
      </View>
    </SafeAreaView>
  );
};

const COLLECTION_F = () => {
  return (
    <ScrollView>
      <View style={{ alignItems: 'center', width: '100%' }}>
        {friends.map((friend) => (
          <View key={friend.id} style={{
            padding: 10,
            width: '90%',
            height: 100,
            backgroundColor: 'white',
            marginBottom: 15,
            borderRadius: 20,
            shadowColor: '#171717',
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            flexDirection: 'row'
          }}>
            <View style={{ width: 70, borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 10 }}>
              <Image source={{ uri: friend.ava }} style={{
                resizeMode: 'stretch', // Options: 'cover', 'contain', 'stretch', 'center'
                width: '100%',
                height: '100%',
                borderRadius: 8
              }}></Image>
            </View>
            <View style={{ width: '90%' }}>
              <Text style={{ fontSize: 20, marginLeft: 20, color: '#4D8D6E' }}>{friend.name}</Text>
              <Text style={{ fontSize: 15, marginLeft: 20, color: 'gray' }}>{friend.date}</Text>
              <Text style={{ fontSize: 15, marginLeft: 20, color: 'gray' }}>{friend.phone}</Text>
              <Text style={{ fontSize: 15, marginLeft: 20, color: 'gray' }}>{friend.address}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};



const style = StyleSheet.create({
  search: {
    flex: '1',
    width: '60%',
    height: '7%',
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
    marginTop: 5,
    borderRadius: 100
  },
  body: {
    width: '100%',
    height: '93%',
    backgroundColor: '#F5F5F5',
    alignItems: 'center'
  },
  textSmall: {
    fontSize: 40,
    fontWeight: '800',
    color: 'white'
  },
  textInput: {
    height: '100%',
    width: '100%',
    flex: 1,
    marginLeft: 20,
    fontSize: 20,
    alignItems: 'flex-end'
  }
});

const friends = [
  {
    id: 1,
    name: 'Đỗ Như Phong',
    phone: '0937450071',
    address: 'Hồ Chí Minh',
    date: '19-02-1995',
    ava: 'https://images.viblo.asia/avatar/ff71c025-cbce-4433-8a13-3279ad1c9751.jpg',
  },
  {
    id: 2,
    name: 'Nguyễn Thị Mai',
    phone: '0987654321',
    address: 'Hà Nội',
    date: '10-12-1988',
  },
  {
    id: 3,
    name: 'Trần Văn Hùng',
    phone: '0978123456',
    address: 'Đà Nẵng',
    date: '05-07-1990',
  },
  {
    id: 4,
    name: 'Phạm Thị Ngọc',
    phone: '0961234567',
    address: 'Cần Thơ',
    date: '25-09-1992',
  },
  {
    id: 5,
    name: 'Lê Thị Anh',
    phone: '0909876543',
    address: 'Hải Phòng',
    date: '15-03-1985',
  },
  {
    id: 6,
    name: 'Vũ Văn Tùng',
    phone: '0912345678',
    address: 'Hà Tĩnh',
    date: '20-11-1982',
  },
  {
    id: 7,
    name: 'Hoàng Thị Linh',
    phone: '0987654321',
    address: 'Quảng Ninh',
    date: '08-04-1993',
  },
  {
    id: 8,
    name: 'Nguyễn Văn Nam',
    phone: '0978123456',
    address: 'Bình Dương',
    date: '12-06-1994',
  },
  {
    id: 9,
    name: 'Lê Thị Hà',
    phone: '0961234567',
    address: 'Vũng Tàu',
    date: '03-01-1987',
  },
  {
    id: 10,
    name: 'Trần Minh Tuấn',
    phone: '0909876543',
    address: 'Lâm Đồng',
    date: '21-07-1999',
  },
  {
    id: 11,
    name: 'Phan Văn Dũng',
    phone: '0912345678',
    address: 'Hưng Yên',
    date: '14-08-1981',
  },
  {
    id: 12,
    name: 'Hoàng Thị Loan',
    phone: '0987654321',
    address: 'Sóc Trăng',
    date: '07-05-1986',
  },
  {
    id: 13,
    name: 'Nguyễn Văn Phúc',
    phone: '0978123456',
    address: 'Bạc Liêu',
    date: '02-09-1997',
  },
  {
    id: 14,
    name: 'Lê Thị Mai',
    phone: '0961234567',
    address: 'Phú Yên',
    date: '18-12-1984',
  },
  {
    id: 15,
    name: 'Vũ Văn Hoàng',
    phone: '0909876543',
    address: 'Nghệ An',
    date: '29-10-1991',
  },
  {
    id: 16,
    name: 'Trần Thị Thanh',
    phone: '0912345678',
    address: 'Hải Dương',
    date: '06-06-1998',
  },
  {
    id: 17,
    name: 'Nguyễn Văn Hòa',
    phone: '0987654321',
    address: 'Kiên Giang',
    date: '17-03-1983',
  },
  {
    id: 18,
    name: 'Lê Thị Trang',
    phone: '0978123456',
    address: 'Quảng Bình',
    date: '23-11-1996',
  },
  {
    id: 19,
    name: 'Phạm Văn Toàn',
    phone: '0961234567',
    address: 'Thái Nguyên',
    date: '09-02-1989',
  },
  {
    id: 20,
    name: 'Trần Thị Hương',
    phone: '0909876543',
    address: 'Bắc Ninh',
    date: '31-07-1992',
  },
];

export default FRIEND;