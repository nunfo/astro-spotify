// Control de estado creado con Zustand para el reproductor de música. Este hook se encarga de manejar el estado de la música que se está reproduciendo, si está en pausa o reproduciendo, el volumen y la lista de canciones de la playlist actual.
import { playlists, songs } from "@/services/data";
import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  // currentMusic: { playlist: null, song: null, songs: [] },
  currentMusic: { 
    playlist: playlists.find((playlist) => playlist.albumId === 1), 
    song: songs.find((song) => song.id === 1 && song.albumId=== 1),
    songs: songs.find((album) => album.albumId === 1)
  },
  volume: 1,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => {
    // console.log("usePlayStore:", currentMusic)
    set({ currentMusic })
  },
  setVolume: (volume) => set({ volume }),
}));