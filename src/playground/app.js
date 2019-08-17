

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: []
        }
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            // do nothing at all
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json);
        }
    }



    handlePick() {
        this.setState((prevState) => {
            const randnum = Math.floor(Math.random() * prevState.options.length);
            const option = prevState.options[randnum];
            alert(option);
        });     
   
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }


    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }


    handleAddOptions(option) {
        if(!option) {
            return "Enter valid item to add";
        } else if(this.state.options.indexOf(option) > -1) {
            return "This option alredy exists";
        } 

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     };
        // });        
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    render() {

        return (
            <div>
                <Header />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                    />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}
                    />
                <AddOption 
                    handleAddOptions={this.handleAddOptions} 
                    />
            </div>
        );
    }
}



const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
};

Header.defaultProps = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer'
}


const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}>What Should I Do?</button>
        </div>
    );
};


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
                {
                    props.options.map((item) => (
                        <Option 
                            key={item} 
                            optionText={item} 
                            handleDeleteOption={props.handleDeleteOption} 
                            />
                    ))
                }
        </div>
    );
};


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
                >
                remove
            </button>    
        </div>
    );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);

        // this.setState(() => {
        //     return { error };
        // })

        this.setState(() => ({error}));

        e.target.elements.option.value = '';
        
    }


    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        
        );
    }
}


// stateless functional components

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));