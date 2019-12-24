import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit() {
    }

    onLoadServers() {
        // Do whatever you want to perform here and then navigate to servers
        this.router.navigate(['/servers']);
    }

    onLoadServer(id: number) {
        // Do whatever you want to perform here and then navigate to servers
        this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowedit: '1' }, fragment: 'loading' });
    }

    onLogin() {
        this.authService.login();
    }

    onLogout() {
        this.authService.logout();
    }
}
