import {DarkTheme} from 'react-native-paper';
import { Colors } from './colors';

export default {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: Colors.red,
      background : Colors.bg,
    },
  };