import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export default class AboutComponent {
  showFullLetter = false;

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

  recommendation = {
    quote: 'Estoy seguro de que va a ser una pieza clave en cualquier equipo de desarrollo en el que entre. La recomiendo totalmente y sé que le va a ir genial.',
    author: 'Carlos Bayarri Cebrecos',
    role: 'Head of Frontend, Disid',
    fullText: `Quiero recomendar a Raquel Barranco, que ha estado estos últimos meses conmigo en un programa de prácticas en la empresa. Durante este tiempo, he sido el encargado de su formación y puedo decir que ha demostrado que le encanta la programación frontend, que tiene muchísimas ganas de aprender y que trabaja súper bien. Cumplió con todas las tareas del plan sin problemas.

Primera fase (Formación intensiva): Raquel empezó desde cero y devoró un plan de estudios muy completo. Aprendió metodologías de trabajo (Agile, Kanban, Scrum), control de versiones con Git y GitHub, fundamentos web y maquetación con HTML y CSS. Además, dominó la programación con JavaScript y TypeScript para luego meterse de lleno en Angular, donde aprendió a manejar componentes, inyección de dependencias, gestión de estado con signals, consumo de APIs y sus primeras pruebas unitarias.

Segunda fase (Proyecto real): Después de la teoría, se integró en un proyecto real trabajando codo con codo con un equipo de compañeros de frontend y backend. Ahí fue donde demostró que sabe trabajar en equipo, que se comunica muy bien y que es capaz de aplicar todo lo aprendido a un entorno real de producción.

Más allá de lo técnico, lo mejor de Raquel es su actitud: es proactiva, le gusta lo que hace y se adaptó enseguida a la dinámica del equipo.

Estoy seguro de que va a ser una pieza clave en cualquier equipo de desarrollo en el que entre. La recomiendo totalmente y sé que le va a ir genial.`
  };

  toggleLetter() {
    this.showFullLetter = !this.showFullLetter;
  }
}
