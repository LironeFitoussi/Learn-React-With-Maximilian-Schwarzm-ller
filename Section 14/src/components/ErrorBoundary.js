import { Component } from "react";

class ErroBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    };

    componentDidCatch(err) {
        console.error(err);
        this.setState({ hasError: true})
    };

    render () {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>
        }

        return this.props.children
    };
}

export default ErroBoundary;