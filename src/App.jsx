import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Website Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Website Pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import About from './pages/About';
import HowToSell from './pages/HowToSell';
import Subscriptions from './pages/Subscriptions';
import PublishAd from './pages/PublishAd';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import MyProfile from './pages/MyProfile';
import SellerProfile from './pages/SellerProfile';
import Chat from './pages/Chat';

// Mobile App Layout & Pages
import MobileAppShell from './mobile/layouts/MobileAppShell';
import MobileHome from './mobile/pages/MobileHome';
import MobileSearch from './mobile/pages/MobileSearch';
import MobileProduct from './mobile/pages/MobileProduct';
import MobileFavorites from './mobile/pages/MobileFavorites';
import MobilePublish from './mobile/pages/MobilePublish';
import MobileInbox from './mobile/pages/MobileInbox';
import MobileChat from './mobile/pages/MobileChat';
import MobileProfile from './mobile/pages/MobileProfile';
import MobileWarehouse from './mobile/pages/MobileWarehouse';
import MobileLogin from './mobile/pages/MobileLogin';
import MobileRegister from './mobile/pages/MobileRegister';
import MobileSubscription from './mobile/pages/MobileSubscription';
import MobilePayments from './mobile/pages/MobilePayments';
import MobileAddresses from './mobile/pages/MobileAddresses';
import MobileAccountData from './mobile/pages/MobileAccountData';
import MobileSecurity from './mobile/pages/MobileSecurity';
import MobileNegotiations from './mobile/pages/MobileNegotiations';

// Website Layout wrapper
const WebsiteLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

function App() {
    return (
        <Router>
            <Routes>
                {/* Website Routes */}
                <Route path="/" element={<WebsiteLayout><Home /></WebsiteLayout>} />
                <Route path="/catalogo" element={<WebsiteLayout><Catalog /></WebsiteLayout>} />
                <Route path="/produto/:id" element={<WebsiteLayout><Product /></WebsiteLayout>} />
                <Route path="/sobre" element={<WebsiteLayout><About /></WebsiteLayout>} />
                <Route path="/como-vender" element={<WebsiteLayout><HowToSell /></WebsiteLayout>} />
                <Route path="/subscricoes" element={<WebsiteLayout><Subscriptions /></WebsiteLayout>} />
                <Route path="/publicar" element={<WebsiteLayout><PublishAd /></WebsiteLayout>} />
                <Route path="/login" element={<WebsiteLayout><Login /></WebsiteLayout>} />
                <Route path="/registar" element={<WebsiteLayout><Register /></WebsiteLayout>} />
                <Route path="/recuperar-password" element={<WebsiteLayout><ForgotPassword /></WebsiteLayout>} />
                <Route path="/perfil" element={<WebsiteLayout><MyProfile /></WebsiteLayout>} />
                <Route path="/vendedor/:id" element={<WebsiteLayout><SellerProfile /></WebsiteLayout>} />
                <Route path="/chat/:id" element={<WebsiteLayout><Chat /></WebsiteLayout>} />

                {/* Mobile App Routes - All wrapped in MobileAppShell */}
                <Route path="/mobile" element={<MobileAppShell />}>
                    <Route index element={<MobileHome />} />
                    <Route path="search" element={<MobileSearch />} />
                    <Route path="product/:id" element={<MobileProduct />} />
                    <Route path="favorites" element={<MobileFavorites />} />
                    <Route path="publish" element={<MobilePublish />} />
                    <Route path="inbox" element={<MobileInbox />} />
                    <Route path="chat/:id" element={<MobileChat />} />
                    <Route path="profile" element={<MobileProfile />} />
                    <Route path="warehouse" element={<MobileWarehouse />} />
                    <Route path="login" element={<MobileLogin />} />
                    <Route path="register" element={<MobileRegister />} />
                    <Route path="subscription" element={<MobileSubscription />} />
                    <Route path="payments" element={<MobilePayments />} />
                    <Route path="addresses" element={<MobileAddresses />} />
                    <Route path="account-data" element={<MobileAccountData />} />
                    <Route path="security" element={<MobileSecurity />} />
                    <Route path="negotiations" element={<MobileNegotiations />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
