import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const covers = [
  "/images/covers/1.png",
  "/images/covers/2.png",
  "/images/covers/3.png",
  "/images/covers/4.png",
  "/images/covers/5.png",
  "/images/covers/6.png",
  "/images/covers/7.png",
  "/images/covers/8.png",
  "/images/covers/9.png",
  "/images/covers/10.png",
  "/images/covers/11.png",
  "/images/covers/12.png",
  "/images/covers/13.png",
  "/images/covers/14.png",
  "/images/covers/15.png",
  "/images/covers/16.png",
  "/images/covers/17.png",
  "/images/covers/18.png",
  "/images/covers/19.png",
  "/images/covers/20.png",
  "/images/covers/21.png",
  "/images/covers/22.png",
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const skipForward = () => {
    setCurrentCoverIndex((prevIndex) => (prevIndex + 1) % covers.length);
  };

  const skipBackward = () => {
    setCurrentCoverIndex(
      (prevIndex) => (prevIndex - 1 + covers.length) % covers.length
    );
  };

  const seekTo = (value: number) => {
    if (audioRef.current) {
      const time = (value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = time;
      setProgress(value);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/images/bg.png')] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[320px] rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 shadow-lg p-6"
      >
        {/* Images */}
        <div className="aspect-square rounded-2xl bg-white-100   mb-4 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentCoverIndex}
              src={covers[currentCoverIndex]}
              alt={`Cover ${currentCoverIndex + 1}`}
              className="absolute object-cover inset-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>

        {/* Song info */}
        <div className="mb-6">
          <h2 className="text-gray-800 font-medium">Blue</h2>
          <p className="text-gray-600 text-sm">by Yung Kai</p>
        </div>

        {/* Progress bar */}
        <div className="mb-6 w-full">
          <div className="relative">
            <Slider
              value={[progress]}
              max={duration}
              step={1}
              onValueChange={(values) => seekTo(values[0])}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>
              {Math.floor(currentTime / 60)}:
              {Math.floor(currentTime % 60)
                .toString()
                .padStart(2, "0")}
            </span>
            <span>
              {Math.floor(duration / 60)}:
              {Math.floor(duration % 60)
                .toString()
                .padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex items-center justify-between mb-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={skipBackward}
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <SkipBack className="w-6 h-6 fill-current" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={togglePlayPause}
            className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center text-gray-800 hover:bg-white/60 transition"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 ml-1 fill-current" />
            )}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={skipForward}
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <SkipForward className="w-6 h-6 fill-current" />
          </motion.button>
        </div>

        {/* Volume control */}
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-600">From my heart</span>
        </div>
      </motion.div>
      <audio ref={audioRef} src="/music/Blue-Yung-Kai.mp3" loop />
    </div>
  );
};

export default MusicPlayer;
