import * as d3 from 'd3';

import { Component, OnInit } from '@angular/core';

import players from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


  title = 'd3angular';
  size = "30px"

  constructor() {

  }

  ngOnInit(): void {


    const area = d3.select('#canvas-area');


    const circles = area.selectAll('rect')
      .data(players.players)

    circles.enter().append("rect")
      .attr("x", (data, index) => (index * 50) + 50)
      .attr("y", 200)
      .attr("width", 40)
      .attr("height", (data) => Number(data.points))
      .attr("fill", "green")

  }

  showdata() {

  }
}
