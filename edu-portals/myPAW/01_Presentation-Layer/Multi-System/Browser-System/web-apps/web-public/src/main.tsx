import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/global.css";

import Index from "./pages/index";
import SignUp from "./pages/account/Sign-Up";
import EmailVerification from "./pages/account/Email-Verification";
import LogIn from "./pages/account/Log-In";
import GetProfile from "./pages/account/Get-Profile";
import UpdateProfile from "./pages/account/Update-Profile";
import ChangeEmail from "./pages/account/Change-Email";
import ChangePassword from "./pages/account/Change-Password";
import PasswordRecoveryRequest from "./pages/account/Password-Recovery-Request";
import PasswordRecoveryExecute from "./pages/account/Password-Recovery-Execute";
import LogOut from "./pages/account/Log-Out";
import DeleteAccount from "./pages/account/Delete-Account";
import ResendVerification from "./pages/account/Resend-Verification";

const BASE = "/edu-portals/myPAW";

function Shell() {
  return (
    <div className="mypaw-shell">
      <header className="mypaw-header">
        <Link className="mypaw-brand" to="/">SheStacksIT / myPAW</Link>
        <nav className="mypaw-nav">
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/log-in">Log In</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/log-out">Log Out</Link>
        </nav>
      </header>

      <main className="mypaw-main">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/profile" element={<GetProfile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/change-email" element={<ChangeEmail />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/password-recovery-request" element={<PasswordRecoveryRequest />} />
          <Route path="/password-recovery-execute" element={<PasswordRecoveryExecute />} />
          <Route path="/log-out" element={<LogOut />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/resend-verification" element={<ResendVerification />} />
        </Routes>
      </main>

      <footer className="mypaw-footer">
        myPAW Portal by SheStacksIT
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE}>
      <Shell />
    </BrowserRouter>
  </React.StrictMode>
);
