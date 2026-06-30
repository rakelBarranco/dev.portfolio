import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ProjectsService} from '../../../core/services/projects.service';
import {Project} from '../../../core/models/project.model';
import AnimatedCanvasComponent from '../../../shared/components/animated-canvas/animated-canvas';

@Component({
  selector: 'app-project-detail',
  imports: [
    RouterLink,
    AnimatedCanvasComponent
  ],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export default class ProjectDetailComponent {

  private route = inject(ActivatedRoute);
  private projectsService = inject(ProjectsService);

  project: Project | undefined = this.projectsService.getById(
    this.route.snapshot.params['id']
  );
}
