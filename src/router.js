import HomePage from "./pages/user/homePage";
import MasterLayout from "./pages/user/theme/masterLayout";
import { ROUTERS } from "./utils/router";
import { Routes, Route } from "react-router-dom";
const RenderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage></HomePage>,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const CustomRouter = () => {
  return RenderUserRouter();
};
export default CustomRouter;
