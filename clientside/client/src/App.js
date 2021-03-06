import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

//Import Components
import Navbar from './components/Navigation/Navbar/Navbar'
import Footer from './components/Navigation/Footer/Footer'
import Home from './components/Home/Home'
import TelephoneTable from './container/TelephoneTable/TelephoneTable'
import Login from './container/Login/Login'
import Dashboard from './container/Dashboard/Dashboard'
import PostPage from './container/Blog/PostPage/PostPage'
import BlogPage from './container/Blog/BlogPage/BlogPage'
import NoteBookTable from './container/NoteBookTable/NoteBookTable'
import CreatePage from './container/Blog/BlogPage/Sections/CreatePage'


// Auth
import Auth from './hoc/auth'
import DashboardRoutes from './container/Dashboard/DashboardRoutes'

class App extends Component {

  render() {

    // if (window.location.pathname === "/dashboard") {
    //   return <Route exact path="/dashboard" component={Dashboard} />
    // }

    return (
      < div >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/telephonelist" component={Auth(TelephoneTable, null)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/blog/post/:postId" component={Auth(PostPage, null)} />
          <Route exact path="/blog" component={Auth(BlogPage, null)} />

          <Route path="/dashboard" component={Auth(Dashboard, true)} exact />
          <Route path="/dashboard/createblog" ><Dashboard /></Route>
          <Route path="/dashboard/notebooklist"><Dashboard /></Route>
          <Route path="/dashboard/telephonelist"><Dashboard /></Route>

          {/* <Route exact path="/blog/create" component={Auth(CreatePage, true)} />
          <Route exact path="/notebooklist" component={Auth(NoteBookTable, true)} />
          <Route exact path="/dashboard" component={Auth(Dashboard, true)} />  */}
        </Switch>
        {/* <Footer /> */}
      </div >
    )
  }
}

export default App