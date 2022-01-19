import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            fixed_number: 0,
        };
    }
    render() {
        const { number, fixed_number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값:{fixed_number}</h2>
                <button
                    onClick={() => {
                        this.setState({ number: number + 1 }, () => {
                            console.log('방금 setState가 호출되었습니다');
                            console.log(this.state);
                        });
                        this.setState({ number: this.state.number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
