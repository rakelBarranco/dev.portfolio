import { Injectable } from '@angular/core';
import {Project} from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private projects: Project[] = [
    {
      id: 'task-manager',
      tag: '<app-taskmanager />',
      title: 'Task Manager',
      desc: 'App de gestión de tareas con autenticación, guards y lazy loading.',
      chips: ['Angular', 'Signals', 'SCSS'],
      featured: true
    },
    {
      id: 'weather-app',
      tag: '<app-weatherapp />',
      title: 'Weather App',
      desc: 'Consulta del tiempo en tiempo real con RxJS y API externa.',
      chips: ['Angular', 'RxJS', 'HTTP']
    },
    {
      id: 'dev-portfolio',
      tag: '<app-portfolio />',
      title: 'Este portfolio',
      desc: 'SPA con Angular standalone, animaciones y lazy loading.',
      chips: ['Standalone', 'Lazy loading', 'Vercel'],
    }
  ];

  getAll(): Project[] {
    return this.projects;
  }

  getById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}
