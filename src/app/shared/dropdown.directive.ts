import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  isOpen: boolean;
  cssClass: string;

  constructor(private elemRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    console.log('directive onInit');
    this.isOpen = false;
    this.cssClass = 'open';
  }

  @HostListener('click') toggleOpen(eventData: Event) {
    console.log('click', this.isOpen);
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.render.addClass(this.elemRef.nativeElement, this.cssClass);
    } else {
      this.render.removeClass(this.elemRef.nativeElement, this.cssClass);
    }

  }


}
