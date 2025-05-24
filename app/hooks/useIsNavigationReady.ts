import { useEffect, useState } from "react";
import { usePathname } from "expo-router";

export function useIsNavigationReady() {
    const [isReady, setIsReady] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Main timer that triggers when pathname exists
        if (pathname !== undefined) {
            const timer = setTimeout(() => {
                setIsReady(true);
            }, 1000);

            return () => clearTimeout(timer);
        }

        // Fallback timer in case pathname takes too long
        const fallbackTimer = setTimeout(() => {
            setIsReady(true);
        }, 2500);

        return () => clearTimeout(fallbackTimer);
    }, [pathname]);

    return isReady;
}

export default useIsNavigationReady;