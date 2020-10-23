import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
/*
Possible solution would be to replace the outer div element
with the ng-container element directive
 */
@Component({
	selector: 'app-root',
	template: `
		<ng-container *ngIf="lessons">
			<div class="lesson" *ngFor="let lesson of lessons">
				<div class="lesson-detail">
					{{lesson | json}}
				</div>
			</div>
		</ng-container>	`})
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
