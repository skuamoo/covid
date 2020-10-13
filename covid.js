//get current screen dimensions
const w = window.innerWidth;
const h = window.innerHeight;

//set size variable adjustments
var w_var = .584;
var h_var = 70;
var mobile_font = 0;
var legend_font = 15;
var table_height = h-300;
var table_width = 400;
var mobile_titles = 0;

//disable touch screen issues
function touchHandler(event){
    if(event.touches.length > 1){
        event.preventDefault();
    }
}

//get total positive cases for current day from Public Health England API
$.ajax({
  //url: "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&latestBy=newCasesByPublishDate&structure={%22date%22:%22date%22,%22newCases%22:%22newCasesByPublishDate%22}",
  url: "https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=United%2520Kingdom;areaType=overview&latestBy=newCasesByPublishDate&structure=%7B%22date%22:%22date%22,%22value%22:%22newCasesByPublishDate%22%7D",
  contentType: "application/json",
  dataType: 'json',
  success: function(result){          
      //console.log(result);
      d3.select("#new_cases").append("label").text("New cases " + result.data[0].date + ": " + result.data[0].value).style("font-weight", "bold");          
  }
})

//Local Authority data popup
var div = d3.select("body").append("div") 
  .attr("class", "tooltip")       
  .style("opacity", 0)
  .style("padding", "7px");

//map container
d3.select("body").append("div").attr("id", "container").style("height", h-h_var + "px").style("width", (h-h_var)*w_var + "px").style("float", "left");

//position loading div
d3.select(".loading").style("left", ((h-h_var)*w_var)/3 + "px").style("top", h/3 + "px");

//legend, search and list view
var outer_div = d3.select("body").append("div").attr("id", "outerdiv").style("display", "inline-block").style("padding-left", "20px").style("padding-top", "10px");
outer_div.append("div").attr("id", "container_legend").style("width", "450px").style("height", "205px").style("top","10px").style("background", "white");
var search_group = outer_div.append("div").attr("id", "search_grp").style("padding-top", "10px");
search_group.append("input").attr("id", "search_box").style("width", "200px").attr("placeholder", "Enter area name to search map");
search_group.append("button").attr("id", "search_btn").text("Search");
outer_div.append("div").attr("id", "container_list").style("width", "450px");

d3.select("body").append("div").html("*Risk levels calculated from daily cases per 100,000 population (7 day rolling average). <a href='https://coronavirus.data.gov.uk/' target='_blank'>source</a>");

var svg = d3.select("#container").append("svg").attr("height", h-h_var).attr("width", (h-h_var)*w_var);

//set up attributes for mobile phone browsers
if (h > w){
  //assume mobile phone if browser height is greater than width
  mobile_font = 8;
  mobile_titles = 6;
  table_height = h-445;
  table_width = 500;
  legend_font = 18;
  div.style("font-size", "20px");
  d3.select("#title_label").style("font-size", "34px");
  d3.select("#page_des").style("font-size", "20px");
  legend_font = 18;
  $(".header").show();
  $(".sidebarIconToggle").show();
  $("#outerdiv").appendTo("#sidebarMenu");
  d3.select("#page_des").html("Based on the <a href='https://globalepidemics.org/key-metrics-for-covid-suppression/' target='_blank'>Harvard Global Health Institute Key Metrics for COVID Suppression</a> framework. Click an area for details.");
  d3.select("#search_box").style("height", "30px").style("width", "300px").style("font-size", "20px");
  d3.select("#search_btn").style("height", "30px").style("font-size", "20px");
  d3.select("#new_cases").style("font-size", "20px");
}

$("#search_box").on( "autocompleteselect", function( event, ui ) {
    var searchval = ui.item.value.toLowerCase().replace(/[\s&,]/g,"_");
    d3.selectAll(".map_area").style("opacity", 0.5); 
    d3.select("#" + searchval).style("opacity", 1); 
    clicked_area = searchval;
    d3.select("#openSidebarMenu").property('checked', false);
    mouseover_txt = popup(d3.select("#" + searchval).data()[0]);
    div.style("opacity", .9);    
    div .html(mouseover_txt)  
      .style("left", ($("#"+searchval)[0].getBoundingClientRect().x + 10) + "px")   
      .style("top", ($("#"+searchval)[0].getBoundingClientRect().y - 28) + "px"); 
});

$("#search_btn").on( "click", function() {
  var searchval = d3.select("#search_box").property("value").toLowerCase().replace(/[\s&,]/g,"_");
  d3.selectAll(".map_area").style("opacity", 0.5); 
  d3.select("#" + searchval).style("opacity", 1); 
  clicked_area = searchval;
  d3.select("#openSidebarMenu").property('checked', false);
  mouseover_txt = popup(d3.select("#" + searchval).data()[0]);
  div.style("opacity", .9);    
  div .html(mouseover_txt)  
    .style("left", ($("#"+searchval)[0].getBoundingClientRect().x + 10) + "px")   
    .style("top", ($("#"+searchval)[0].getBoundingClientRect().y - 28) + "px");
});

/* set up zooming/panning (disabled)     
const zoom = d3.zoom()
  .scaleExtent([1,8])
  .on('zoom', zoomed);
*/

//set up map
var path = d3.geoPath();
var projection = d3.geoMercator();
const g = svg.append("g");

//load data and set up mapping function to join shape file with data
var data = d3.map();
d3.queue()
  .defer(d3.json, "uk_la.geojson")
  .defer(d3.csv, "data.csv", function(d) {
  		data.set(d.name, [+d.rate_day, d.lockdown, d.cases_day, d.rate_week, d.trend, d.cases_week]);          
  })
  .await(ready);

//Listeners
window.onclick = function(event){
  if(!(event.target.className.baseVal=="map_area")){
    if (!(event.target.innerText)) {              
      d3.selectAll(".map_area").style("opacity", 1); 
      clicked_area = ""; 
      div.style("opacity", 0);
        
    }
  }
}

window.addEventListener('resize', function() {
  console.log("The window was resized!");
});

function popup(d){
  //form text for local authority popup information
  var mouseover_txt = "<strong><u>" + d.properties.lad18nm + "</strong></u><br/>";
  var risk_color;
  var risk_text;

  d.cases = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[2];
  d.trend = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[4];
  d.weekly = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[3];
  d.cases_week = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[5];
          
  if (d.total < 1){
    risk_text1 = "On Track for Containment";
    risk_text = "Monitor with test and trace";
    risk_color = "green";
  }
  else if (d.total < 10) {
    risk_text1 = "Community Spread";
    risk_text = "Rigorous test and trace advised";
    risk_color = "yellow";
  }
  else if (d.total < 25) {
    risk_text1 = "Accelerated Spread";
    risk_text = "Stay-at-home orders advised";
    risk_color = "orange";
  }
  else {
    risk_text1 = "Tipping Point";
    risk_text = "Stay-at-home orders necessary";
    risk_color = "red";
  }
  if (d.total == "unavailable") {
    mouseover_txt += "No Data Available";
  }   
  else {
    mouseover_txt = mouseover_txt + "Daily cases per 100k: " + d.total + "<br/>" + "Weekly cases per 100k: " + d.weekly ;
    if(d.trend == "▲") {
      mouseover_txt = mouseover_txt + "<label style='color:red'>" + d.trend + "</label>";
    }
    else if (d.trend == "▼") {
      mouseover_txt = mouseover_txt + "<label style='color:green'>" + d.trend + "</label>";
    }
    else {
      mouseover_txt = mouseover_txt + "<label>" + d.trend + "</label>";
    }
    mouseover_txt = mouseover_txt + "<br/>New cases today: " + d.cases + "<br/>New cases past week: " + d.cases_week + "<br/><i>Tier " + d.lockdown + "<br/><span style='background-color:" + risk_color + "'>" + risk_text1 + "</span><br/><span style='background-color:" + risk_color + "'>" + risk_text + "</span>";
    //Add link to PHE page"<br/><a href='https://coronavirus.data.gov.uk/cases?areaType=ltla&areaName=" + d.properties.lad18nm +"' target='_blank'>details</a>";
  }  
  return mouseover_txt;
}

function ready(error, topo) {
  //draw map
  $('.loading').hide();
  $('.legend').show();
  var clicked_area = "";

  projection.fitSize([(h-h_var)*w_var,h-h_var], topo);
  g
    .selectAll("path")
    .data(topo.features)
    .enter()
    .append("path")
      .attr("d", d3.geoPath().projection(projection))
      .attr("id", function(d) { 
        return d.properties.lad18nm.toLowerCase().replace(/[\s&,]/g,"_");
      })
      .attr("class", "map_area")
      .attr("stroke", function(d) {
      	d.lockdown = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[1];
      	if (d.lockdown == 3) {
      		return "black";
      	}
      	else if (d.lockdown == 2) {
      		return "blue";
      	}
      	else {
      		return "grey";
      	}
      })
      .attr("stroke-opacity", function(d) {
        d.lockdown = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[1];
        if (d.lockdown == 1) {
          return 0.3;
        }
        else {
          return 1;
        }
      })
      .attr("fill", function (d) {
        d.total = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[0];
        if (d.total < 1) { return "green";}
        else if (d.total < 10) {return "yellow";}
        else if (d.total < 25) {return "orange";}
        else if (d.total >= 25) {return "red";}
        else {return "silver";}
      })
      .on("mouseover", function(d) { 
        if (clicked_area == ""){
        var mouseover_txt = popup(d);
          div.transition()    
            .duration(200)    
            .style("opacity", .9);    
          div.html(mouseover_txt)  
            .style("left", (d3.event.pageX) + "px")   
            .style("top", (d3.event.pageY - 28) + "px"); 
        }
      })          
      .on("mouseout", function(d) {  
        if (clicked_area == ""){ 
          div.transition()    
            .duration(500)    
            .style("opacity", 0);
          } 
      })
      .on("click", function(d) {
        var mouseover_txt = popup(d); 

        if (clicked_area != d.properties.lad18nm.toLowerCase().replace(/[\s&,]/g,"_")) {
          d3.selectAll(".map_area").style("opacity", 0.5); 
          d3.select(this).style("opacity", 1); 
          clicked_area = d.properties.lad18nm.toLowerCase().replace(/[\s&,]/g,"_");
          div.style("opacity", .9);    
          div .html(mouseover_txt)  
            .style("left", (d3.event.pageX) + "px")   
            .style("top", (d3.event.pageY - 28) + "px");
              
        } else {
          d3.selectAll(".map_area").style("opacity", 1); 
          clicked_area = ""; 
          div.style("opacity", 0);   
        }       
      });        
}
/*
d3.selectAll(".map_area").sort(function (a, b) { // select the parent and sort the path's
      if(a.lockdown == "Area of Intervention") {
        return 1;
        console.log("area");
      }    
      else {
        return -1;
      }               // a is the hovered element, bring "a" to the front
  });
*/ 
//set up legend
var svg2 = d3.select("#container_legend").append("svg");
svg2.append("circle").attr("cx",20).attr("cy",20).attr("r", 6).style("fill", "green").style("stroke", "black").attr("class", "legend");
svg2.append("circle").attr("cx",20).attr("cy",55).attr("r", 6).style("fill", "yellow").style("stroke", "black").attr("class", "legend");
svg2.append("circle").attr("cx",20).attr("cy",90).attr("r", 6).style("fill", "orange").style("stroke", "black").attr("class", "legend");;
svg2.append("circle").attr("cx",20).attr("cy",125).attr("r", 6).style("fill", "red").style("stroke", "black").attr("class", "legend");
svg2.append("rect").attr("x",20).attr("y",160).attr("width", 10).attr("height", 2).style("fill", "black").attr("class", "legend");
svg2.append("rect").attr("x",20).attr("y",180).attr("width", 10).attr("height", 2).style("fill", "blue").attr("class", "legend");
svg2.append("rect").attr("x",20).attr("y",200).attr("width", 10).attr("height", 2).style("fill", "grey").style("opacity", 0.3).attr("class", "legend");

svg2.append("text").attr("x", 40).attr("y", 20).text("On Track for Containment (<1 daily case per 100k)").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend");
svg2.append("text").attr("x", 40).attr("y", 35).text("Monitor with test and trace").style("font-size", legend_font + "px").style("font-style", "italic").attr("alignment-baseline","middle").attr("class", "legend");

svg2.append("text").attr("x", 40).attr("y", 55).text("Community Spread (1-9 daily cases per 100k)").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend");
svg2.append("text").attr("x", 40).attr("y", 70).text("Rigorous test and trace advised").style("font-size", legend_font + "px").style("font-style", "italic").attr("alignment-baseline","middle").attr("class", "legend");

svg2.append("text").attr("x", 40).attr("y", 90).text("Accelerated Spread (10-24 daily cases per 100k)").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend");
svg2.append("text").attr("x", 40).attr("y", 105).text("Stay-at-home orders advised").style("font-size", legend_font + "px").style("font-style", "italic").attr("alignment-baseline","middle").attr("class", "legend");

svg2.append("text").attr("x", 40).attr("y", 125).text("Tipping Point (25+ daily cases per 100k)").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend");
svg2.append("text").attr("x", 40).attr("y", 140).text("Stay-at-home orders necessary").style("font-size", legend_font + "px").style("font-style", "italic").attr("alignment-baseline","middle").attr("class", "legend");

svg2.append("text").attr("x", 40).attr("y", 160).text("Tier 3 Restrictions").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend")
svg2.append("text").attr("x", 40).attr("y", 180).text("Tier 2 Restrictions").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend")
svg2.append("text").attr("x", 40).attr("y", 200).text("Tier 1 Restrictions").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend")

/* zoom function (disabled)
svg.call(zoom);

function zoomed() {
      g
        .selectAll('path') // To prevent stroke width from scaling
        .attr('transform', d3.event.transform);
    }
*/

d3.csv("data.csv", function(data){
  /* calculate total cases from data
  var totalSum = d3.sum(data.map(function(d){ return d.cases_day}));
  svg2.append("text").attr("x", 10).attr("y", 45).attr("font-weight", "bold").text("Total New Daily Cases (N. Irl not included): "+ totalSum);
  */
  //get all local authority areas to populate search autocomplete
  var updated = data[0]["last_updated"];
  d3.select("#updated_date").text("(updated " + updated + ")");

  var areas = []; 
  data.map(function(e) {
    areas.push(e.name);
  });
  $( "#search_box" ).autocomplete({
      source: areas
  });

  //Build scrolling table of daily case rates by local authority
  var valueFunc = function(data) {return data.rate_day;}
  var textFunc = function(data) {return data.name;}
  var columns = ["Local Authority", "Daily cases per 100k"];

  function drawTable(data, tableid, dimensions, valueFunc, textFunc, columns) {
    var sortValueAscending = function (a, b) {return valueFunc(a) - valueFunc(b);}
    var sortValueDescending = function (a, b) {return valueFunc(b) - valueFunc(a);}
    var sortNameAscending = function (a, b) {return textFunc(a).localeCompare(textFunc(b));}
    var sortNameDescending = function (a, b) {return textFunc(b).localeCompare(textFunc(a));}
    var metricAscending = true;
    var nameAscending = true;

    var width = dimensions.width + "px";
    var height = dimensions.height + "px";
    var twidth = (dimensions.width - 25) + "px";
    var divHeight = (dimensions.height - 60) + "px";

    var outerTable = d3.select(tableid).append("table").attr("width", width);

    outerTable.append("tr").append("td")
      .append("table").attr("class", "headerTable").attr("width", twidth)
      .append("tr").selectAll("th").data(columns).enter()
        .append("th").attr("id", function(column) {return column;}).text(function (column) { return column + "▼"; })
        .on("click", function (d) {
          // Choose appropriate sorting function.
          if (d === columns[1]) {
            var sort = metricAscending ? sortValueAscending : sortValueDescending;
            metricAscending = !metricAscending;             
          } else if(d === columns[0]) {
            var sort = nameAscending ? sortNameAscending : sortNameDescending
            nameAscending = !nameAscending;
          }     
          var rows = tbody.selectAll("tr").sort(sort);
        })
        .style("font-size", 16 + mobile_titles +"px");

    var inner = outerTable.append("tr").append("td")
      .append("div").attr("class", "scroll").attr("width", width).attr("style", "height:" + divHeight + ";")
      .append("table").attr("class", "bodyTable").attr("border", 1).attr("width", twidth).attr("height", height).attr("style", "table-layout:fixed");

    var tbody = inner.append("tbody");
    // Create a row for each object in the data and perform an intial sort.
    var rows = tbody.selectAll("tr").data(data).enter().append("tr")
      .attr("class", "table_row").sort(sortValueDescending)
      .on("click", function(d){
        var clickval = d.name.toLowerCase().replace(/[\s&,]/g,"_");
        d3.select("#openSidebarMenu").property('checked', false);
        d3.selectAll(".map_area").style("opacity", 0.5); 
        d3.select("#" + clickval).style("opacity", 1); 
        clicked_area = clickval;            
        mouseover_txt = popup(d3.select("#" + clickval).data()[0]);
        div.style("opacity", .9);    
        div .html(mouseover_txt)  
          .style("left", ($("#"+clickval)[0].getBoundingClientRect().x + 10) + "px")   
          .style("top", ($("#"+clickval)[0].getBoundingClientRect().y - 28) + "px"); 
      });

    // Create a cell in each row for each column
    var cells = rows.selectAll("td")
      .data(function (d) {
        return columns.map(function (column) {
            return { column: column, text: textFunc(d), value: valueFunc(d)};
        });
      }).enter().append("td")
        .style("text-align", "center")
        .text(function (d) {
          if (d.column === columns[0]) return d.text;
          else if (d.column === columns[1]) return d.value;
        })
        .style("background-color", function(d) {
          if(d.value < 1) {return "green";}
          else if (d.value < 10) {return "yellow";}
          else if (d.value < 25) {return "orange";}
          else {return "red";}
        })
        .style("border", 0)
        .style("font-size", 14+ mobile_font + "px");
  }
  drawTable(data, "#container_list", { width: table_width, height: table_height}, valueFunc, textFunc, columns);
});