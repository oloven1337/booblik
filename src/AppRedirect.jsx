import React, { useEffect } from 'react';
import { isIOS, isAndroid } from 'react-device-detect';

const AppRedirect = () => {
    useEffect(() => {
        const playStoreUrl = 'https://play.google.com/store/apps/details?id=kg.geekstudio.booblik.android';

        function isStandaloneMode() {
            return ('standalone' in window.navigator) && (window.navigator.standalone);
        }

        // Проверяем, является ли запрос универсальной ссылкой
        function isUniversalLink() {
            return document.referrer.includes('apple-app-site-association');
        }

        if (isAndroid) {
            setTimeout(() => {
                window.location.href = playStoreUrl;
            }, 250);
        } else if (isIOS) {
            setTimeout(() => {
                if (!isStandaloneMode() && !isUniversalLink()) {
                    window.location.href = 'https://apps.apple.com/us/app/%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D1%8F-%D0%B1%D1%83%D0%B1%D0%BB%D0%B8%D0%BA/id1481448597';
                }
            }, 250);
        }
    }, []);

    return <div>Redirecting...</div>;
};

export default AppRedirect;
