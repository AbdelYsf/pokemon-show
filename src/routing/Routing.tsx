import { Route, Routes } from "react-router-dom";
import { RouteDetails, ROUTES } from ".";

const routeMapper = (route: RouteDetails) => {
  const Component = route.component;
  return <Route path={route.path} element={<Component />} key={route.path} />;
};
const Routing = () => {
  return (
    <Routes>
      {Object.values(ROUTES).map(routeMapper)}
    </Routes>
  );
};

export default Routing;

