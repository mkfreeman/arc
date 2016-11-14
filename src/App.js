import React from 'react';
import './App.css';
import TextPath from './TextPath';
import TextControls from './TextControls';

var App = React.createClass({
    render() {
        return(
            <div>
                <TextControls controls={[1]}/>
                <TextPath width={1300} height={400}/>
            </div>
        )
    }
});

export default App;
