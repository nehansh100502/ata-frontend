import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LandingPage from "./pages/LandingPage";
import Category from "./pages/Category";
import Coach from "./pages/Coach";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import CoachProfile from "./pages/CoachProfile";
import CoachProfileWithRatings from "./pages/CoachProfileWithRatings";
import CoachChat from "./pages/CoachChat";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/category":
        title = "";
        metaDescription = "";
        break;
      case "/coach":
        title = "";
        metaDescription = "";
        break;
      case "/login1":
        title = "";
        metaDescription = "";
        break;
      case "/signup1":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/coach-profile":
        title = "";
        metaDescription = "";
        break;
      case "/coachprofile-with-ratings":
        title = "";
        metaDescription = "";
        break;
      case "/coach-chat":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/landing-page-1" element={<LandingPage />} />
      <Route path="/category" element={<Category />} />
      <Route path="/coach" element={<Coach />} />
      <Route path="/login1" element={<Login />} />
      <Route path="/signup1" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/coach-profile" element={<CoachProfile />} />
      <Route
        path="/coachprofile-with-ratings"
        element={<CoachProfileWithRatings />}
      />
      <Route path="/coach-chat" element={<CoachChat />} />
    </Routes>
  );
}
export default App;
