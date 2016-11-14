// TextPath element
import React from 'react';
import * as d3 from 'd3';
import './TextPath.css'

var TextPath = React.createClass({
    // Update on new props
    componentWillReceiveProps (props){
        console.log('bubble props ', props)
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
        this.update();
    },

    update(){
        let text = "The arc of the moral universe is long, but it bends towards justice..."

        // Parameters for drawing curve
        let iter = 0;
        let xDiff = 400;
        let x = 0;
        let yStart = this.props.height/2;
        let curve = "M " + x + ', ' + yStart;
        let xAnchorDiff = xDiff/2;
        let yAnchorDiff = 200;
        let startUp = true;
        let yStart2 = yStart + 6;
        let curve2 = "M " + x + ', ' + yStart2;

        // Calculate string for path
        while(x < this.props.width){
            iter ++;
            let power = startUp === true? iter : iter + 1
            x += xDiff;
            let y = yStart;
            let anchorX = x - xAnchorDiff;
            let anchorY = y + yAnchorDiff *  Math.pow(-1, power);
            let anchorY2 = yStart2 + yAnchorDiff *  Math.pow(-1, power);
            curve += " Q " + anchorX + ',' + anchorY + ' ' + x + ',' + y
            curve2 += " Q " + anchorX + ',' + anchorY2 + ' ' + x + ',' + yStart2
        }

        this.g.append('path').attr('d',curve).attr('id', 'text-path')
        this.g.append('path').attr('d',curve2)

        //Create an SVG text element and append a textPath element
		this.g.append("text")
			.style("text-anchor","start")
		    .append("textPath")				//append a textPath to the text element
			.attr("xlink:href", "#text-path")
         	.attr('startOffset', '4%')
            .style('font-size', '45px')
			.attr('dy', 10)
		    .text(text);

    },
    // Render svg and expose it to this.root
    render() {
        return (
            <div className="textPathWrapper">
                <svg width={this.props.width}
                    height={this.props.height}
                    ref={(node) => { this.root = node;}}
                />
            </div>)
    }
});
export default TextPath;
