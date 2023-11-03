import React from 'react';
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Login</h1>
            <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </div>
    }
}

const mapStateToProps = (storeState) => {
    return {
        storeState,
        error: storeState.error
    }
}

export default connect(mapStateToProps)(Login); // <Login {...prevProps} storeState={{}} error={storeState.error} />