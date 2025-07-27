import { Component, Input, input, output, signal } from '@angular/core';

import type { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // @Input({}) // @NOTE: Configuration object is passed as a parameter to the input method
  data = input.required<Ticket>(); // @NOTE: aliases are discouraged as a configuration object property
  close = output();

  detailsVisible = signal(false);

  toggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
