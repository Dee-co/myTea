import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../Src/Config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
const productIconSize = width * 0.05;
const ProductDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={{
              uri: 'https://www.foodandwine.com/thmb/xQZv2CX6FO5331PYK7uGPF1we9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Flat-White-FT-BLOG0523-b11f6273c2d84462954c2163d6a1076d.jpg',
            }}
            style={{height: height * 0.4, width: width}}
            resizeMode="cover">
            <View style={styles.topHeadingIcon}>
              <Icon
                name="arrow-back"
                size={productIconSize}
                color={colors.success}
                style={styles.topIcons}
              />
              <Icon
                name="arrow-back"
                size={productIconSize}
                color={colors.success}
                style={styles.topIcons}
              />
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topHeadingIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
  },
  topIcons: {
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 50,
  },
});
export default ProductDetails;
