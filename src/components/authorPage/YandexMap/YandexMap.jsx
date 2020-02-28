import { YMaps, Map, Placemark } from "react-yandex-maps";
import React from "react";
import style from "./yandex-map-style";
import Typography from "@material-ui/core/Typography";

function YandexMap(props) {
  const { lat, lng } = props.locationsCoords;
  const classes = style();
  return (
    <div className={classes.map}>
      <Typography variant="h6" component="h2" className={classes.title}>
        Place of author's major activity
      </Typography>
      <YMaps>
        <Map defaultState={{ center: [lat, lng], zoom: 11 }}>
          <Placemark geometry={[lat, lng]} />
        </Map>
      </YMaps>
    </div>
  );
}
export default YandexMap;
