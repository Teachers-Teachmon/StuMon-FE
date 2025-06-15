import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import RootLayout from './components/layout/RootLayout/index.tsx'
import MainPage from './pages/mainPage/index.tsx'
import AlertPage from './pages/mainPage/alert/index.tsx'
import LeaveSeat from "./pages/leave-seat";
import { LeaveSeatFormLocation } from "./pages/leave-seat/form/location";
import LeaveSeatFormTime from "./pages/leave-seat/form/time";
import LeaveSeatFormStudent from "./pages/leave-seat/form/student";
import Landing from "./pages/landing";
import ProfilePage from './pages/profile/index.tsx'
import Supervision from './pages/supervision/index.tsx'
import { Global, css } from '@emotion/react';

createRoot(document.getElementById('root')!).render(
  <>
    <Global
      styles={css`
        html, body {
          margin: 0;
          padding: 0;
        }
        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        h1 {
          margin: 0;
        }
      `}
    />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/main/alert" element={<AlertPage />} />
          <Route path="/Leaveseat" element={<LeaveSeat />} />
          <Route path="/Leaveseat/form/location" element={<LeaveSeatFormLocation />} />
          <Route path="/Leaveseat/form/time" element={<LeaveSeatFormTime />} />
          <Route path="/Leaveseat/form/student" element={<LeaveSeatFormStudent />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/supervision" element={<Supervision />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>

)
