import { YMaps, Map, Placemark } from "react-yandex-maps";
import React from "react";

function YandexMap(props) {
  const { lat, lng } = props.locationsCoords;
  return (
    <div className="map">
      <h5>Значимое место</h5>
      <YMaps>
        <Map defaultState={{ center: [lat, lng], zoom: 11 }}>
          <Placemark geometry={[lat, lng]} />
        </Map>
      </YMaps>
    </div>
  );
}
export default YandexMap;
