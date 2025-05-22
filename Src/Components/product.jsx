import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import { colors } from '../Config/colors';
  import { Icon } from 'react-native-elements/dist/icons/Icon';
  import { useNavigation } from '@react-navigation/native';
  
  const { width, height } = Dimensions.get('window');
  
  const Product = ({ DATA }) => {
    const navigation = useNavigation(); // ✅ Move useNavigation inside component
  
    const handleMovetoDetails = (item) => {
      console.log(item);
      navigation.navigate('ProductDetails', {
        item: item,
      });
    };
  
    const Item = ({ item }) => (
      <TouchableOpacity onPress={() => handleMovetoDetails(item)} style={styles.item}>
        <Image
          source={{ uri: item.image }}
          resizeMode="cover"
          style={{ width: '100%', height: height * 0.15, borderRadius: 7 }}
        />
        <Text style={styles.title} numberOfLines={1}>
          {item.category}
        </Text>
        <Text style={styles.subTitle} numberOfLines={1}>
          {item.type}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {item.currency}
            {item.price}
          </Text>
          <Icon
            name="add"
            style={{ backgroundColor: colors.success, borderRadius: 50 }}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
    );
  
    return (
      <View>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: colors.white,
      padding: width * 0.02,
      marginVertical: 4,
      marginHorizontal: 6,
      width: width * 0.45,
      height: height * 0.25,
      borderRadius: 10,
      borderWidth: 0.7,
      borderColor: '#D2D1CB',
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
      elevation: 3,
    },
    title: {
      fontSize: width * 0.04,
      fontWeight: '500',
      marginTop: 5,
    },
    subTitle: {
      fontSize: width * 0.029,
      color: colors.grey3,
    },
    price: {
      fontSize: width * 0.04,
      fontWeight: '500',
      marginTop: 1,
    },
    priceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 2,
    },
  });
  
  export default Product;
  