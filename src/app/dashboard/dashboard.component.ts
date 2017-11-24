
import { ViewChild, Component, AfterViewInit , ElementRef, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuthService } from './../firebase-auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

    status;
  constructor(public auth: FirebaseAuthService , public router: Router, public route: ActivatedRoute ) {
    this.getStatus();
   if(this.auth.getUser() != false){
      const type = this.auth.getUserType();
      switch(type){
        case 'admin':
        
        if (this.status == 1) {
            this.router.navigate(['/dashboard']);
         location.reload();
        }
        break;
        default:  this.router.navigate(['/challan']);
        break;
      }
    }else{
        this.router.navigate(['/login']);
    }
    
    
  }
   getStatus(): void {
    this.status = this.route.snapshot.paramMap.get('p');
  }

  canvas: any;
  ctx: any;

  ngAfterViewInit() {
    this.setCanvas('myChart');
    this.setBarCanvas('myChart2');
    this.setPieCanvas('myChart1');
    this.setLineCanvas('myChart3');
  }

  setCanvas(canvas){
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["New", "In Progress", "Closed"],
          datasets: [{
              label: '# of Challan',
              data: [ Math.floor(Math.random() * 6) + 1  , Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 8) + 1],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 3
          }]
      },
      options: {
        responsive: true,
        display: true
      }
    });
  }

  setPieCanvas(canvas){
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["101", "102", "103", "105", "106", "107"],
          datasets: [{
              label: '# of Challan',
              data: [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
                Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
                Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1],
              backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 3
          }]
      },
      options: {
        responsive: true,
        display: true
      }
    });
  }

  setBarCanvas(canvas){
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext('2d');
    var myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ["North", 'South', 'East', "West", "South-West", "North-East"],
          datasets: [{
              label: '# of Challan',
              data: [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
                Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
                Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

  setLineCanvas(canvas){
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
          datasets: [{
              label: '# of Challan',
              data: [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
                Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
                Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1],
              backgroundColor: [

                  'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }
}
