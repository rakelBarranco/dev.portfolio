import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {

  experience = [
    {
      role: 'Desarrolladora Frontend en prácticas',
      company: 'Disid',
      period: 'Marzo 2026 – Junio 2026',
      items: [
        'Desarrollo de aplicaciones con Angular y TypeScript',
        'Consumo de APIs REST',
        'Trabajo con Git y GitHub',
        'Participación en proyecto real con equipos frontend y backend',
        'Metodologías ágiles (Scrum/Kanban)'
      ]
    },
    {
      role: 'Diseñadora en prácticas',
      company: 'Tuateam',
      period: 'Marzo 2023 – Junio 2023',
      items: [
        'Diseño 3D',
        'Edición de vídeo'
      ]
    }
  ];
}
