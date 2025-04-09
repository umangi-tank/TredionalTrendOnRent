import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./USER/Home_page";
import OurStory_page from "./USER/OurStory_page";
import Our_team_page from "./USER/Our_team_page";
import Contact_us from "./USER/Contact_us_page";
import Login_page from "./USER/Login_page";
import OurStory_description from "./USER/Our_story_description";
import Admin_login from "./ADMIN/admin_login";
import Signup from "./USER/signup_page";
import ForgetPasswordPage from "./USER/ForgetPasswordPage";
import Admin_dashboard_page from "./ADMIN/Admin_dashboard_page";
import AddCollection_page from "./ADMIN/AddCollection_page";
import UserRegistrationPage from "./ADMIN/UserRegistrationPage";
import PaymentHistoryPage from "./ADMIN/PaymentHistoryPage";
import ManageCollectionPage from "./ADMIN/ManageCollectionPage";
import CustomerBookingPage from "./ADMIN/CustomerBookingPage";
import EditBookingPage from "./ADMIN/EditBookingPage";
import WeDellinPage from "./USER/WeDellinPage";
import AfterDashboardPage from "./AFTERLOGIN/AfterDashboardPage";
import AWeDellInPage from "./AFTERLOGIN/AWeDellInPage";
import EventCategoriesPage1 from "./AFTERLOGIN/EventCategories1";
import EventCategoriesPage2 from "./AFTERLOGIN/EventCategories2";
import EventCategoriesPage3 from "./AFTERLOGIN/EventCategories3";
import MyBookingPage from "./AFTERLOGIN/MyBookingPage";
import WhishListPage from "./AFTERLOGIN/WhishListPage";
import CategoriesBookingPage from "./AFTERLOGIN/CategoriesBookingPage";
import UserProfilePage from "./AFTERLOGIN/UserProfilePage";
import EditCollectionPage from "./AFTERLOGIN/EditCollectionPage";
import AdminProfile from "./ADMIN/AdminProfile";

function App() {
  return (
    
      <Router>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurStory_page" element={<OurStory_page />} />
          <Route path="/Login_page" element={<Login_page />} />
          <Route path="/Our_team_page" element={<Our_team_page/>} />
          <Route path="/Contact_us" element={<Contact_us/>} />
          <Route path="Our_story_description" element={<OurStory_description/>} />
          <Route path="/admin_login" element={<Admin_login />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/ForgetPasswordPage" element={<ForgetPasswordPage />} />
          <Route path="/Admin_dashboard_page" element={<Admin_dashboard_page />} />
          <Route path="/AddCollection_page" element={<AddCollection_page />} />
          <Route path="/UserRegistrationPage" element={<UserRegistrationPage />} />
          <Route path="/PaymentHistoryPage" element={<PaymentHistoryPage />} />
          <Route path="/ManageCollectionPage" element={<ManageCollectionPage />} />
          <Route path="/CustomerBookingPage" element={<CustomerBookingPage />} />
          <Route path="/EditBookingPage" element={<EditBookingPage/>} />
          <Route path="/WeDellinPage" element={<WeDellinPage/>} />
          <Route path="/AfterDashboardPage" element={<AfterDashboardPage/>} />
          <Route path="/AWeDellInPage" element={<AWeDellInPage/>} />
          <Route path="/EventCategoriesPage1" element={<EventCategoriesPage1/>} />
          <Route path="/EventCategoriesPage2" element={<EventCategoriesPage2/>} />
          <Route path="/EventCategoriesPage3" element={<EventCategoriesPage3/>} />
          <Route path="/MyBookingPage" element={<MyBookingPage/>} />
          <Route path="/WhishListPage" element={<WhishListPage/>} />
          <Route path="/CategoriesBookingPage" element={<CategoriesBookingPage/>} />
          <Route path="/UserProfilePage" element={<UserProfilePage/>} />
          <Route path="/EditCollectionPage" element={<EditCollectionPage/>} />
          <Route path="/AdminProfile" element={<AdminProfile/>} />

        </Routes>
      </Router>
    
  );
}

export default App;