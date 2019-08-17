

class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);

        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            visible: false
        }
    }


    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
    }

    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
            {this.state.visible && <p>Here are the cool details</p>}
        </div>            
        );
    }
}


ReactDOM.render(<VisibilityToggle /> ,document.getElementById('app'));

