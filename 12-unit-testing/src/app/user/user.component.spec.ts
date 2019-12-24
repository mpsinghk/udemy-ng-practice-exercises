import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

describe('UserComponent', () => {
    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should use the user name from the service', () => {
        const userService = fixture.debugElement.injector.get(UserService);
        expect(userService.user.name).toEqual(component.user.name);
    });

    it('should display the user name if user is logged in', () => {
        component.isLoggedIn = true;
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(component.user.name);
    });

    it('should not display the user name if user is not logged in', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).not.toContain(
            component.user.name
        );
    });

    it('should not fetch data successfully if not called asynchronously', () => {
        const dataService = fixture.debugElement.injector.get(DataService);
        let spy = spyOn(dataService, 'getDetails').and.returnValue(
            Promise.resolve('Data')
        );
        fixture.detectChanges();
        expect(component.data).toBe(undefined);
    });

    it('should fetch data successfully if called asynchronously', async(() => {
        const dataService = fixture.debugElement.injector.get(DataService);
        let spy = spyOn(dataService, 'getDetails').and.returnValue(
            Promise.resolve('Data')
        );
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.data).toBe('Data');
        });
    }));

    it('should fetch data successfully if called fakeAsynchronously', fakeAsync(() => {
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        const dataService = fixture.debugElement.injector.get(DataService);
        let spy = spyOn(dataService, 'getDetails').and.returnValue(
            Promise.resolve('Data')
        );
        fixture.detectChanges();
        tick();
        expect(component.data).toBe('Data');
    }));
});
