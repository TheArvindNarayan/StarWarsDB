import { Component, OnInit, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {

  results: any;
  next: any;
  prev: any;
  toogleNext = false;

  filter: Array<any> = [];
  name: any;
  dob: any;
  gender: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://swapi.co/api/people/').subscribe(
      (data: any) => {
        this.results = data.results;
        this.next = data.next;
        for (let z of this.results) {
          z.FilmTitles = [];
          z.status = "empty";
        }
      }
    );
  }

  getFilms(event) {
    if (event.status == 'empty') {
      for (let x in event.films) {
        this.http.get(event.films[x]).subscribe(
          (data: any) => {
            for (let y in this.results) {
              if (this.results[y].name == event.name) {
                this.results[y].FilmTitles.push(data.title);
                this.results[y].status = "fetched";
              }
            }
          }
        );
      }
    }
    else {
      event.status = 'fetched'
    }
  }

  hideFilms(event) {
    event.status = "hide";
  }

  checkFilter(event: any) {
    if (event == undefined) {
      console.log("return");
      return;
    }
    else if (event.srcElement.value && (this.filter.indexOf(event.srcElement.id)) == -1 ) {
      this.filter.push(event.srcElement.id);
    }
    if (!(event.srcElement.value) ) {
      this.filter.splice(this.filter.indexOf(event.srcElement.id),1);
    }  
  }

  getNext() {
    this.toogleNext = true;
    this.http.get(this.next).subscribe(
      (data: any) => {
        this.results = data.results;
        this.next = data.next;
        this.prev = data.previous;
        for (let z of this.results) {
          z.FilmTitles = [];
          z.status = "empty";
        }
        this.toogleNext = false;
        window.scrollTo(0, 0);
      }
    );
  }

  getPrev() {
    this.toogleNext = true;
    this.http.get(this.prev).subscribe(
      (data: any) => {
        this.results = data.results;
        this.next = data.next;
        this.prev = data.previous;
        for (let z of this.results) {
          z.FilmTitles = [];
          z.status = "empty";
        }
        this.toogleNext = false;
        window.scrollTo(0, 0);
      }
    );
  }
}
