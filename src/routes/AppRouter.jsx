import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import BlogScreen from "../pages/BlogScreen";
import ContactScreen from "../pages/ContactScreen";
import ApproachScreen from "../pages/ApproachScreen";
import ComplianceScreen from "../pages/ComplianceScreen";
import IndustriesScreen from "../pages/IndustriesScreen";
import SecurityScreen from "../pages/SecurityScreen";
import CmmcScreen from "../pages/CmmcScreen";
import ResourcesScreen from "../pages/ResourcesScreen";
import AboutScreen from "../pages/AboutScreen";
import NotFoundRedirect from "./NotFoundRedirect";
import ScrollToTop from "./ScrollToTop";
import Faq from "../pages/Faq";
import ResourceDetailScreen from "../pages/ResourceDetailScreen";
import AllBlogs from "../pages/AllBlogs";

const AppRouter = () => (
    <Router>

        <ScrollToTop />


        <Routes>
            <Route path="/" element={
                <HomeScreen />
            } />

            {/* <Route path="/blog" element={
                <BlogScreen />
            } /> */}
            <Route path="/blog/:slug" element={
                <BlogScreen />
            } />

            <Route path="/contact-us" element={
                <ContactScreen />
            } />

            <Route path="/approach" element={
                <ApproachScreen />
            } />

            <Route path="/compliance-systems" element={
                <ComplianceScreen />
            } />

            <Route path="/industries" element={
                <IndustriesScreen />
            } />

            <Route path="/microsoft-365-security" element={
                <SecurityScreen />
            } />

            <Route path="/cmmc" element={
                <CmmcScreen />
            } />

            <Route path="/resources" element={
                <ResourcesScreen />
            } />

            <Route path="/about" element={
                <AboutScreen/ >
            } />

            <Route path="/faq" element={
                <Faq />
            } />
            <Route path="/blogs" element={
                <AllBlogs />
            } />

            <Route path="/resource/:slug" element={
                <ResourceDetailScreen />
            } />

            <Route path="*" element={
                <NotFoundRedirect />
            } />

        </Routes>
    </Router>
)

export default AppRouter