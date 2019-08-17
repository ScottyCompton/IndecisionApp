import React from 'react';
import AddOption from './AddOption'
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';



export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };


    handlePick = () => {
        this.setState((prevState) => {
            const randnum = Math.floor(Math.random() * prevState.options.length);
            const option = prevState.options[randnum];
            this.setState(() => ({selectedOption: option}));
        });     
   
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };


    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    };

    handleAddOptions = (option) => {
        if(!option) {
            return "Enter valid item to add";
        } else if(this.state.options.indexOf(option) > -1) {
            return "This option alredy exists";
        } 
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    };


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

                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    />
            </div>
        );
    }
}