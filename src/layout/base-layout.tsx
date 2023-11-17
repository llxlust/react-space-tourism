import {Outlet,} from 'react-router-dom'
import Header from '../component/header/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from '../page/home-page/home-page'

export default function BaseLayOut(){
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}