eqfeed_callback(
    {
        "type": "FeatureCollection", "features": [
        { "type": "Feature", "properties": { "mag": 5.4, "place": "48km SSE of Pondaguitan, Philippines", "time": 1348176066, "tz": 480, "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000csx3", "felt": 2, "cdi": 3.4, "mmi": null, "alert": null, "status": "REVIEWED", "tsunami": null, "sig": "449", "net": "us", "code": "c000csx3", "ids": ",usc000csx3,", "sources": ",us,", "types": ",dyfi,eq-location-map,general-link,geoserve,historical-moment-tensor-map,historical-seismicity-map,nearby-cities,origin,p-wave-travel-times,phase-data,scitech-link,tectonic-summary," }, "geometry": { "type": "Point", "coordinates": [126.3832, 5.9775, 111.16] }, "id": "usc000csx3" },
        { "type": "Feature", "properties": { "mag": 5.4, "types": "eq-location-map" }, "geometry": { "type": "Point", "coordinates": [25.7363234, 42.75] }, "id":  "1" },
        { "type": "Feature", "properties": { "mag": 5.4, "types": "eq-location-map" }, "geometry": { "type": "Point", "coordinates": [22.7363234, 42.75] }, "id": "2" },
        { "type": "Feature", "properties": { "mag": 5.7, "place": "35km ESE of Ndoi Island, Fiji", "time": 1348175020, "tz": -720, "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000csw5", "felt": 0, "cdi": 1, "mmi": 2, "alert": "green", "status": "REVIEWED", "tsunami": null, "sig": "500", "net": "us", "code": "c000csw5", "ids": ",usc000csw5,", "sources": ",us,", "types": ",dyfi,eq-location-map,geoserve,historical-moment-tensor-map,historical-seismicity-map,losspager,nearby-cities,origin,p-wave-travel-times,phase-data,scitech-link,shakemap,tectonic-summary," }, "geometry": { "type": "Point", "coordinates": [-178.3725, -20.753, 544.19] }, "id": "usc000csw5" }]
    })

function eqfeed_callback(response) {
    map.data.addGeoJson(response);
}