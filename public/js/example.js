margin = ({top: 20, right: 0, bottom: 30, left: 40})

height = 500
width = 500
data = [
  {name: "E", value: 0.12702},
  {name: "T", value: 0.09056},
  {name: "A", value: 0.08167},
  {name: "O", value: 0.07507},
  {name: "I", value: 0.06966},
  {name: "N", value: 0.06749},
  {name: "S", value: 0.06327},
  {name: "H", value: 0.06094},
  {name: "R", value: 0.05987},
  {name: "D", value: 0.04253},
  {name: "L", value: 0.04025},
  {name: "C", value: 0.02782},
  {name: "U", value: 0.02758},
  {name: "M", value: 0.02406},
  {name: "W", value: 0.0236},
  {name: "F", value: 0.02288},
  {name: "G", value: 0.02015},
  {name: "Y", value: 0.01974},
  {name: "P", value: 0.01929},
  {name: "B", value: 0.01492}
]

yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())

xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))

y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top])

x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1)
