// app/playpause.tsx
"use client";

import React, { useState, useRef } from 'react';
import Image from "next/image";

export default function PlayPauseButton({ src }: { src: string }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef?.current && audioRef.current.pause();
        } else {
            audioRef?.current && audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <Image
                src={isPlaying ? '/pause.png' : '/play.png'}
                alt={isPlaying ? 'Pause' : 'Play'}
                onClick={togglePlayPause}
                style={{ cursor: 'pointer' }}
                width={160}
                height={160}
            />
            <audio ref={audioRef} src={src} />
        </div>
    );
}
