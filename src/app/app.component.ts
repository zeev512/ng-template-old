import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
/*
This is workaround be which we add extra div element.
 */
@Component({
	selector: 'app-root',
	template: `
		<div *ngIf="lessons">
			<div class="lesson" *ngFor="let lesson of lessons">
				<div class="lesson-detail">
					{{lesson | json}}
				</div>
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
