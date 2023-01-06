import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { AboutPage } from './modules/user/pages/About';
import { BlogPage } from './modules/user/pages/Blog';
import { BlogDetailsPage } from './modules/user/pages/BlogDetails';
import { ExplorePage } from './modules/user/pages/Explore';
 import { UserHomePage } from './modules/user/pages/Home';
 import { BookingPage } from './modules/user/pages/Booking';
// import { LoginPage } from './modules/user/pages/Login';
// import { AdminHome } from './modules/admin/pages/Home';
// import { AdminCreateBlogPage } from './modules/admin/pages/CreateBlog';
// import { AdminEditBlogPage } from './modules/admin/pages/EditBlog';
// import ProtectedRoute from './components/ProtectedRoute';
import PhotoGallery from './modules/user/pages/Home/components/PhotoGallery/PhotoGallery';
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={UserHomePage} />
        <Route exact path='/explore' component={ExplorePage} />
        <Route exact path='/blog' component={BlogPage} />
        <Route exact path='/blog/:id' component={BlogDetailsPage} />
        <Route exact path='/about' component={AboutPage} /> 
        <Route exact path='/photogallery' component={PhotoGallery} />
         <Route exact path='/booking' component={BookingPage} />
        {/*<Route exact path='/login' component={LoginPage} />
        <ProtectedRoute path='/admin/home' component={AdminHome} />
        <ProtectedRoute path='/admin/blog/create' component={AdminCreateBlogPage} />
        <ProtectedRoute path='/admin/blog/edit/:id' component={AdminEditBlogPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}
