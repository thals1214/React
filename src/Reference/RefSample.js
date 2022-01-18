import React, { Component } from 'react';

class RefSample extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    };

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000',
        });
        this.input.focus();
    };

    render() {
        return (
            <div>
                <input ref={(ref) => (this.input = ref)} />
            </div>
        );
    }
}

export default RefSample;
