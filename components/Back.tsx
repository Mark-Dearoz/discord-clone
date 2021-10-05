import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, StyleSheet, View} from 'react-native';
import theme from '../styles/theme';
import BackSVG from '../assets/svgs/BackSVG';

function Back() {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Pressable onPress={goBack} style={styles.container}>
      <View style={styles.svgContainer}>
        <BackSVG />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Back</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 64,
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  svgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.light,
    fontWeight: '500',
    fontSize: 14,
  },
});
export default Back;
