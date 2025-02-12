import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import uuid from 'react-native-uuid';


export default function Map(props) {
    const [markers, setMarkers] = useState([])

    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarkers((prevMarkers) => [
            ...prevMarkers,{
                id: uuid.v4(),
                coords: coords
            }
        ])
    }
    return (
        <MapView 
            style={styles.map}
            region={props.location}
            //mapType='satellite'
            onLongPress={showMarker}
        >
            {markers.map(marker =>  
                <Marker
                    key={marker.id} //empty
                    title="My marker"
                    coordinate={{latitude: marker.coords.latitude, longitude: marker.coords.longitude}}
                />
            )}
        </MapView>

    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    }
})