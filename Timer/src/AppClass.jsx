class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0
        }
    }
    handleChange() {
        this.setState({val: this.state.val + 1});
    }
    getDerivedStateFromProps(props, state) {

    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
        render() {
            return (
                <div>
                    <h1>Hello World from parent</h1>
                    <h2>{this.state.val}</h2>
                    <button onClick={() => this.setState({val: this.state.val + 1})}>Change</button>
                    <Child val={this.state.val} />
                </div>
            );
        }
    }