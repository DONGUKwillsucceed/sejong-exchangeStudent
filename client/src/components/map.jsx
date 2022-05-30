import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function map() {
    const containerStyle = {
        width: "400px",
        height: "400px",
    };

    const center = {
        lat: -3.745,
        lng: -38.523,
    };
    return (
        <LoadScript googleMapsApiKey="AIzaSyBrbTaxoATW8jVJD6DUywUGnOSYEBfRxnA">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={5}>
                {/* Child components, such as markers, info windows, etc. */}
            </GoogleMap>
        </LoadScript>
    );
}
