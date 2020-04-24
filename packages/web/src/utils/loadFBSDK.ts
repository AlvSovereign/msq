const initFB = () => {
  const {
    REACT_APP_FACEBOOK_APP_ID,
    REACT_APP_FACEBOOK_APP_VERSION,
  } = process.env;

  window.fbAsyncInit = function() {
    window.FB.init({
      appId: `${REACT_APP_FACEBOOK_APP_ID}`,
      cookie: true,
      xfbml: true,
      version: `${REACT_APP_FACEBOOK_APP_VERSION}`,
    });

    window.FB.AppEvents.logPageView();
  };
};

const loadFBSDK = () => {
  (function(d, s, id) {
    if (d.getElementById(id)) {
      return;
    }

    let js: any;
    let fjs: any = d.getElementsByTagName(s)[0];

    js = d.createElement(s);
    js.id = id;
    js.async = true;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};

export { initFB, loadFBSDK };

declare var window: any;
