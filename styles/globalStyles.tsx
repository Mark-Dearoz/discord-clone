import {Dimensions, StyleSheet} from 'react-native';
import theme from './theme';

const globalStyles = StyleSheet.create({
  buttonBackground: {
    padding: 12,
    borderRadius: 4,
    width: Dimensions.get('window').width - 32,
  },
  buttonText: {
    fontSize: theme.typography.size.text,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.light,
  },
  textInput: {
    flex: 1,
    backgroundColor: theme.colors.extra_dark,
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
    color: theme.colors.light,
    fontWeight: '500',
  },
});

export default globalStyles;
