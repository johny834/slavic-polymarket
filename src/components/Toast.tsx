'use client';

import { useEffect } from 'react';

interface Props {
  message: string;
  visible: boolean;
  onHide: () => void;
}

export default function Toast({ message, visible, onHide }: Props) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onHide, 2500);
      return () => clearTimeout(timer);
    }
  }, [visible, onHide]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 toast">
      <div className="glass-card px-6 py-3 glow-purple flex items-center gap-2">
        <span className="text-xl">🚧</span>
        <span className="text-sm font-semibold text-purple-300">{message}</span>
      </div>
    </div>
  );
}
