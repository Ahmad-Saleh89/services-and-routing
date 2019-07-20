import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  userName: string = '';

  user: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/Ahmad-Saleh89')
        .subscribe((response) => console.log(response));
  }

  search(){
    this.http.get('https://api.github.com/users/' + this.userName)
        .subscribe((userData) => {
          this.user = userData;
          console.log(this.user);
        });
  }
}