// Save buttons
// Derived from:
// https://github.com/vlandham/text-art/blob/master/src/components/ExportControls/ExportControls.jsx
import React from 'react';
import {RaisedButton} from 'material-ui'
import { saveSvg, saveSvgAsPng } from 'save-svg-as-png';
import './SaveButton.css'


var SaveButtons = React.createClass({
    // Get initial state
    getInitialState() {
        return{outputs:[
          { label: 'PNG', handler: this.onSavePng },
          { label: 'SVG', handler: this.onSaveSvg },
        ]}
    },
    // Render svg and expose it to this.root
    onSavePng() {
        let png = document.getElementById(this.props.chartId);
        saveSvgAsPng(png, `${this.props.chartId}.png`);
    },
    onSaveSvg() {
        let svg = document.getElementById(this.props.chartId);
        saveSvg(svg, `${this.props.chartId}.svg`);
    },
    render() {
        return (
            <div className="ExportControls">
                    {this.state.outputs.map(output => (
                        <p key={output.label}>
                            <RaisedButton onClick={output.handler}>
                                {output.label}
                            </RaisedButton>
                        </p>
                    ))}
            </div>
        );
    }
});
export default SaveButtons;
