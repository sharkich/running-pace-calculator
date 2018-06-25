import {Component, OnInit} from '@angular/core';

import {SeoService} from '../_shared/services/seo.service';

@Component({
  selector: 'app-pace',
  templateUrl: 'pace.component.html',
  styleUrls: ['pace.component.scss']
})
export class PaceComponent implements OnInit {

  public distance: number;
  public pace: number = 6 * 60;
  public time: number;
  public maxPace: number = 14 * 60;
  public maxTime: number;

  public title = 'Running Pace Calculator';

  public distances = [
    {
      distance: 1000,
      title: '1 km',
      pageTitle: '1 km Pace Calculator'
    },
    {
      distance: 2000,
      title: '2 km',
      pageTitle: '2 km Pace Calculator'
    },
    {
      distance: 3000,
      title: '3 km',
      pageTitle: '3 km Pace Calculator'
    },
    {
      distance: 5000,
      title: '5 km',
      pageTitle: '5 km Pace Calculator'
    },
    {
      distance: 10000,
      title: '10 km',
      pageTitle: '10 km Pace Calculator'
    },
    {
      distance: 15000,
      title: '15 km',
      pageTitle: '15 km Pace Calculator'
    },
    {
      distance: 21097,
      title: 'Half (21.097 km)',
      pageTitle: 'Half Marathon Pace Calculator'
    },
    {
      distance: 42195,
      title: 'Marathon (42.195 km)',
      pageTitle: 'Marathon Pace Calculator'
    },
    {
      distance: 50000,
      title: '50 km',
      pageTitle: '50 km Pace Calculator'
    },
    {
      distance: 100000,
      title: '100 km',
      pageTitle: '100 km Pace Calculator'
    }
  ];

  constructor(private seoService: SeoService) {
  }

  ngOnInit() {
    this.seoService
      .setTitle(this.title)
      .setDescription('Calculator of pace, speed, time for any distance');

    const INIT_DISTANCE = 21097; // +this.activatedRoute.snapshot.params['pace'] ||

    this.onSelectDistance(INIT_DISTANCE);
    this.onChangePace(this.pace);
  }

  onSelectDistance(distance: number) {
    this.distance = distance;
    this.maxTime = distance * this.maxPace / 1000;
    this.onChangePace(this.pace);
    const dist = this.distances.find((d) => d.distance === this.distance);
    if (dist) {
      this.title = dist.pageTitle;
    }
    this.seoService.setTitle(this.title);
    console.log(this.distance);
    // this.router.navigate(['apps', 'pace', this.distance]);
  }

  onChangePace(pace: number) {
    this.time = Math.round(this.distance * pace / 1000);
  }

  onChangeTime(time: number) {
    this.pace = Math.round(1000 * time / this.distance);
  }

  private pad(num) {
    return ('0' + num).slice(-2);
  }

  hhmmss(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return this.pad(hours) + ':' + this.pad(minutes) + ':' + this.pad(seconds);
  }
}
