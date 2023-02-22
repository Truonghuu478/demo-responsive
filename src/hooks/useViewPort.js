import { useState, useEffect } from 'react';
import { DESKTOP, MOBILE, TABLET } from '../constants/device';

function useViewport() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (width <= 767) {
        return MOBILE
    } else if (width > 767 && width <= 1024) {
        return TABLET
    } else if (width > 1024) {
        return DESKTOP
    }
}

export default useViewport