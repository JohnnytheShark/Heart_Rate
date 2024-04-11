import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import styles from '../styles/Analysis.module.scss';

export default function HeartRate({ data }) {
 const svgRef = useRef();
 const [tooltipData, setTooltipData] = useState({ x: 0, y: 0, time: '', heartRate: '' });
 const [tooltipVisible, setTooltipVisible] = useState(false);
const [isDataLoaded, setIsDataLoaded] = useState(false);

 // Data processing
 useEffect(() => {
  if (data && data.tracks && data.tracks.length > 0) {
    // Process data here
    setIsDataLoaded(true); // Set loading state to true once data is processed
  }
}, [data]);

function refreshPage(){
  window.location.reload();
}


 useEffect(() => {
    if (isDataLoaded) {
      const svg = d3.select(svgRef.current);
      const margin = { top: 40, right: 80, bottom: 60, left: 50 };
      const width = svg.node().getBoundingClientRect().width - margin.left - margin.right;
      const height = svg.node().getBoundingClientRect().height - margin.top - margin.bottom;

      const allPoints = data.tracks.flatMap(track => track.segments.flat());
      const parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S%Z");
      allPoints.forEach(d => {
        d.time = parseTime(d.time);
        d.heart_rate = +d.heart_rate;
      });

      const xScale = d3.scaleTime()
        .domain(d3.extent(allPoints, d => d.time))
        .range([0, width]);

        const yScale = d3.scaleLinear()
        .domain([50, d3.max(allPoints, d => d.heart_rate)])
        .range([height, 0]);

      const line = d3.line()
        .x(d => xScale(d.time))
        .y(d => yScale(d.heart_rate));

      const area = d3.area()
        .x(d => xScale(d.time))
        .y0(yScale(50))
        .y1(d => yScale(d.heart_rate))

      svg.append("path")
        .datum(allPoints)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", line)
        .attr("transform","translate(50,0)");

      svg.append("path")
      .attr("transform","translate(50,0)")
      .attr("fill","steelblue")
      .attr("d",area(allPoints))

      svg.append("g")
        .attr("transform", `translate(50,${height})`)
        .call(d3.axisBottom(xScale))
        .call(g => g.append("text")
        .attr("x", width /2)
        .attr("y", 30)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("Time"));

      svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale).ticks(height / 60))
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
        .attr("x2", width)
        .attr("stroke-opacity",0.1))
        .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("Heart Rates"));

        svg.selectAll("circle")
        .data(allPoints)
        .enter().append("circle")
        .attr("r", 1)
        .attr("cx", d => xScale(d.time))
        .attr("cy", d => yScale(d.heart_rate))
        .attr("transform","translate(50,0)")
        .on("mouseover", function(event, d) {
           setTooltipVisible(true);
           const formattedTime = d.time.toLocaleString();
           setTooltipData({
             x: event.pageX,
             y: event.pageY,
             time: formattedTime,
             heartRate: d.heart_rate
           });
        })
        .on("mouseout", function() {
           setTooltipVisible(false);
        });
    }
 }, [isDataLoaded,data]);

return (
  <div className={styles.chart}>
    <h1>{data && data.tracks[0]['name']}</h1>
        <svg ref={svgRef} width="100%" height="500"></svg>
        <div style={{ position: 'absolute', left: tooltipData.x, top: tooltipData.y, backgroundColor: 'white', border: '1px solid black', padding: '5px' }}>
        Time: {tooltipData.time}<br />
        Heart Rate: {tooltipData.heartRate}
        </div>
        <button onClick={refreshPage}>Chart not loading?</button>
  </div>
);
}
