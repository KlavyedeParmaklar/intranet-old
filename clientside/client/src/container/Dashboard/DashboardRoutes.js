import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Home from '../../components/Home/Home' // Make for dashboard home!!!
import NoteBookTable from '../NoteBookTable/NoteBookTable'
import CreateBlog from '../Blog/BlogPage/Sections/CreatePage'

export default class DashboardRoutes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/dashboard" component={Home} />
                    <Route exact path="/dashboard/notebooklist" component={NoteBookTable} />
                    <Route exact path="/dashboard/createblog" component={CreateBlog} />
                </Switch>
            </div>
        )
    }
}
