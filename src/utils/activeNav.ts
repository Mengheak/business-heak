import { useLocation } from "react-router-dom";
export function useIsActiveNav(path: any, exact = false) {
  const location = useLocation();

  if (exact) {
    return location.pathname === path;
  } else {
    return location.pathname.startsWith(path);
  }
}
