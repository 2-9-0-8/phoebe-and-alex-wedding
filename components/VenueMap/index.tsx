'use client'

import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { location } from '@data/location'
import styles from '@styles/modules/Map.module.css'
import { ReactElement, useEffect, useRef } from 'react'

const { lat, lng } = location
const zoom = 12

const render = (status: Status): ReactElement | undefined => {
  switch (status) {
    case Status.LOADING:
      return <p>Loading...</p>
    case Status.FAILURE:
      return <p>The map hasn't loaded. Try refreshing?</p>
    case Status.SUCCESS:
      return <Map center={{ lat, lng }} zoom={zoom} />
  }
}

function Map({ center, zoom }: { center: google.maps.LatLngLiteral; zoom: number }) {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    })

    new google.maps.Marker({
      position: { lat, lng },
      map,
      title: 'Lower Rudloe Farm',
    });
  })

  return <div className={styles.map} ref={ref} id="map" />
}

export default function VenueMap() {

  return (
    // @ts-ignore
    <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string} render={render} />
  )
}
