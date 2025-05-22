import {
  View,
  Image,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, { useContext } from 'react';
import {colors} from '../Config/colors';
import AppText from '../Components/AppText';
import AppButton from '../Components/AppButton';
import { AuthContext } from '../Context/AuthContext';
const {width, height} = Dimensions.get('window');

const Loginpage = () => {
  const {loginWithBiometrics} = useContext(AuthContext);
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
        <ImageBackground
          source={require('../../assets/Images/backgroundImg.png')}
          style={{flex: 1}}
          resizeMode="cover">
          <View className="flex-1 justify-center items-center">
            <Image
              source={require('../../assets/Images/packingImg.png')}
              style={styles.packingImage}
            />
            <View className="my-10">
              <AppText
                className="font-inter-regular font-bold text-center"
                style={styles.heading}>
                Coffee so good,{'\n'}
                your taste buds{'\n'}
                will love it
              </AppText>
            </View>
            <View className="my-1">
              <AppText
                className="text-center"
                style={styles.subTitle}>
                The best grain, the finest roas, the{'\n'}
                most powerful flavor
              </AppText>
            </View>
            <View className='mt-6'>
              <AppButton title='Get Start' onPress={loginWithBiometrics}></AppButton>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  packingImage: {
    width: '100%',
    height: height * 0.3,
  },
  heading: {
    fontSize: height * 0.034,
    lineHeight: height * 0.035,
    fontFamily: 'Inter'
  },
  subTitle: {
    fontSize: height * 0.02,
    lineHeight: height * 0.024,
  },
});
export default Loginpage;
