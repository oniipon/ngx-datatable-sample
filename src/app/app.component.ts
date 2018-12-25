import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'datatble';
  rows = [];
  c = 'id';
  t: any;
  ngOnInit(): void {
    const tmp = [];
    for (let i = 0; i < 500; i++) {
      console.log(i);
      tmp[i] = { id: i, name: `田中${i}`, height: Math.floor(Math.random() * 80) + 50 };
    }
    this.rows = tmp;
  }

  getRowHeight(row) {
    return row.height;
  }
}
