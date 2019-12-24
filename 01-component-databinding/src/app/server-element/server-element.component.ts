import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated // None, ShadowDom, Emulated
})
export class ServerElementComponent
    implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy {
    // tslint:disable-next-line: no-input-rename
    @Input('srvElement') element: { type: string; name: string; content: string };

    constructor() {
        console.log('Constructor Called!');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges Called!');
        console.log(changes);
    }

    ngOnInit() {
        console.log('ngOnit Called!');
    }

    ngDoCheck() {
        console.log('ngDoCheck Called!');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit Called!');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked Called!');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit Called!');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked Called!');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy Called!');
    }
}
