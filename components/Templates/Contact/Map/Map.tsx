'use client'
import L from 'leaflet'
import MarkerIcon from '@/public/icons/map/images/marker-icon.png'
import MarkerShadow from '@/public/icons/map/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'

const Map = () => {
    const [coord, setCoord] = useState([36.58404, 53.06255])
    return (
        <div className='bg-MainPrimary overflow-hidden rounded-3xl'>
       
            <MapContainer style={{
                height: '40vh',
                width: '100%',
                backgroundColor: '#436E8E',
                opacity: 0.9,
            }} center={coord} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={[36.58404, 53.06255]}>
                     <Popup>
                        <p className='text-MainPrimary'>آکادمی سپهر</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map




