import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dashboard-app-dynamic-path',
  templateUrl: './dynamic-path.component.html',
  styleUrls: ['./dynamic-path.component.css']
})
export class DynamicPathComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
