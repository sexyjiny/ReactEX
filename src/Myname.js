import React, { Component } from 'react';

class Myname extends Component {
    render() {
        return (
            <div>
                씨발 ! <b>{this.props.name}</b> 니미
            </div>
        );
    }
}

Myname.defaultProps = {
    name: '전상호'
};

export default Myname;