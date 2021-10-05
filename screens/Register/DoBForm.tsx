import React, {useContext, useEffect, useState} from 'react';
import Back from '../../components/Back';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import DatePicker from 'react-native-date-picker';
import FormContext from '../../context/FormContext';

const MS_IN_YEAR = 31536000000;
const MIN_USER_AGE = 18;

function DoBForm() {
  const {dob, dobChange, submitForm} = useContext(FormContext);
  const [disable, setDisable] = useState(true);
  const dateString = `${
    dob.getMonth() + 1
  }/${dob.getDate()}/${dob.getFullYear()}`;

  useEffect(() => {
    const currentDate = new Date();
    const difference = currentDate.valueOf() - MS_IN_YEAR * MIN_USER_AGE;
    setDisable(difference <= dob.valueOf());
  }, [dob]);
  return (
    <View style={styles.container}>
      <Back />
      <Text style={styles.header}>Enter your birthday</Text>
      <Text style={styles.subText}>DATE OF BIRTH</Text>
      <View style={styles.dateDisplay}>
        <Text style={styles.dateText}>{dateString}</Text>
      </View>
      <Button onPress={() => submitForm()} disabled={disable}>
        Create an account
      </Button>
      <View style={styles.dateContainer}>
        <DatePicker
          style={styles.datePicker}
          onDateChange={date => dobChange(date)}
          modal={false}
          date={dob}
          mode="date"
          maximumDate={new Date()}
          textColor={theme.colors.light}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark,
    padding: 16,
    paddingTop: 32,
  },
  header: {
    fontSize: theme.typography.size.subHeader,
    color: theme.colors.light,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 16,
  },
  subText: {
    fontSize: theme.typography.size.subText,
    color: theme.colors.light,
    fontWeight: '800',
    marginBottom: 8,
  },
  dateDisplay: {
    display: 'flex',
    backgroundColor: theme.colors.extra_dark,
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  dateText: {
    color: theme.colors.light,
    fontWeight: '500',
  },
  dateContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: 4,
    backgroundColor: theme.colors.extra_dark,
  },
  datePicker: {
    alignSelf: 'center',
  },
});

export default DoBForm;
