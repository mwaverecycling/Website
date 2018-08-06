import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
    selector: 'mwave-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit
{
    public isCollapsed = false;

    constructor(private router: Router)
    {
        this.router.events.subscribe((event) => {
                if(!this.isCollapsed && event instanceof NavigationStart) { this.isCollapsed = true; }
            });
    }

    ngOnInit() {  }

}
