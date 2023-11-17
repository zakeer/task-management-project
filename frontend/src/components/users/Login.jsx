import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../../store/user/actions'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.formRef = createRef() // const formRef = useRef();
    }

    handleSubmit = e => {
        e.preventDefault()
        const username = this.formRef.current.querySelector('#username').value
        const password = this.formRef.current.querySelector('#password').value
        this.props.login({ username, password })
    }

    render() {
        console.log(':: LOGIN :: PROPS ::', this.props)
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    </div>
                    <form ref={this.formRef} className="mt-8 space-y-6" onSubmit={this.handleSubmit}>
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
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        storeState,
        error: storeState.error,
    }
}

const mapDispatchActionsToProps = dispatch => {
    return {
        dispatch,
        login: doLogin(dispatch), // () => {}
    }
}

export default connect(mapStateToProps, mapDispatchActionsToProps)(Login) // <Login {...prevProps} storeState={{}} error={storeState.error} />
