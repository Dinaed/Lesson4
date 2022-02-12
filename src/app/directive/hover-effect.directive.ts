import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter')
  onMouseEnter(target:any){
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1.3)');
  }

  @HostListener('mouseleave')
  onMouseLeave(target:any){
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1)');
  }
}
