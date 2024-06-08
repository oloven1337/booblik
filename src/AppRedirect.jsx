import React, { useEffect } from 'react';
import { isIOS, isAndroid } from 'react-device-detect';

const AppRedirect = () => {
    useEffect(() => {
        // const androidScheme = 'your-android-app-scheme://';
        // const iosScheme = 'your-ios-app-scheme://'; //
        const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.bublik.app&hl=ru&gl=US'; // замените на URL вашего Android приложения в Play Market
        const appStoreUrl = 'https://apps.apple.com/us/app/%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D1%8F-%D0%B1%D1%83%D0%B1%D0%BB%D0%B8%D0%BA/id1481448597'; // замените на URL вашего iOS приложения в App Store

        if (isAndroid) {
            console.log(1)
            // window.location.href = androidScheme;
            setTimeout(() => {
                window.location.href = playStoreUrl;
            }, 250);
        } else if (isIOS) {
            console.log(2)
            // window.location.href = iosScheme;
            setTimeout(() => {
                window.location.href = appStoreUrl;
            }, 250);
        }
    }, []);

    return <div>Redirecting...</div>;
};

export default AppRedirect;
