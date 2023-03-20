import React, { useEffect } from 'react';

declare global {
  interface Window {
    kommunicate: any;
  }
}

interface KommunicateProps {}

const Kommunicate: React.FC<KommunicateProps> = (props) => {
  useEffect(() => {
    (function(d, m){
      const kommunicateSettings = 
          {"appId":"13a81a1582f8ad5ef68c961d1dd5915e","popupWidget":true,"automaticChatOpenOnNavigation":true};
      const s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      const h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return (
    <div>
    
    </div>
  );
}

export default Kommunicate;