import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitService } from '../gits/git.service';
// import 'rxjs/add/operator/map';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GitService],
})

export class SearchComponent implements OnInit {
  user$;
  repo$;
  constructor(public service: GitService, private http: HttpClient ) { }


  ngOnInit() {
    this.service.return().subscribe( tempo => {
      this.user$ = tempo;
      console.log(tempo);
      });

      this.service.getUserRepos().subscribe(data => {
        this.repo$ = data;
        console.log(data);
      });
  }

}