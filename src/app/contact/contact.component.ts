import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'mwave-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit
{
    public alert: { status: string, message: string };

    public contactForm = new FormGroup({
        name: new FormControl("", Validators.required),
        email: new FormControl("", [ Validators.required, Validators.email ]),
        message: new FormControl("", Validators.required)
    });

    constructor(private http: HttpClient, private analytics: Angulartics2) {  }
    ngOnInit() {  }

    public onSubmit()
    {
        const options = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
        console.log(environment.api_endpoint + '/mwaveContactUs');
        this.http.post(environment.api_endpoint + '/mwaveContactUs', JSON.stringify(this.contactForm.value), options)
            .subscribe((res: { status: string, message: string }) => {
                this.alert = { status: "success", message: res.message };
                this.analytics.eventTrack.next({ action: 'contact_message', properties: { category: 'success' }});
            }, (err) => {
                this.alert = { status: "danger", message: err.message };
                this.analytics.eventTrack.next({ action: 'contact_message', properties: { category: 'error' }});
            });
    }
}
