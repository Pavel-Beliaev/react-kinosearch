import React, {FC} from 'react';
import './map.scss'
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

export const MapComponent:FC = () => {

    return (
        <div className='map'>
            <div className='map-wrapper'>
                <div className='map_inside'>
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
                                    balloonContentBody: "Last location",
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </div>

    );
};