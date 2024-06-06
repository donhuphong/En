import React, {useState} from 'react';
import { View, Text, StyleSheet,SafeAreaView, Dimensions } from 'react-native';
import Calendar from 'rc-calendar';
const windownWidth = Dimensions.get('window').width;
const PROFILE = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const onSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      {/* header */}
      <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
        <View>
          <Text style={{}}>Welcome to application.</Text>
        </View>
        <View >
          <Text style={{}}>Let's started with us</Text>
          {/*<Calendar*/}
          {/*    style={{width: windownWidth - 40}}*/}
          {/*    onSelect={onSelect} // Pass the onSelect function as a prop*/}
          {/*    // Add other Calendar props as needed (e.g., mode, locale, etc.)*/}
          {/*/>*/}
          {/*{selectedDate && ( // Conditionally render selected date info*/}
          {/*    <Text style={styles.selectedDateText}>*/}
          {/*      Selected Date: {selectedDate.format('YYYY-MM-DD')}*/}
          {/*    </Text>*/}
          {/*)}*/}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PROFILE;