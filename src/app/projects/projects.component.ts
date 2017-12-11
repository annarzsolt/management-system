import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';

import {Project} from './models/Project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  projects: Project[];

  getProjects(): void {
    this.projectsService.getProjects()
    .subscribe(projects => this.projects = projects);
  }

  ngOnInit() {
    this.getProjects();
  }

}
