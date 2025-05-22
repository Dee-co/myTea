import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Platform,
  PermissionsAndroid,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../Src/Config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import categoies from '../Src/Config/category';
import Product from '../Src/Components/product';
const {width, height} = Dimensions.get('window');
const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Cappuccino');

  const iconsSize = width * 0.07;
  const inputIconSize = width * 0.06;
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      category: 'Cappuccino',
      type: 'With Sugar',
      currency: '₹',
      price: '122.50',
      image:
        'https://www.foodandwine.com/thmb/xQZv2CX6FO5331PYK7uGPF1we9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Flat-White-FT-BLOG0523-b11f6273c2d84462954c2163d6a1076d.jpg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      category: 'Cappuccino',
      currency: '₹',
      price: '122.50',
      type: 'With Sugar',
      image:
        'https://content.jdmagicbox.com/v2/comp/chennai/d5/044pxx44.xx44.180626234333.e4d5/catalogue/go-coffy-perungudi-chennai-coffee-shops-04yooxuu4c.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      category: 'Cappuccino',
      type: 'With Sugar',
      currency: '₹',
      price: '122.50',
      image:
        'https://prod-app.breville.com/thumbnail/recipe/1724048842/Flat+White-Leaf+Latte+1080x1440_1080x1440.jpg',
    },
  ];
  const specialOffers = [{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    category: 'Cappuccino',
    type: 'With Sugar',
    currency: '₹',
    price: '122.50',
    image:
      'https://prod-app.breville.com/thumbnail/recipe/1724048842/Flat+White-Leaf+Latte+1080x1440_1080x1440.jpg',
  },];
  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'ios') {
        const res = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        return res === RESULTS.GRANTED;
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      }
    } catch (error) {
      console.warn('Location permission error:', error);
      return false;
    }
  };

  const getCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      setErrorMsg('Location permission denied');
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log('Current location:', latitude, longitude);
        setLocation({latitude, longitude});
        setErrorMsg('');
      },
      error => {
        console.error('Error getting location:', error);
        setErrorMsg(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        forceRequestLocation: true,
        showLocationDialog: true,
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const handleSelectCategory = category => {
    setSelectedCategory(category.label);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topHeader}>
            <View style={styles.avatarIcon}>
              <Icon name="person" size={iconsSize} color={colors.primary} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="location" size={14} color={colors.success} />
              <Text style={styles.headerText} onPress={getCurrentLocation}>
                Current location
              </Text>
            </View>
            <View>
              <Icon
                name="notifications-outline"
                color={colors.success}
                size={iconsSize + 3}
              />
            </View>
          </View>

          <View style={styles.customerInfo}>
            <Text style={styles.customerGreeting}>Good Morning, Deepak</Text>
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name="search"
              size={inputIconSize}
              color={colors.transSuccess}
              style={styles.leftIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Search Coffee.."
              placeholderTextColor={colors.transSuccess}
            />
            <Icon
              name="options"
              size={inputIconSize + 3}
              color={colors.success}
              style={styles.rightIcon}
            />
          </View>

          {/* Category Section */}
          <View style={styles.categorySection}>
            <Text style={styles.categoryHeading}>Categories</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginVertical: 10,
              paddingHorizontal: 5,
              height: 50,
              alignItems: 'center',
            }}>
            {categoies.map((category, index) => (
              <TouchableOpacity
                onPress={() => handleSelectCategory(category)}
                key={index}
                style={[
                  styles.categoryItem,
                  {
                    backgroundColor:
                      selectedCategory === category.label
                        ? colors.success
                        : '#fff',
                  },
                ]}>
                <Icon
                  name={category.icon}
                  size={iconsSize}
                  color={
                    selectedCategory === category.label
                      ? colors.white
                      : colors.success
                  }
                />
                <Text
                  style={{
                    color:
                      selectedCategory === category.label
                        ? colors.white
                        : colors.success,
                    marginLeft: 10,
                    fontSize: 16,
                  }}>
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Products Section */}
          <View style={{marginTop: height * 0.01}}>
           <Product DATA={DATA}/>
          </View>
          {/* Special Offers */}
          <View style={{marginTop: height * 0.02}}>
            <Text style={[styles.categoryHeading,{marginBottom:height * 0.01}]}>Special Offers</Text>
           <Product DATA={specialOffers}/>
          </View>
        </ScrollView>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.03,
    backgroundColor: colors.white,
    paddingVertical: height * 0.01,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e4e5e8',
    padding: 10,
    borderRadius: 50,
  },
  headerText: {
    fontSize: 14,
    marginLeft: 5,
  },
  customerInfo: {
    marginTop: height * 0.012,
  },
  customerGreeting: {
    fontSize: height * 0.02,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    marginTop: height * 0.02,
  },
  input: {
    flex: 1,
    paddingVertical: height * 0.017,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  leftIcon: {
    marginRight: 5,
  },
  rightIcon: {
    marginLeft: 5,
  },
  categorySection: {
    marginTop: height * 0.02,
  },
  categoryHeading: {
    fontSize: height * 0.022,
    fontWeight: '600',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
});

export default HomeScreen;
