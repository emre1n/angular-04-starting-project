import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  // private form = viewChild<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<Ticket>(); // @NOTE: this is a regular property with Output decorator
  add = output<{ title: string; text: string }>(); // @NOTE: this is a signal with output method

  ngOnInit() {
    console.log('ON INIT');
    console.log('FORM: ', this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log('FORM: ', this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title, text: ticketText });
    this.form?.nativeElement.reset();
  }
}
