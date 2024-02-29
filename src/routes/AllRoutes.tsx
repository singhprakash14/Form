
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loading from "../components/Loading";

const UserForm = lazy(() => import("../pages/UserForm"));
const UserList = lazy(() => import("../pages/user/UserList"));

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading/>}>
            <UserForm />
          </Suspense>
        }
      />
      <Route
        path="/users-list"
        element={
          <Suspense fallback={<Loading/>}>
            <UserList />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default AllRoutes;

