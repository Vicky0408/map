import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoidmlja3lhcnlhbiIsImEiOiJja3JpdWJ4Nm8wcW53Mm9vNW83czZwdTBpIn0.mPJ6kOcKQBwEvGTZxhqYpA',
);

const data = {
  allLandmarks: [
    {
      images: [
        {
          url: 'https://www.datocms-assets.com/50532/1626140335-jewelchangiairportsingapore1cover.jpg',
        },
        {
          url: 'https://www.datocms-assets.com/50532/1626140353-jewelchangiairportsingapore2.jpg',
        },
        {
          url: 'https://www.datocms-assets.com/50532/1626140365-jewelchangiairportsingapore3.jpg',
        },
      ],
      location: {
        latitude: 1.3602082,
        longitude: 103.9897593,
      },
      name: 'Jewel Changi Airport',
      country: 'Singapore',
      city: 'Singapore',
      description:
        'Marvel at the intricate architecture of the striking glass and steel dome as you run through the Changi Airport park connecter ',
    },
    {
      images: [
        {
          url: 'https://www.datocms-assets.com/50532/1626139945-helixbridgesingapore1cover.jpg',
        },
        {
          url: 'https://www.datocms-assets.com/50532/1626139963-helixbridgesingapore2.jpg',
        },
        {
          url: 'https://www.datocms-assets.com/50532/1626139977-helixbridgesingapore3.jpg',
        },
      ],
      location: {
        latitude: 1.2876834,
        longitude: 103.8605974,
      },
      name: 'Helix Bridge ',
      country: 'Singapore',
      city: 'Singapore',
      description:
        'Run through the pedestrian bridge linking Marina Centre with Marina South and marvel at the towering skyscrapers all around. ',
    },
    {
      images: [
        {
          url: 'https://www.datocms-assets.com/50532/1626088356-botanicgardenssingapore1cover.jpg',
        },
        {
          url: 'https://www.datocms-assets.com/50532/1626088373-botanicgardenssingapore2.jpg',
        },
        {
          url: 'https://www.datocms-assets.com/50532/1626088390-botanicgardenssingapore3.jpg',
        },
      ],
      location: {
        latitude: 1.3138397,
        longitude: 103.8159136,
      },
      name: 'Botanic Gardens ',
      country: 'Singapore',
      city: 'Singapore',
      description:
        'Centrally located, home to a variety of attractions and ultimately a great running route. ',
    },
    {
      images: [
        {
          url: 'https://www.datocms-assets.com/50532/1626072566-gardensbythebaysingapore1cover.jpg',
        },
        {
          url: 'https://www.datocms-assets.com/50532/1626072592-gardensbythebaysingapore2.jpg',
        },
        {
          url: 'https://www.datocms-assets.com/50532/1626072608-gardensbythebaysingapore3.jpg',
        },
      ],
      location: {
        latitude: 1.2815683,
        longitude: 103.8636132,
      },
      name: 'Gardens by the Bay ',
      country: 'Singapore',
      city: 'Singapore',
      description:
        'Awarded the 2019 Urban Parks Legacy Award, Gardens by the Bay stands tall as a must visit location for people of all ages. ',
    },
    {
      images: [
        {
          url: 'https://www.datocms-assets.com/50532/1625215220-merlionsingapore1cover.jpg',
        },
        {
          url: 'https://www.datocms-assets.com/50532/1625215227-merlionsingapore2.jpg',
        },
        {
          url: 'https://www.datocms-assets.com/50532/1625215232-merlionsingapore3.jpg',
        },
      ],
      location: {
        latitude: 1.2867892,
        longitude: 103.8545014,
      },
      name: 'Merlion',
      country: 'Singapore',
      city: 'Singapore',
      description:
        'Home to a prominent tourist attraction, the Merlion Park is a good place to enjoy the sunrise, and an even better place for a run!',
    },
  ],
};

const dataa = data.allLandmarks;

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {dataa.map((item, index) => (
          <View>{console.log(item.images[0].url)}</View>
        ))}
        <MapboxGL.MapView
          ref={c => (this._map = c)}
          logoEnabled={false}
          zoomLeavel={14}
          showUserLocation={true}
          style={{flex: 1}}>
          <MapboxGL.Camera
            ref={c => (this.camera = c)}
            zoomLevel={16}
            animationMode={'flyTo'}
            animationDuration={0}
            centerCoordinate={[
              dataa[0].location.longitude,
              dataa[0].location.latitude,
            ]}
          />
          <MapboxGL.UserLocation></MapboxGL.UserLocation>

          <MapboxGL.MarkerView
            key="pointAnnotation"
            id="pointAnnotation"
            coordinate={[
              dataa[0].location.longitude,
              dataa[0].location.latitude,
            ]}>
            <View
              style={{
                height: 30,
                width: 30,
                overflow: 'hidden',
              }}>
              <Image
                source={require('./src/img/map.png')}
                style={{
                  flex: 1,
                  resizeMode: 'contain',
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          </MapboxGL.MarkerView>
        </MapboxGL.MapView>
        <View 
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            width: '100%',
            position: 'absolute',
            bottom: 10,
            right: 10,
            height: 150,
            borderRadius: 20,
            backgroundColor: '#fff',
          }}
          >
          <ScrollView scrollEventThrottle={1}>
            
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>

                {dataa.map((item, index) => (
       
                  <View
                    style={{flex: 1,  flexDirection: "row", height: 130,paddingLeft:10, borderRadius:20, width: 330, borderColor: '#dddddd', }}>
                    
                      <Image
                        source={{ uri: 'https://www.datocms-assets.com/50532/1625215232-merlionsingapore3.jpg'}}
                        style={{  height: "100%", width: 150,}}
                      />
                      <View style={{padding:10}}>
                        <Text style={{margin:10, fontSize:20, fontWeight: "bold"}}>{item.name}</Text>
                        <Text  style={{margin:10}}>{item.country}</Text>
                        <Text  style={{margin:10}}>{item.city}</Text>
                      </View>
                  </View>

                ))}

                  
                  

                  
                  
                </ScrollView>
          </ScrollView>
        </View>
      </View>
    );
  }
}
