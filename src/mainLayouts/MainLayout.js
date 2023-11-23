import React, {Component} from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../components/Comments/Comments";
import {Cars} from "../components/Cars/Cars";

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Outlet/>
                <Comments/>
                <Cars/>
            </div>

        )
    }
}

export {
    MainLayout
}