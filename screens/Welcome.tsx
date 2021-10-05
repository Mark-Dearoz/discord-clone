import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../styles/theme';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import WelcomeSVG from '../assets/svgs/WelcomeSVG';
function Welcome() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DISCORD CLONE</Text>
        <WelcomeSVG width={400} />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to Discord Clone</Text>
        <Text style={styles.subText}>
          Join over 100 million people who use Discord Clone to talk with
          communities and friends.
        </Text>
        <Button onPress={() => navigation.push('register')} style="primary">
          Register
        </Button>
        <Button onPress={() => navigation.push('login')} style="secondary">
          LogIn
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(50,50,50)',
    padding: 16,
  },
  header: {
    flex: 1,
    marginTop: 32,
    padding: 32,
    alignItems: 'center',
  },
  content: {
    height: 220,
    paddingBottom: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: theme.typography.size.header,
    color: theme.colors.light,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 32,
  },
  text: {
    fontSize: theme.typography.size.subHeader,
    maxWidth: '75%',
    fontWeight: '800',
    color: theme.colors.light,
    textAlign: 'center',
  },
  subText: {
    fontSize: theme.typography.size.text,
    maxWidth: '85%',
    color: theme.colors.light_accent,
    textAlign: 'center',
  },
});

export default Welcome;
