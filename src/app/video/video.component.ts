import { DetectorService } from './../detector.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  constructor(public detectorService: DetectorService) {}
  ngOnInit(): void {}
}
