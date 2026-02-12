'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    fullWidth?: boolean;
    className?: string;
}

export default function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    fullWidth = false,
    className = '',
}: FadeInProps) {
    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return { y: 20, opacity: 0 };
            case 'down':
                return { y: -20, opacity: 0 };
            case 'left':
                return { x: 20, opacity: 0 };
            case 'right':
                return { x: -20, opacity: 0 };
            case 'none':
                return { opacity: 0 };
            default:
                return { y: 20, opacity: 0 };
        }
    };

    const getAnimatePosition = () => {
        switch (direction) {
            case 'up':
            case 'down':
                return { y: 0, opacity: 1 };
            case 'left':
            case 'right':
                return { x: 0, opacity: 1 };
            case 'none':
                return { opacity: 1 };
            default:
                return { y: 0, opacity: 1 };
        }
    };

    return (
        <motion.div
            initial={getInitialPosition()}
            whileInView={getAnimatePosition()}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut",
            }}
            className={`${fullWidth ? 'w-full' : ''} ${direction !== 'none' ? 'relative' : ''} ${className}`}
            style={{ height: 'inherit', minHeight: 'inherit' }}
        >
            {children}
        </motion.div>
    );
}
