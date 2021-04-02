import { Directive, Input, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNextTab]'
})
export class NextTabDirective {

  @Input('appNextTab') nextControl: any = '';
  
    @HostListener("keydown.enter", ["$event"])
    onEnter(event: KeyboardEvent) {
      if (this.nextControl) {
        if (this.nextControl.focus) {
          this.nextControl.focus();
          this.nextControl.select();
          event.preventDefault();
          // return false;
        }
      }
    }
  
    constructor(private control: NgControl) { }
    
  }