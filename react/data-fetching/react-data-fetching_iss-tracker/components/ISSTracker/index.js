import { useEffect, useState } from 'react'
import Controls from '../Controls/index'
import Map from '../Map/index'
import useSWR from 'swr'
import { mutate } from 'swr'

const URL = 'https://api.wheretheiss.at/v1/satellites/25544'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ISSTracker() {
    const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
        refreshInterval: 5000,
    })

    if (error) return <p>Error: {error}</p>
    if (isLoading) return <p>Loading....</p>

    function handleReload() {
        mutate(data)
    }

    return (
        <main>
            <Map
                longitude={data.longitude}
                latitude={data.latitude}
            />
            <Controls
                longitude={data.longitude}
                latitude={data.latitude}
                onRefresh={handleReload}
            />
        </main>
    )
}
