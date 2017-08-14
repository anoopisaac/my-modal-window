import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from "../_directives/modal.directive";
import { ModalService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',

})

export class HomeComponent implements OnInit {
    private bodyText: string;
    @ViewChild('modal1', {read: ModalDirective}) modal1: ModalDirective;
    @ViewChild('modal2', {read: ModalDirective}) modal2: ModalDirective;

    constructor() {
    }

    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
    }

    openModal(id: string) {
        if(id=="custom-modal-1"){
            this.modal1.open();
        }
        else{
            this.modal2.open();
        }
        
    }

    closeModal(id: string) {
        if(id=="custom-modal-1"){
            this.modal1.close();
        }
        else{
            this.modal2.close();
        }
    }
}