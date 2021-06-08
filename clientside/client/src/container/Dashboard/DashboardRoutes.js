import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Home from '../../components/Home/Home' // Make for dashboard home!!!
import NoteBookTable from '../NoteBookTable/NoteBookTable'
import CreateBlog from '../Blog/BlogPage/Sections/CreatePage'
import TelephoneTableDS from '../TelephoneTable/TelephoneTableDashboard/TelephoneTableDS'

export default class DashboardRoutes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/dashboard" component={Home} />
                    <Route path="/dashboard/telephonelist" component={TelephoneTableDS} />
                    <Route path="/dashboard/notebooklist" component={NoteBookTable} />
                    <Route path="/dashboard/createblog" component={CreateBlog} />
                </Switch>
            </div>
        )
    }
}
