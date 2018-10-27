import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GitService} from '../gits/git.service';
// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  result$: any;
  show$;
  constructor(public service: GitService, private http: HttpClient ) { }
  search(input) {
    this.http.get('https://api.github.com/users/' + input.value).subscribe( data => {
      this.result$ = data;
      console.log(data);
    });
    this.http.get('https://api.github.com/users/' + input.value + '/repos') .subscribe(data => {
      this.show$ = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
