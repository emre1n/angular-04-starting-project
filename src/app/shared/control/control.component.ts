import {
  Component,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @NOTE: discouraged instead use host: { class: 'control' }
  // @HostBinding('class') className = 'control';

  // @NOTE: discouraged instead use host: { '(click)': 'onClick()' }
  // @HostListener('click') onClick() {
  // console.log('clicked!');
  // }

  label = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
  }
}
