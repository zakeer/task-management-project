import React from 'react';
import { connect, useStore } from 'react-redux';

function Register(props) {
    const store = useStore();
    const error = store.getState().error
    return <div>
        <h2>Register</h2>
        <pre>{JSON.stringify({ props, error }, null, 2)}</pre>
    </div>
}

const mapStateToProps = (data) => {
    return {
        data
    }
}

export default connect(mapStateToProps)(Register)