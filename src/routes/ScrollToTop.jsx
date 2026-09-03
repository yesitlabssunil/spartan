import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // const { pathname } = useLocation();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    //   behavior: "instant" // or remove this line
    });

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: location.pathname + location.search,
      });
    }
  }, [location]);
  // }, [pathname]);

  return null;
};

export default ScrollToTop;