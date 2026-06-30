import {Component, inject} from '@angular/core';
import {ProjectsService} from '../../core/services/projects.service';
import {Project} from '../../core/models/project.model';
import {RouterLink} from '@angular/router';
import { LucideAngularModule, ArrowUpRight } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  imports: [
    RouterLink,
    LucideAngularModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export default class ProjectsComponent {

  readonly ArrowUpRight = ArrowUpRight;

  private projectsService = inject(ProjectsService);
  projects: Project[] = this.projectsService.getAll();

}
