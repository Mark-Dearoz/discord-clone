import React, {useState} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import globalStyles from '../styles/globalStyles';
import theme from '../styles/theme';

interface ButtonProps {
  children: string;
  onPress(): any;
  style?: 'primary' | 'secondary';
  disabled?: boolean;
}
function Button(props: ButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      style={[
        globalStyles.buttonBackground,
        pressed ? styles.pressed : styles.notPressed,
        props.style === 'secondary' ? styles.secondary : styles.primary,
        props.disabled ? styles.disabled : styles.enabled,
      ]}
      onPress={() => props.onPress()}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={props.disabled}>
      <Text style={globalStyles.buttonText}>{props.children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  notPressed: {
    opacity: 1,
  },
  primary: {
    backgroundColor: theme.colors.accent,
  },
  secondary: {
    backgroundColor: theme.colors.dark_accent,
  },
  disabled: {
    opacity: 0.5,
  },
  enabled: {
    opacity: 1,
  },
});

export default Button;
