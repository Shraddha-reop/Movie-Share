import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { selectIsLoggedIn } from 'src/app/store/app.selector';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() title: any;
    @Input() desc: any;
    @Input() category: any;
    @Input() year: any;
    @Input() id: any;
    @Input() isLoggedIn: boolean;
    @Output() change: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    delete: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    add: EventEmitter<any> = new EventEmitter<any>();

    public selectIsLoggedIn$: Observable<boolean> = this.store.select(selectIsLoggedIn);
    constructor(  public store: Store<AppState>) { }

    ngOnInit() {
        console.log(this.isLoggedIn, 'islogin');
        
    }
    update() {
        this.change.emit(this.id);
    }

    remove() {
        this.delete.emit(this.id);
    }

    OnAdd(){
        this.add.emit();
    }
}