import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import SellYourAc from './pages/SellYourAc'
import HowItWorks from './pages/HowItWorks'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="buy" element={<Buy />} />
        <Route path="sell" element={<Sell />} />
        <Route path="sell-your-ac" element={<SellYourAc />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}
