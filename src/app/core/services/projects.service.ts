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
      desc: 'App del tiempo con autocompletado, geolocalización y previsión de 5 días.',
      longDesc: 'Aplicación del tiempo que consume la API de OpenWeatherMap. Incluye búsqueda de ciudades con autocompletado y debounce mediante RxJS, geolocalización, previsión de 5 días, fondo dinámico según la hora local y animaciones de clima en Canvas. Construida con Angular standalone, signals y Tailwind CSS.',
      chips: ['Angular', 'TypeScript', 'Tailwind', 'RxJS'],
      repoUrl: 'https://github.com/rakelBarranco/weather-app',
      demoUrl: 'https://weather-app-raquel.vercel.app',
      features: [
        'Búsqueda con autocompletado y debounce (RxJS)',
        'Geolocalización y búsqueda por coordenadas',
        'Previsión de 5 días',
        'Fondo dinámico y animaciones de clima en Canvas',
        'Estado reactivo con signals y diseño responsive'
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
