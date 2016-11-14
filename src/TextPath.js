// TextPath element
import React from 'react';
import * as d3 from 'd3';
import './TextPath.css'

var TextPath = React.createClass({
    // Update on new props
    componentWillReceiveProps (props){
        this.props = props;
        this.update();
    },
    // Setup on mount
    componentDidMount () {
        this.setUp();
    },

    // Bind initial g element
    setUp () {
        this.g = d3.select(this.root).append("g");
        this.textCurve = this.g.append('path').attr('id', 'text-path')
        this.pathCurve = this.g.append('path').attr('id', 'curve-path')
        this.update();
    },

    update(){
        let settings = this.props.settings;
        let text = settings.text || "The arc of the moral universe is long, but it bends towards justice..."

        // Parameters for drawing curve
        console.log(settings)
        let iter = settings.iter || 0;
        let xDiff = settings.xDiff || 400;
        let x =  0;
        let yStart = settings.yStart || this.props.height/2;
        let fontSize = settings.fontSize || 45;
        let curve = "M " + x + ', ' + yStart;
        let xAnchorDiff = xDiff/2;
        let yAnchorDiff = settings.yAnchorDiff || 200;
        let startDirection = settings.startUp || 'up';
        let yStart2 = yStart + settings.pathOffset || yStart + 6;
        let curve2 = "M " + x + ', ' + yStart2;

        // Calculate string for path
        while(x < this.props.width){
            iter ++;
            let power = startDirection === 'up'? iter : iter + 1
            x += xDiff;
            let y = yStart;
            let anchorX = x - xAnchorDiff;
            let anchorY = y + yAnchorDiff *  Math.pow(-1, power);
            let anchorY2 = yStart2 + yAnchorDiff *  Math.pow(-1, power);
            curve += " Q " + anchorX + ',' + anchorY + ' ' + x + ',' + y
            curve2 += " Q " + anchorX + ',' + anchorY2 + ' ' + x + ',' + yStart2
        }

        this.textCurve.attr('d',curve);
        this.pathCurve.attr('d',curve2);


        //Create an SVG text element and append a textPath element
		let textSelection = this.g.selectAll('textPath').data(text)

        textSelection.enter().append("text")
			.style("text-anchor","start")
		    .append("textPath")
            .merge(textSelection)//append a textPath to the text element
			.attr("xlink:href", "#text-path")
         	.attr('startOffset', '4%')
            .style('font-size', fontSize + 'px')
			.attr('dy', 10)
		    .text(text);

        textSelection.exit().remove()
    },
    // Render svg and expose it to this.root
    render() {
        return (
            <div className="textPathWrapper">
                <svg width={this.props.width}
                    height={this.props.height}
                    id={this.props.id}
                    className="pathSvg"
                    ref={(node) => { this.root = node;}}
                />
            </div>)
    }
});
export default TextPath;
