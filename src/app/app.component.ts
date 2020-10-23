import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	template: `
		<div class="lesson" *ngIf="lessons" *ngFor="let lesson of lessons">4
			<div class="lesson-detail">
				{{lesson | json}}
			</div>
		</div>
	`})
export class AppComponent {

	loginText = 'Login';
	signUpText = 'Sign Up';
	lessons = ['Lesson 1', 'Lessons 2'];

	login() {
		console.log('Login');
	}

	signUp() {
		console.log('Sign Up');
	}

}
