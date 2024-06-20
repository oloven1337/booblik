import React, { useEffect } from 'react';
import { isIOS, isAndroid } from 'react-device-detect';

const AppRedirect = () => {
    useEffect(() => {
        const playStoreUrl = 'https://play.google.com/store/apps/details?id=kg.geekstudio.booblik.android';
        const appStoreUrl = 'https://apps.apple.com/us/app/%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D1%8F-%D0%B1%D1%83%D0%B1%D0%BB%D0%B8%D0%BA/id1481448597';

        const androidAppUrl = 'intent://kg.geekstudio.booblik.android#Intent;scheme=kg.geekstudio.booblik.android;package=kg.geekstudio.booblik.android;end';
        const iosAppUrl = 'music://';

        function isStandaloneMode() {
            return ('standalone' in window.navigator) && (window.navigator.standalone);
        }

        function isUniversalLink() {
            return document.referrer.includes('apple-app-site-association');
        }

        const openApp = (url, fallbackUrl) => {
            const start = new Date().getTime();
            window.location.href = url;

            setTimeout(() => {
                const end = new Date().getTime();
                if (end - start < 1500) {
                    window.location.href = fallbackUrl;
                }
            }, 1000);
        };

        if (isAndroid) {
            openApp(androidAppUrl, playStoreUrl);
        } else if (isIOS) {
            if (!isStandaloneMode() && !isUniversalLink()) {
                openApp(iosAppUrl, appStoreUrl);
            }
        }
    }, []);

    return <div>Redirecting...</div>;
};

export default AppRedirect;
