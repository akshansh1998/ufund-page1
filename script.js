<script src="https://kit.fontawesome.com/368651d9a2.js" crossorigin="anonymous"></script>
 
    /** This section is only needed once per page if manually copying **/
    if (typeof MauticSDKLoaded == 'undefined') {
        var MauticSDKLoaded = true;
        var head            = document.getElementsByTagName('head')[0];
        var script          = document.createElement('script');
        script.type         = 'text/javascript';
        script.src          = 'https://mautic.ufund.online/media/js/mautic-form.js?v09f1db76';
        script.onload       = function() {
            MauticSDK.onLoad();
        };
        head.appendChild(script);
        var MauticDomain = 'https://mautic.ufund.online';
        var MauticLang   = {
            'submittingMessage': "Please wait..."
        }
    }else if (typeof MauticSDK != 'undefined') {
        MauticSDK.onLoad();
    }
