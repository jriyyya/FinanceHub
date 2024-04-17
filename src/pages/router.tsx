import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout";

import HomePage from "./HomePage/HomePage";
import ErrorPage from "./ErrorPage/ErrorPage";
import AccountPage from "./AccountPage/AccountPage";
import LeaderboardPage from "./LeaderboardPage/LeaderboardPage";
import CommunityPage from "./CommunityPage/CommunityPage";
import CoursePage from "./CoursePage/CoursePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout.Default />}>
        <Route index element={<HomePage />} />
        <Route element={<AccountPage />} path="/account" />
        <Route element={<LeaderboardPage />} path="/leaderboard" />
        <Route element={<CommunityPage />} path="/community" />
        <Route element={<CoursePage />} path="/course" />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

export default router;
