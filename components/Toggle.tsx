import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import theme from '../styles/theme';

interface ToggleProps {
  state: 0 | 1;
  options: [string, string];
  onPress: (num: number) => void;
}
function Toggle(props: ToggleProps) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.background,
          props.state ? {right: 0} : {left: 0},
        ]}></View>
      <Pressable style={styles.pressable} onPress={() => props.onPress(0)}>
        <Text
          style={[styles.text, props.state ? styles.disabled : styles.enabled]}>
          {props.options[0]}
        </Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => props.onPress(1)}>
        <Text
          style={[styles.text, props.state ? styles.enabled : styles.disabled]}>
          {props.options[1]}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.extra_dark,
    padding: 8,
    borderRadius: 8,
  },
  background: {
    position: 'absolute',
    width: '50%',
    top: 0,
    bottom: 0,
    backgroundColor: theme.colors.dark_accent,
    borderRadius: 8,
    margin: 2,
  },
  pressable: {
    width: '50%',
  },
  text: {
    fontSize: theme.typography.size.text,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  enabled: {
    color: theme.colors.light,
  },
  disabled: {
    color: theme.colors.dark_accent,
  },
});
export default Toggle;
