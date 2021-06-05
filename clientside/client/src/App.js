import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

//Import Components
import Navbar from './components/Navigation/Navbar/Navbar'
import Footer from './components/Navigation/Footer/Footer'
import Home from './components/Home/Home'
import NoteBookTable from './container/NoteBookTable/NoteBookTable'
import TelephoneTable from './container/TelephoneTable/TelephoneTable'
import Login from './container/Login/Login'
import Dashboard from './container/Dashboard/Dashboard'
import PostPage from './container/Blog/PostPage/PostPage'
import BlogPage from './container/Blog/BlogPage/BlogPage'
import CreatePage from './container/Blog/BlogPage/Sections/CreatePage'

// Auth
import Auth from './hoc/auth'

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
          <Route exact path="/notebooklist" component={NoteBookTable} />
          <Route exact path="/telephonelist" component={TelephoneTable} />
          <Route exact path="/dashboard" component={Auth(Dashboard, true)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/blog/post/:postId" component={PostPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/blog/create" component={CreatePage} />
        </Switch>
        <Footer />
      </div >
    )
  }
}

export default App