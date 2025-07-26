import {
  Component,
  ElementRef,
  contentChild,
  inject,
  input,
  ViewEncapsulation,
  AfterContentInit,
  afterNextRender,
  afterRender,
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
export class ControlComponent implements AfterContentInit {
  // @NOTE: discouraged instead use host: { class: 'control' }
  // @HostBinding('class') className = 'control';

  // @NOTE: discouraged instead use host: { '(click)': 'onClick()' }
  // @HostListener('click') onClick() {
  // console.log('clicked!');
  // }

  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );

  constructor() {
    afterRender(() => {
      console.log('AFTER RENDER'); // @NOTE: this is called after the first render for any component
    });

    afterNextRender(() => {
      console.log('AFTER NEXT RENDER'); // @NOTE: this is called after the first render for any component
    });
  }

  ngAfterContentInit() {
    // ...
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
