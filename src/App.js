import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home/index"));
const Login = lazy(() => import("./Pages/Login/index"));
const PageNotFound = lazy(() => import("./Pages/404/index"));

function App() {
  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path="/" element={<Home pageTitle="Home" />}></Route>
          <Route path="/login" element={<Login pageTitle="Login" />}></Route>
          <Route path="/register" element={<Login pageTitle="Login" />}></Route>
          <Route path="/register-coporate" element={<Login pageTitle="Login" />}></Route>
          <Route path="/register-institute" element={<Login pageTitle="Login" />}></Route>
          <Route path="/register-prof" element={<Login pageTitle="Login" />}></Route>
          <Route path="/register-hand" element={<Login pageTitle="Login" />}></Route>
          <Route path="/register-individuals" element={<Login pageTitle="Login" />}></Route>
          <Route path="/why-us" element={<Login pageTitle="Login" />}></Route>
          <Route path="/goals" element={<Login pageTitle="Login" />}></Route>
          <Route path="/contact-us" element={<Login pageTitle="Login" />}></Route>
          <Route path="/individuals" element={<Login pageTitle="Login" />}></Route>
          <Route path="/career-service" element={<Login pageTitle="Login" />}></Route>
          <Route path="/personal-services" element={<Login pageTitle="Login" />}></Route>
          <Route path="/handicraft" element={<Login pageTitle="Login" />}></Route>
          <Route path="/scientific" element={<Login pageTitle="Login" />}></Route>
          <Route path="/institute" element={<Login pageTitle="Login" />}></Route>
          <Route path="/corporate" element={<Login pageTitle="Login" />}></Route>
          <Route path="/news" element={<Login pageTitle="Login" />}></Route>
          <Route path="/ads" element={<Login pageTitle="Login" />}></Route>
          <Route path="/profile-individual" element={<Login pageTitle="Login" />}></Route>
          <Route path="/notifications" element={<Login pageTitle="Login" />}></Route>
          <Route path="/change-password" element={<Login pageTitle="Login" />}></Route>
          <Route path="/profile-handicraft" element={<Login pageTitle="Login" />}></Route>
          <Route path="/profile-scientific" element={<Login pageTitle="Login" />}></Route>
          <Route path="/profile-institute" element={<Login pageTitle="Login" />}></Route>
          <Route path="/visitor" element={<Login pageTitle="Login" />}></Route>
          <Route path="/corporate/service1" element={<Login pageTitle="Login" />}></Route>
          <Route path="/corporate/service2" element={<Login pageTitle="Login" />}></Route>
          <Route path="/corporate/service3" element={<Login pageTitle="Login" />}></Route>
          <Route path="/corporate/service4" element={<Login pageTitle="Login" />}></Route>
          <Route path="/corporate/service5" element={<Login pageTitle="Login" />}></Route>
          <Route path="/corporate/service6" element={<Login pageTitle="Login" />}></Route>
          <Route path="/corporate/service7" element={<Login pageTitle="Login" />}></Route>
          <Route path="/corporate/service8" element={<Login pageTitle="Login" />}></Route>
          <Route path="/handicraft/service1" element={<Login pageTitle="Login" />}></Route>
          <Route path="/handicraft/service2" element={<Login pageTitle="Login" />}></Route>
          <Route path="/handicraft/service3" element={<Login pageTitle="Login" />}></Route>
          <Route path="/handicraft/service4" element={<Login pageTitle="Login" />}></Route>
          <Route path="/handicraft/service5" element={<Login pageTitle="Login" />}></Route>
          <Route path="/handicraft/service6" element={<Login pageTitle="Login" />}></Route>
          <Route path="/handicraft/service7" element={<Login pageTitle="Login" />}></Route>
          <Route path="/handicraft/service8" element={<Login pageTitle="Login" />}></Route>
          <Route path="/institute/service1" element={<Login pageTitle="Login" />}></Route>
          <Route path="/institute/service2" element={<Login pageTitle="Login" />}></Route>
          <Route path="/institute/service3" element={<Login pageTitle="Login" />}></Route>
          <Route path="/institute/service4" element={<Login pageTitle="Login" />}></Route>
          <Route path="/institute/service5" element={<Login pageTitle="Login" />}></Route>
          <Route path="/institute/service6" element={<Login pageTitle="Login" />}></Route>
          <Route path="/institute/service7" element={<Login pageTitle="Login" />}></Route>
          <Route path="/institute/service8" element={<Login pageTitle="Login" />}></Route>
          <Route path="/scientific/service1" element={<Login pageTitle="Login" />}></Route>
          <Route path="/scientific/service2" element={<Login pageTitle="Login" />}></Route>
          <Route path="/scientific/service3" element={<Login pageTitle="Login" />}></Route>
          <Route path="/scientific/service4" element={<Login pageTitle="Login" />}></Route>
          <Route path="/scientific/service5" element={<Login pageTitle="Login" />}></Route>
          <Route path="/scientific/service6" element={<Login pageTitle="Login" />}></Route>
          <Route path="/scientific/service7" element={<Login pageTitle="Login" />}></Route>
          <Route path="/scientific/service8" element={<Login pageTitle="Login" />}></Route>
          <Route path="/career-services/service1" element={<Login pageTitle="Login" />}></Route>
          <Route path="/career-services/service2" element={<Login pageTitle="Login" />}></Route>
          <Route path="/career-services/service3" element={<Login pageTitle="Login" />}></Route>
          <Route path="/career-services/service4" element={<Login pageTitle="Login" />}></Route>
          <Route path="/career-services/service5" element={<Login pageTitle="Login" />}></Route>
          <Route path="/career-services/service6" element={<Login pageTitle="Login" />}></Route>
          <Route path="/personal-services/service1" element={<Login pageTitle="Login" />}></Route>
          <Route path="/personal-services/service2" element={<Login pageTitle="Login" />}></Route>
          <Route path="/personal-services/service3" element={<Login pageTitle="Login" />}></Route>
          <Route path="/personal-services/service4" element={<Login pageTitle="Login" />}></Route>
          <Route path="/personal-services/service5" element={<Login pageTitle="Login" />}></Route>
          <Route path="*" element={<PageNotFound pageTitle="Page Not Found" />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
