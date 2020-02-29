import React, {Component} from "react";


class RadioButton extends Component {
     state = {
         radiobutton: ''
     };


    onChangeRadio = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
        this.props.addPoint(this.props.index, +value)
    };
    render() {
        if (!this.props.radiobutton) {
            return null
        }

        let result = this.props.radiobutton.map((q, i) => <div key={i}><label><input name='radiobutton' type='radio' value={q.bal} onChange={this.onChangeRadio}/>{q.answer}
        </label></div>);
        return (
            <div>
                <div>{result}</div>
            </div>
        )
    }
}


export default RadioButton;