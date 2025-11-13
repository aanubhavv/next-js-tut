"use client"
import { useEffect, useState } from "react";

function AlbumsClient() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        async function fetchAlbums() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/albums")
                const data = await response.json()
                setAlbums(data)
            } catch (error) {
                console.error("Error fetching albums:", error)
            }
        }
        fetchAlbums()
    }, [])

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
        {albums.map((album: { id: number, title:string }) => (
            <div 
                key={album.id}
                className="bg-white shadow-md rounded-lg p-4 transition t..."
            >
                <h3 className="text-gray-600 text-lg font-bold mb-2">{album.title}</h3>
                <p className="text-gray-600">Album ID: {album.id}</p>
            </div>
        ))}
    </div>
    )

}

export default AlbumsClient;