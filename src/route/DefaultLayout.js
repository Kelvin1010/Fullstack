import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/topbar/Topbar'
import NewUser from '../pages/createUser/NewUser'
import Home from '../pages/home/Home'
import NewProduct from '../pages/newproduct/NewProduct'
import Product from '../pages/product/Product'
import ProductList from '../pages/productlist/ProductList'
import User from '../pages/user/User'
import UserList from '../pages/userList/UserList'
import myRoutes from './route'

function DefaultLayout() {
    return (
        <>
            <Topbar/>
            <div className='container'>
                <Sidebar />
                <Routes>
                    <Route exact path='/' element={ <Home /> }  />
                    <Route path='/users' element={ <UserList /> } />
                    <Route path='/user/:userId' element={ <User /> } />
                    <Route path='/createUser' element={ <NewUser /> } />
                    <Route path='/product/:productsId' element={ <Product /> } />
                    <Route path='/products' element={ <ProductList /> } />
                    <Route path='/newproduct' element={ <NewProduct /> } />
                </Routes>
            </div>
        </>
    )
}

export default DefaultLayout