import React, {Component} from "react";


class TextInput extends Component{
    state = {
        textInput: ''
    };

    onChangeText = (e, answer) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
        const point = value === answer || value === '' ? 1 : 0;
        this.props.addPoint(this.props.index, point)
    };

    onChange = (e) => {
      this.onChangeText(e, this.props.input.text)
    };

    render() {
        if (!this.props.input) {
            return null
        }
        return (
            <div>
                <div><p><input placeholder={"Введите ответ"} name="textInput" type="text" value={this.state.textInput}
                               onChange={this.onChange}/></p></div>
            </div>
        )
    }
}


export default TextInput;