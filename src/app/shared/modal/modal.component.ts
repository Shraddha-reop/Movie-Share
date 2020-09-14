import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
   
    @Input()
    public title: string;

    /**
     * The showModal to set state.
     */
    @Input()
    public showModal: boolean = null;

    /**
     * When the close icon or grey overlay area is clicked.
     */
    @Output()
    public closeModal: EventEmitter<Event> = new EventEmitter<Event>();

    ngOnInit(){
        // console.log( this.showModal);
    }
}
