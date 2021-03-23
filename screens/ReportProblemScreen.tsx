/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  Text,
  ScrollView,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import CameraComponent from '../components/ReportProblem/CameraComponent';
import UrgentButton from '../components/ReportProblem/UrgentButtonComponent';
import ListAccordion from '../components/ReportProblem/ListAccordion';
import MapPinDrop from '../components/MapComponent/MapViewComponent';
import HorizontalBanner from '../components/HorizontalBannerComponent';
// import addNewReport from '../store/actions/report';

export default function ReportProblem(): JSX.Element {
  const [text, setText] = useState('');
  const [categoryTitle, setCategoryTitle] = useState('Choose a category');
  const [imageUri, setImageUri] = useState('');
  const [urgency, setUrgency] = useState(true);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  // handles API call to save new problem to database
  function handleButtonClick() {
    if (categoryTitle === 'Choose a category') {
      Alert.alert('Please add a category');
    }
<<<<<<< HEAD
    //console.log(urgency);
=======
    console.log(latitude, longitude);
>>>>>>> 9d02b6c2ba252aa0e47f779f9d1ae0d93362cf13
    // dispatch(addNewReport());
    setText('');
  }

  return (
    <ScrollView style={styles.container}>
      <HorizontalBanner />
      <ListAccordion
        setCategoryTitle={setCategoryTitle}
        categoryTitle={categoryTitle}
      />
      <View>
        <CameraComponent
          imageUri={imageUri}
          setImageUri={setImageUri}
          headerText="Then take a picture"
        />
        <View style={styles.descriptionBox}>
          <Text style={styles.text}>Write a brief description</Text>
          <TextInput
            label="Description"
            multiline
            value={text}
            mode="outlined"
            style={styles.input}
            onChangeText={input => setText(input)}
          />
        </View>
      </View>
      <View style={styles.urgent}>
        <Text style={styles.text}>How urgent is your problem?</Text>
        <UrgentButton setUrgency={setUrgency} />
      </View>
      <View style={styles.map}>
        <Text style={styles.mapText}>Drag the pin to where the problem is</Text>
        <MapPinDrop
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
        />
      </View>
      <View style={styles.bottom}>
        <Button
          icon="email-send"
          mode="contained"
          style={styles.button}
          onPress={handleButtonClick}
        >
          Submit
        </Button>
      </View>
    </ScrollView>
  );
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    width: '50%',
    borderRadius: 15,
  },
  bottom: {
    marginTop: '5%',
    marginBottom: 20,
    paddingBottom: 100,
  },
  descriptionBox: {
    backgroundColor: 'white',
    height: height / 6,
    width: width - 30,
    alignSelf: 'center',
    borderRadius: 10,
  },
  urgent: {
    marginTop: 7,
    backgroundColor: 'white',
    height: height / 9,
    width: width - 30,
    alignSelf: 'center',
    borderRadius: 10,
  },
  map: {
    marginTop: 7,
    backgroundColor: 'white',
    height: 360,
    width: width - 30,
    alignSelf: 'center',
    borderRadius: 10,
  },
  mapText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
  },
  input: {
    width: '90%',
    marginLeft: '5%',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  image: {
    width,
    height: '10%',
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
    marginBottom: -10,
  },
});
