import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login.jsx';
import Layout from './components/common/Layout.jsx';
import Dashboard from './components/pages/Dashboard.jsx';
import User from './components/pages/User.jsx';
import ContactEnquirys from './components/pages/ContactEnquirys.jsx';
import Newsletters from './components/pages/Newsletters.jsx';
import AddColor from './components/pages/AddColor.jsx';
import ViewColor from './components/pages/ViewColor.jsx';
import AddMaterial from './components/pages/AddMaterial.jsx';
import ViewMaterial from './components/pages/ViewMaterial.jsx';
import AddCategory from './components/pages/AddCategory.jsx';
import ViewCategory from './components/pages/ViewCategory.jsx';
import AddSubCategory from './components/pages/AddSubCategory.jsx';
import ViewSubCategory from './components/pages/ViewSubCategory.jsx';
import AddSubSubCategory from './components/pages/AddSubSubCategory.jsx';
import ViewSubSubCategory from './components/pages/ViewSubSubCategory.jsx';
import AddProduct from './components/pages/AddProduct.jsx';
import ProductItems from './components/pages/ProductItems.jsx';
import AddWhyChooseUs from './components/pages/AddWhyChooseUs.jsx';
import WhyChooseUsView from './components/pages/WhyChooseUsView.jsx';
import OrdersList from './components/pages/OrdersList.jsx';
import AddSlider from './components/pages/AddSlider.jsx';
import ViewSlider from './components/pages/ViewSlider.jsx';
import AddCountry from './components/pages/AddCountry.jsx';
import ViewCountry from './components/pages/ViewCountry.jsx';
import AddTestimonial from './components/pages/AddTestimonial.jsx';
import ViewTestimonial from './components/pages/ViewTestimonial.jsx';
import AddFaq from './components/pages/AddFaq.jsx';
import ViewFaq from './components/pages/ViewFaq.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user' element={<User />} />
          <Route path='/ContactEnquirys' element={<ContactEnquirys />} />
          <Route path='/Newsletters' element={<Newsletters />} />
          <Route path='/AddColor' element={<AddColor />} />
          <Route path='/ViewColor' element={<ViewColor />} />
          <Route path='/AddMaterial' element={<AddMaterial />} />
          <Route path='/ViewMaterial' element={<ViewMaterial />} />
          <Route path='/AddCategory' element={<AddCategory />} />
          <Route path='/ViewCategory' element={<ViewCategory />} />
          <Route path='/AddSubCategory' element={<AddSubCategory />} />
          <Route path='/ViewSubCategory' element={<ViewSubCategory />} />
          <Route path='/AddSubSubCategory' element={<AddSubSubCategory />} />
          <Route path='/ViewSubSubCategory' element={<ViewSubSubCategory />} />
          <Route path='/AddProduct' element={<AddProduct />} />
          <Route path='/ProductItems' element={<ProductItems />} />
          <Route path='/AddWhyChooseUs' element={<AddWhyChooseUs />} />
          <Route path='/WhyChooseUsView' element={<WhyChooseUsView />} />
          <Route path='/OrdersList' element={<OrdersList />} />
          <Route path='/AddSlider' element={<AddSlider />} />
          <Route path='/ViewSlider' element={<ViewSlider />} />
          <Route path='/AddCountry' element={<AddCountry />} />
          <Route path='/ViewCountry' element={<ViewCountry />} />
          <Route path='/AddTestimonial' element={<AddTestimonial />} />
          <Route path='/ViewTestimonial' element={<ViewTestimonial />} />
          <Route path='/AddFaq' element={<AddFaq />} />
          <Route path='/ViewFaq' element={<ViewFaq />} />

        </Route>

        <Route path='/' element={<Login />} />

      </Routes>

    </BrowserRouter>


  </StrictMode>,
)
