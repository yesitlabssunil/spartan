import { useLocation, Navigate } from "react-router-dom";

const TrailingSlashRedirect = ({ children }) => {
  const location = useLocation();

  // If URL has a trailing slash and is NOT the root homepage ("/")
  if (location.pathname.endsWith("/") && location.pathname.length > 1) {
    const cleanPath = location.pathname.slice(0, -1);
    
    return (
      <Navigate 
        to={`${cleanPath}${location.search}${location.hash}`} 
        replace 
      />
    );
  }

  return children;
};

export default TrailingSlashRedirect;