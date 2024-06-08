import React, { useEffect } from 'react';
import { isIOS, isAndroid } from 'react-device-detect';

const AppRedirect = () => {
    useEffect(() => {
        const androidScheme = 'your-android-app-scheme://'; // замените на схему вашего Android приложения
        const iosScheme = 'your-ios-app-scheme://'; // замените на схему вашего iOS приложения
        const playStoreUrl = 'https://play.google.com/store/apps/details?id=your.android.app.id'; // замените на URL вашего Android приложения в Play Market
        const appStoreUrl = 'https://apps.apple.com/us/app/your-ios-app-id'; // замените на URL вашего iOS приложения в App Store

        if (isAndroid) {
            window.location.href = androidScheme;
            setTimeout(() => {
                window.location.href = playStoreUrl;
            }, 250);
        } else if (isIOS) {
            window.location.href = iosScheme;
            setTimeout(() => {
                window.location.href = appStoreUrl;
            }, 250);
        }
    }, []);

    return <div>Redirecting...</div>;
};

export default AppRedirect;
