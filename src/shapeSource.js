import React from 'react'
import MapboxGL from "@react-native-mapbox-gl/maps";

export default function shapeSource() {
    let dataSourceSave = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
            properties: {
              icon: 'exampleIcon',
            },
            geometry: {
              type: 'Point',
              coordinates: [-120.084990,37.426929],
            },
          },
          {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d45522',
            properties: {
              icon: 'exampleIcon',
            },
            geometry: {
              type: 'Point',
              coordinates: [-121.084990,37.426929],
            },
          },
          {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d45523',
            properties: {
              icon: 'exampleIcon',
            },
            geometry: {
              type: 'Point',
              coordinates: [-122.084990,36.426929],
            },
          },
        ],
      };
      let icon={
          iconImage: require('./img/map.png'),
          iconAllowOverlap: true,
          iconSize:1.2,
      }
      
    return (
      <MapboxGL.ShapeSource
        id={'exampleShapSource'}
        hitbox={{width:120, height:120}}
        onPress={e=>{
            console.log("hii")
        }}
        shape={dataSourceSave}>
            <MapboxGL.SymbolLayer
                id={'exampleIconName'}
                style={icon}
                >

            </MapboxGL.SymbolLayer>
        </MapboxGL.ShapeSource>
  );
}
