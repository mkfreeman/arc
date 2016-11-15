import React from 'react';
import './App.css';
import TextPath from './TextPath';
import TextControls from './TextControls';
import SaveButtons from './SaveButtons';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {MuiThemeProvider} from 'material-ui'

var App = React.createClass({
    getInitialState() {
        return {
            text:'The arc of the moral universe is long, but it bends towards justice...',
            fontSize:30,
            xDiff:400,
            yAnchorDiff:100,
            pathOffset:10,
            startUp:'down'
        }
    },
    changeValue (event){
        console.log('change ', event.target.type, event.target.value)
        let value = event.target.type == 'number' ? Number(event.target.value) : event.target.value;
        this.setState({[event.target.id]:value})
    },
    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <TextControls controls={this.state}
                        changeEvent={this.changeValue}/>
                    <TextPath id="chart" width={window.innerWidth - 350} height={800} settings={this.state}/>
                    <SaveButtons chartId="chart"/>
                </div>
            </MuiThemeProvider>
        )
    }
});

export default App;
