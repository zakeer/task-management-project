import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/users/Login'
import Register from './components/users/Register'
import Header from './components/common/Header'
import Logout from './components/users/Logout'
import { ProtectedRoute } from './components/common/ProtectedRoute'
import AddCategory from './components/category/AddCategory'
import CategoryList from './components/category/CategoryList'
import TaskList from './components/tasks/TaskList'
import AddTask from './components/tasks/AddTask'
import('preline')

export default function App() {
    return (
        <div className="container max-w-2xl">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/logout" element={<Logout />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path="/tasks" element={<TaskList />}></Route>
                        <Route path="/tasks/edit/:taskId" element={<AddTask edit />}></Route>
                        <Route path="/add-task" element={<AddTask />}></Route>
                        <Route path="/categories" element={<CategoryList />}></Route>
                        <Route path="/add-category" element={<AddCategory />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
