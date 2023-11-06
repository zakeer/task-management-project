import React, { createRef } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { USER_ACTIONS } from '../../store/user/actions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = createRef(); // const formRef = useRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.formRef.current.querySelector("#username").value;
        const password = this.formRef.current.querySelector("#password").value;
        console.log({ username, password });
        this.props.login();
        // const LOGIN_ENDPOINT = `https://silver-telegram-4p4v4r9x75c99-5000.app.github.dev/login`
        // fetch(LOGIN_ENDPOINT, {
        //     method: "POST",
        //     body: JSON.stringify({username: 'zakeer579@gmail.com', password: '123456'}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(loginResponse => console.log(":: FETCH LOGIN ::", loginResponse));

        // axios
        //     .post(LOGIN_ENDPOINT, {username: 'zakeer579@gmail.com', password: '123456'})
        //     .then(res => console.log(":: AXIOS LOGIN ::", res.data));
    }

    render() {
        console.log(":: LOGIN :: PROPS ::", this.props)
        return <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
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
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    }
}

const mapStateToProps = (storeState) => {
    return {
        storeState,
        error: storeState.error
    }
}

const mapDispatchToProps = (dispatchFn) => {
    return {
        login: () => dispatchFn({ type: USER_ACTIONS.LOGIN_FAILURE, payload: 'SOME ERROR' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login); // <Login {...prevProps} storeState={{}} error={storeState.error} />