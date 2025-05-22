// AppButton.jsx
import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { colors } from '../Config/colors';

const AppButton = ({ title, onPress, style, textStyle, className = '', textClassName = '', ...rest }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[{ backgroundColor:colors.success, paddingBlock:10, paddingInline:20, borderRadius: 20, alignItems: 'center' }, style]}
      className={className}
      {...rest}
    >
      <Text
        style={[{ color: 'white', fontSize: 16 }, textStyle]}
        className={textClassName}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
