import React, {Component} from "react";


class RadioButton2 extends Component {
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
        if (!this.props.radiobutton2) {
            return null
        }
        let result = this.props.radiobutton2.map((q, i) => <div key={i}><label><input name="radiobutton2" type="radio"
                                                                                      value={q.bal}
                                                                                      onChange={this.onChangeRadio}/>{q.answer}
        </label></div>);

        return (
            <div>
                {result}
            </div>
        )
    }
}


export default RadioButton2;