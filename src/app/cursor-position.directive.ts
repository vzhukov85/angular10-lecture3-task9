import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cursorPosition]',
})
export class CursorPositionDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click')
  onClick(): void {
    const value = this.elementRef.nativeElement.value;
    const pos = value.indexOf('_');
    if (pos > 0) {
      this.elementRef.nativeElement.selectionStart = pos;
    }
  }
}
