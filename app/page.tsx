// app/page.tsx or pages/index.tsx
"use client";

import Image from "next/image";
import PlayPauseButton from "@/app/playpause";

export default function Home() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center">
            <div className="absolute z-10">
                <PlayPauseButton src="/edvard.mp3" />
            </div>
            <div className="absolute inset-0">
                <Image
                    src="/edvard.jpg"
                    alt="Edvard"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
        </main>
    );
}
