import NewUser from "../pages/createUser/NewUser";
import Home from "../pages/home/Home";
import NewProduct from "../pages/newproduct/NewProduct";
import Product from "../pages/product/Product";
import ProductList from "../pages/productlist/ProductList";
import User from "../pages/user/User";
import UserList from "../pages/userList/UserList";



const myRoutes = [
    {path: "/users", conponent: <UserList />},
    {path: "/user/:userId", conponent: <User />},
    {path: "/createUser", conponent: <NewUser />},
    {path: "/product/:productsId", conponent: <Product />},
    {path: "/products", conponent: <ProductList />},
    {path: "/newproduct", conponent: <NewProduct />},
]

export default myRoutes