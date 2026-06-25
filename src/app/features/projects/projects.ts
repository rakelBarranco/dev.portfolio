import {Component, inject} from '@angular/core';
import {ProjectsService} from '../../core/services/projects.service';
import {Project} from '../../core/models/project.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [
    RouterLink
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  private projectsService = inject(ProjectsService);
  projects: Project[] = this.projectsService.getAll();

}
