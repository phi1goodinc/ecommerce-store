import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import React from 'react'


const MapComponent = () => {
    return (
        <YMaps>
            <Map width="100%" height="100%" defaultState={{center: [55.576569, 37.116807], zoom: 9}}>
                <Placemark geometry={[55.576569, 37.116807]}/>
            </Map>
        </YMaps>

    )
}

export default MapComponent