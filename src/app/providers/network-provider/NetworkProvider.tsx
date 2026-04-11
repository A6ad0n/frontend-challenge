// components/NetworkStatus/NetworkStatus.tsx
import { useState, useEffect } from 'react';
import { OfflinePage } from '@/pages/offline-page';

interface NetworkStatusProps {
  children: React.ReactNode;
}

export const NetworkProvider = ({ children }: NetworkStatusProps) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOnline) {
    return <OfflinePage />;
  }

  return <>{children}</>;
};
