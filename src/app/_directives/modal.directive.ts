import { Component, ElementRef, Input, OnInit, OnDestroy, Directive } from '@angular/core';

import { ModalService } from '../_services/index';

@Directive({
    
    selector: 'modal',
    exportAs:'test'
    // template: '<ng-content></ng-content>'
})

export class ModalDirective   {
    
    private element: JQuery;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = $(el.nativeElement);
        let modal = this;
        debugger;
        // ensure id attribute exists
        
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');

        // close modal on background click
        this.element.on('click', function (e: any) {
            var target = $(e.target);
            if (!target.closest('.modal-body').length) {
                modal.close();
            }
        });

        
    }

    


    // open modal
    open(): void {
        this.element.show();
        $('body').addClass('modal-open');
    }

    // close modal
    close(): void {
        this.element.hide();
        $('body').removeClass('modal-open');
    }
}