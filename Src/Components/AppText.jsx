import { Text } from 'react-native';
import React from 'react';

const AppText = ({ children, style, className = '', ...rest }) => {
  return (
    <Text
      style={[{ color: 'white' }, style]} // Default white first, then override if needed
      className={className}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default AppText;
