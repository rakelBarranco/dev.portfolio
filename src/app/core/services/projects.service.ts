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
      longDesc: 'Aplicación de gestión de tareas pensada para equipos pequeños. Permite crear, organizar y priorizar tareas con un sistema de autenticación propio, rutas protegidas con guards y carga diferida de módulos para optimizar el rendimiento.',
      chips: ['Angular', 'Signals', 'SCSS'],
      featured: true,
      inProgress: true,
      features: [
        'Autenticación con guards y rutas protegidas',
        'Gestión de estado con signals',
        'Lazy loading de componentes',
        'Diseño responsive'
      ]
    },
    {
      id: 'weather-app',
      tag: '<app-weatherapp />',
      title: 'Weather App',
      desc: 'Consulta del tiempo en tiempo real con RxJS y API externa.',
      longDesc: 'Aplicación que consume una API meteorológica externa para mostrar el clima en tiempo real de cualquier ciudad, con gestión de peticiones HTTP mediante RxJS y manejo de estados de carga y error.',
      chips: ['Angular', 'RxJS', 'HTTP'],
      inProgress: true,
      features: [
        'Consumo de API REST externa',
        'Manejo de estados de carga y error',
        'Búsqueda de ciudades en tiempo real',
        'Diseño adaptado a distintos dispositivos'
      ]
    },
    {
      id: 'dev-portfolio',
      tag: '<app-portfolio />',
      title: 'Este portfolio',
      desc: 'SPA con Angular standalone, animaciones y lazy loading.',
      longDesc: 'El portfolio que estás viendo ahora mismo. Construido desde cero con Angular standalone components, animaciones en canvas, formularios reactivos con validación y diseño 100% personalizado.',
      chips: ['Standalone', 'Lazy loading', 'Vercel'],
      repoUrl: 'https://github.com/rakelBarranco/dev.portfolio',
      features: [
        'Componentes standalone sin NgModules',
        'Animaciones con Canvas API',
        'Formulario de contacto con Reactive Forms',
        'Integración con EmailJS'
      ]
    }
  ];

  getAll(): Project[] {
    return this.projects;
  }

  getById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}
