import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./profile/ProfileDetails";
import ProfileSettings from "./profile/ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
