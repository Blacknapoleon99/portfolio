'use client';

import React, { useEffect } from 'react';

const Starfield = () => {
    useEffect(() => {
        const canvas = document.getElementById('starfield') as HTMLCanvasElement;
        const context = canvas.getContext('2d')!;
        let width = window.innerWidth;
        let height = window.innerHeight;
        const stars = Array.from({ length: 500 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * width + 1, // Z is always positive
        }));

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const animate = () => {
            context.fillStyle = 'black';
            context.fillRect(0, 0, width, height);
            stars.forEach((star) => {
                star.z -= 2;
                if (star.z <= 0) star.z = width; // Reset z if it goes OOB
                const k = 128.0 / star.z;
                const px = star.x * k + width / 2;
                const py = star.y * k + height / 2;
                if (px >= 0 && px <= width && py >= 0 && py <= height) {
                    const size = Math.max((1 - star.z / width) * 5, 0.1); // Prevent neg size
                    context.fillStyle = 'white';
                    context.beginPath();
                    context.arc(px, py, size, 0, Math.PI * 2);
                    context.fill();
                }
            });
            requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    return (
        <canvas
            id="starfield"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundColor: 'black',
            }}
        />
    );
};

export default Starfield;
