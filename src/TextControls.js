// TextPath element
import React from 'react';
import {Drawer, TextField} from 'material-ui'
import './TextControls.css';


var TextControls = React.createClass({
    // Render svg and expose it to this.root
    render() {
        return (
            <Drawer className="menu">
                <h1>Controls</h1>
                {Object.keys(this.props.controls).map(function(control, i){
                    let type = control == 'text' | control == 'startUp' ? 'text' : 'number';
                    return <TextField
                                      defaultValue={this.props.controls[control]}
                                      onChange={this.props.changeEvent}
                                      id={control}
                                      type={type}
                                      key={"control-" + i}
                                      className="textField"
                                      floatingLabelText={control}/>
                }.bind(this))}

            </Drawer>
        );
    }
});
export default TextControls;
