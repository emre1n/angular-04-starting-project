import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

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

  ngOnInit() {
    console.log('ON INIT');
    console.log('FORM: ', this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log('FORM: ', this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    console.log('ENTERED TITLE: ' + title);
    console.log('ENTERED TICKET TEXT: ' + ticketText);
    this.form?.nativeElement.reset();
  }
}
