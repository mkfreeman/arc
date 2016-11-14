// TextPath element
import React from 'react';
import {Drawer, MuiThemeProvider, TextField} from 'material-ui'
// Needed for onTouchTap (to avoid warning from material-ui)
// See: https://github.com/callemall/material-ui/issues/4670
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var TextControls = React.createClass({
    // Render svg and expose it to this.root
    render() {
        return (
            <MuiThemeProvider>
                <Drawer open={false}>
                    <h1>Controls</h1>
                    {this.props.controls.map(function(control, i){
                        return <TextField type="number"
                                          defaultValue={100}
                                          key={"control-" + i}
                                          floatingLabelText="Floating Label Text"/>
                    })}

                </Drawer>
            </MuiThemeProvider>)
    }
});
export default TextControls;
