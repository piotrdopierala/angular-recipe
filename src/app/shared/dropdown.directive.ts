import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    private visible: boolean = false;

    @HostListener('click') toggleOpen(eventData: Event) {
        this.visible = !this.visible;
        if (this.visible) {
            this.renderRef.addClass(this.elementRef.nativeElement, 'open');
        } else {
            this.renderRef.removeClass(this.elementRef.nativeElement, 'open');
        }
    }

    constructor(private elementRef: ElementRef, private renderRef: Renderer2) {
    }

}