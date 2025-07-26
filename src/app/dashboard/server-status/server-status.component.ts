import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'online'; // @NOTE: this is a regular property
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline'); // @NOTE: this is a signal

  // private interval?: ReturnType<typeof setInterval>;

  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log('CURRENT STATUS: ', this.currentStatus());
    });
  }

  ngOnInit() {
    console.log('ON INIT');
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval); // @Note: to clean up the interval and avoid memory leaks
  // }
}

/*
Signal Effects Cleanup Functions
When working with Signal effects, you sometimes might need to perform some cleanup work before the effect function runs again (e.g., to clear some timer or something like that).

Angular's effect() allows you to do that!

It does provide you with an onCleanup hook which you can execute as part of your effect function to define what should happen before the effect code runs the next time:

effect((onCleanup) => {
  const tasks = getTasks();
  const timer = setTimeout(() => {
    console.log(`Current number of tasks: ${tasks().length}`);
  }, 1000);
  onCleanup(() => {
    clearTimeout(timer);
  });
});
*/
