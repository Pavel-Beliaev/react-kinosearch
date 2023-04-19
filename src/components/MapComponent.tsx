import React from 'react';
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

const MapComponent:React.FC = () => {
    return (
        <YMaps>
            <Map defaultState={{
                center: [7.877035, 98.396866],
                zoom: 13,
                controls: ["zoomControl", "fullscreenControl"],
            }}
                 modules={["control.ZoomControl", "control.FullscreenControl"]}
                 width='100%'
                 height='100%'
            >
                <Placemark
                    modules={["geoObject.addon.balloon"]}
                    defaultGeometry={[7.877035, 98.396866]}
                    properties={{
                        balloonContentBody:
                            "Last location",
                    }}/>
            </Map>
        </YMaps>
    );
};

export default MapComponent;