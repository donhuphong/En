import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import { SearchBar } from '@rneui/themed';
// import faker from 'faker';
const windownWidth = Dimensions.get('window').width;
const NOTIFICATION = () => {
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
          <LIST_NOTI />
        </View>
      </View>
    </SafeAreaView>
  );
};

const LIST_NOTI = () => {
  return (
    <ScrollView>
      <View style={{ alignItems: 'center', width: '100%' }}>
        {notilist.map((noti) => (
          <View key={noti.id} style={{
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
            <View style={{ width: 70, borderWidth: 1, backgroundColor: noti.color, borderRadius: 10 }}>
              {/* <Image source={{ uri: friend.ava }} style={{
                resizeMode: 'stretch', // Options: 'cover', 'contain', 'stretch', 'center'
                width: '100%',
                height: '100%',
                borderRadius: 8
              }}></Image> */}
            </View>
            <View style={{ width: '90%' }}>
              <Text style={{ width: '80%', fontSize: 20, marginLeft: 20, color: '#4D8D6E' }}>{noti.title}</Text>
              <Text style={{ width: '80%', fontSize: 15, marginLeft: 20, color: 'gray' }}>{noti.date}</Text>
              <Text style={{ width: '80%', fontSize: 15, marginLeft: 20, color: 'gray' }}>{noti.context}</Text>
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

const notilist = [
  {
    title: "Thông báo về thời tiết",
    context: "Dự báo thời tiết cho ngày mai là mưa, hãy chuẩn bị ô dù.",
    date: "16:30 19-20-2022",
    lag: "weather",
    color: 'pink'
  },
  {
    title: "Sự kiện sắp tới",
    context: "Sự kiện quan trọng sắp diễn ra vào cuối tuần, đừng quên đặt lịch!",
    date: "12:45 02-10-2022",
    lag: "event",
    color: 'yellow'
  },
  {
    title: "Quên một việc quan trọng",
    context: "Đừng quên nộp bài tập lúc 5 giờ chiều hôm nay.",
    date: "09:15 15-05-2022",
    lag: "reminder",
    color: 'green'
  },
  {
    title: "Thông báo về thời tiết",
    context: "Dự báo thời tiết cho cuối tuần là nắng, hãy dự định các hoạt động ngoài trời.",
    date: "14:20 23-07-2022",
    lag: "weather",
    color: 'purple'
  },
  {
    title: "Sự kiện quan trọng",
    context: "Hôm nay có cuộc họp quan trọng vào lúc 2 giờ chiều.",
    date: "10:55 08-11-2022",
    lag: "event",
    color: 'pink'
  },
  {
    title: "Quên mua quà sinh nhật",
    context: "Sinh nhật bạn là vào ngày mai, hãy đến cửa hàng mua quà ngay bây giờ!",
    date: "20:10 30-09-2022",
    lag: "reminder",
    color: 'purple'
  },
  {
    title: "Thông báo về thời tiết",
    context: "Dự báo thời tiết cho tuần sau là lạnh, hãy chuẩn bị áo ấm.",
    date: "07:30 12-03-2022",
    lag: "weather",
    color: 'green'
  },
  {
    title: "Sự kiện sắp tới",
    context: "Sự kiện đặc biệt sắp diễn ra vào tháng sau, đừng bỏ lỡ!",
    date: "18:25 25-06-2022",
    lag: "event",
    color: 'green'
  },
  {
    title: "Quên một việc quan trọng",
    context: "Hãy đặt lịch hẹn với bác sĩ cho cuộc kiểm tra sức khỏe hàng năm.",
    date: "13:40 05-09-2022",
    lag: "reminder",
    color: 'red'
  },
  {
    title: "Thông báo về thời tiết",
    context: "Dự báo thời tiết cho ngày mai là mưa, hãy chuẩn bị ô dù.",
    date: "11:15 17-12-2022",
    lag: "weather",
    color: 'pink'
  },
  {
    title: "Sự kiện quan trọng",
    context: "Cuộc họp quan trọng với khách hàng vào lúc 10 giờ sáng ngày mai.",
    date: "08:50 28-04-2022",
    lag: "event",
    color: 'pink'
  },
  {
    title: "Quên mua quà sinh nhật",
    context: "Sinh nhật bạn là vào ngày mai, hãy đến cửa hàng mua quà ngay bây giờ!",
    date: "15:05 10-08-2022",
    lag: "reminder",
    color: 'green'
  },
  {
    title: "Thông báo về thời tiết",
    context: "Dự báo thời tiết cho cuối tuần là nắng, hãy dự định các hoạt động ngoài trời.",
    date: "22:00 21-01-2022",
    lag: "weather",
    color: 'red'
  },
  {
    title: "Sự kiện sắp tới",
    context: "Sự kiện đặc biệt sắp diễn ra vào tháng sau, đừng bỏ lỡ!",
    date: "17:35 03-07-2022",
    lag: "event",
    color: 'green'
  },
  {
    title: "Quên một việc quan trọng",
    context: "Hãy đặt lịch hẹn với bác sĩ cho cuộc kiểm tra sức khỏe hàng năm.",
    date: "09:50 14-11-2022",
    lag: "reminder",
    color: 'pink'
  },
  {
    title: "Thông báo về thời tiết",
    context: "Dự báo thời tiết cho ngày mai là mưa, hãy chuẩn bị ô dù.",
    date: "21:15 19-09-2022",
    lag: "weather",
    color: 'pink'
  },
  {
    title: "Sự kiện quan trọng",
    context: "Cuộc họp quan trọng với khách hàng vào lúc 10 giờ sáng ngày mai.",
    date: "19:30 27-03-2022",
    lag: "event",
    color: 'green'
  },
  {
    title: "Quên mua quà sinh nhật",
    context: "Sinh nhật bạn là vào ngày mai, hãy đến cửa hàng mua quà ngay bây giờ!",
    date: "16:05 09-06-2022",
    lag: "reminder",
    color: 'pink'
  },
  {
    title: "Thông báo về thời tiết",
    context: "Dự báo thời tiết cho cuối tuần là nắng, hãy dự định các hoạt động ngoài trời.",
    date: "10:30 22-04-2022",
    lag: "weather",
    color: 'green'
  }
];

export default NOTIFICATION;