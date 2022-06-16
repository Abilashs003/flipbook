import { Component, OnInit } from '@angular/core';
import { DetectorService } from '../detector.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
})
export class CameraComponent implements OnInit {
  output = '';
  constructor(public detectorService: DetectorService) {}

  ngOnInit(): void {}
}
