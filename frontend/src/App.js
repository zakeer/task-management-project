import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import ProductList from './components/ProductList'
import appStore from './store/store'
import Login from './components/users/Login'
import Register from './components/users/Register'
import Header from './components/common/Header';
import AuthRoute from './components/hoc/authRoutes'
import Logout from './components/users/Logout'
import('preline');


const LoginView = AuthRoute({ component: Login, protectedRoute: false });
const RegisterView = AuthRoute({ component: Register, protectedRoute: false });
const TaskView = AuthRoute({ component: () => <h1>Task View</h1>, protectedRoute: true });

export default function App() {
    return (
        <Provider store={appStore}>
            <div className="container max-w-2xl">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/tasks" element={<TaskView />}></Route>
                        <Route path="/login" element={<LoginView />}></Route>
                        <Route path="/register" element={<RegisterView />}></Route>
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    )
}
