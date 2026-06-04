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

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={
                <HomeScreen />
            } />

            <Route path="/blog" element={
                <BlogScreen />
            } />

            <Route path="/contact-us" element={
                <ContactScreen />
            } />

            <Route path="/approach" element={
                <ApproachScreen />
            } />

            <Route path="/compliance" element={
                <ComplianceScreen />
            } />

            <Route path="/industries" element={
                <IndustriesScreen />
            } />

            <Route path="/security" element={
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

        </Routes>
    </Router>
)

export default AppRouter