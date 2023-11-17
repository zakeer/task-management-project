import React, { useRef } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { doRegister } from '../../store/user/actions'

function Register(props) {
    // const store = useStore();
    // const error = store.getState().error
    const storeState = useSelector(state => state)
    const error = useSelector(state => state.error)
    const token = useSelector(state => state.token)
    const formRef = useRef()
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const username = formRef.current.querySelector('#username').value
        const password = formRef.current.querySelector('#password').value
        doRegister(dispatch)({ username, password })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
                    <pre>{JSON.stringify({ storeState, error, token }, null, 1)}</pre>
                </div>
                <form ref={formRef} className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = data => {
    return {
        data,
    }
}

export default connect(mapStateToProps)(Register)
