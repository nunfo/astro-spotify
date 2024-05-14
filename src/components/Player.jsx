import { useState, useRef, useEffect } from 'react'

const Previous = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
  </svg>
)

export const Play = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" class="text-black">
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
)

export const Pause = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" class="text-black">
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
)

const Next = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
  </svg>
)  

const VolumeSilence = () => (
  <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
    <path d="M4.5 1.5a.5.5 0 0 1 .5-.5h6.8l4.1 4.1v6.8a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5V6.9L9.9 3.1V12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V1.5z"></path>
  </svg>
)

const Volume = () => (
  <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
    <path d="M4.5 1.5a.5.5 0 0 1 .5-.5h6.8l4.1 4.1v6.8a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5V6.9L9.9 3.1V12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V1.5z"></path>
    <path d="M1.5 4.5a.5.5 0 0 1 .5-.5h2.8l3.1 3.1v5.8a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5V7.9L4.9 5.1V12.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4.5z"></path>
  </svg>
)


export function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.src = `/music/1/01.mp3`;
  }, []); 

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }


  return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
      <div>
        CurrentSong ...
      </div>
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center gap-4">
          <button className="text-red p-2">
            <Previous />
          </button>
          <button className="bg-white rounded-full p-2" onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button className="p-2">
            <Next />
          </button>
        </div>
      </div>
      <div className="grid place-content-center">
        Volumen ...
      </div>

      <audio ref={audioRef} />
    </div>

  )
}

