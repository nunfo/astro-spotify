// Componente botón play/pause sobre la tarjeta de la playlist
import { Play, Pause } from './Player.jsx'
import { usePlayerStore } from '@/store/playerStore.js'

export function CardPlayButton({ id, size = 'small' }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state);

  const isPlayingPlayList = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = () => {
    if (isPlayingPlayList) {
      setIsPlaying(false);
      return;
    }
    // llamada a la API con promises
    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const { songs, playlist } = data;
        setIsPlaying(true);
        setCurrentMusic({ songs, playlist, song: songs[0] });

        // console.log({ songs, playlist });
      });

    // llamada a la API con async/await
    // const response = await fetch(`/api/get-info-playlist.json?id=${id}`);
    // const data = await response.json();
    // const { songs, playlist } = data;
  }

  const sizeIconClass = size === 'small' ? 'w-4 h-4' : 'w-6 h-6';
  return (
    <button className="card-play-button rounded-full bg-green-500 p-4"
      onClick={handleClick}>
      {isPlayingPlayList ? <Pause size={sizeIconClass}/> : <Play size={sizeIconClass} />}
    </button>
  )
}