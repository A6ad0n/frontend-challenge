import { useEffect, useState } from 'react';

export const useViewportWidth = (ref: React.RefObject<HTMLElement | null>) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const update = () => setWidth(node.clientWidth);

    update();

    const observer = new ResizeObserver(update);
    observer.observe(node);

    return () => observer.disconnect();
  }, [ref]);

  return width;
};
