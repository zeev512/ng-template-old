import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
/*
I. Example 1.
Here is the breakdown of this example:
1. This template, unlike the previous templates also has one input variable (it could also have several)
2. The input variable is called lessonsCounter , and it's de ned via a ng-template property using the pre x let-
3. The variable lessonsCounter is visible inside the ng-template body, but not outside
4. The content of this variable is determined by the expression that its assigned to the property let-lessonsCounter
5. That expression is evaluated against a context object, passed to ngTemplateOutlet together with the template to instantiate
6. This context object must then have a property named estimate , for any value to be displayed inside the template
7. The context object is passed to ngTemplateOutlet via the context property, that can receive any expression that evaluates to an object

This is what would get rendered to the screen:
Approximately 10 lessons ...

II. Example 2.
In the second ng-template we can also have a template #defaultTabButtons injected directly
into our component using the @ViewChild decorator.
The template can be injected just like any other DOM element or component by providing the template reference name
#defaultTabButtons to the ViewChild decorator.
The motivvation to do that is to create a more customizable component, where we can pass to it not only a configuration
parameter or configuration object. we can also pass a template as an input parameter.

III. Example 3.
Let's take for example a tab container, where we would like to give the user of the component the possibility of
configuring the look and feel of the tab buttons.
Here is how that would look like, we would start by defining the custom template for the buttons in the parent component.
And then on the tab container component, we could define an input property which is also a template named headerTemplate
*/
@Component({
	selector: 'app-root',
	template: `
		<!-- Example 1 -->
		<ng-template #estimateTemplate let-lessonsCounter="estimate">
			<div> Approximately {{lessonsCounter}} lessons ...
			</div>
		</ng-template>
		<ng-container *ngTemplateOutlet="estimateTemplate;context:ctx">
		</ng-container>

		<!-- Example 2 -->
		<ng-template [ngIf]="lessons" #defaultTabButtons>
				<button class="tab-button" (click)="login()">
					{{loginText}}
				</button>
				<button class="tab-button" (click)="signUp()">
					{{signUpText}}
				</button>
		</ng-template>

		<!-- Example 3 -->
		<div>
		<ng-template #customTabButtons>
			<div class="custom-class">
				<button class="tab-button" (click)="login()">
					{{loginText}}
				</button>
				<button class="tab-button" (click)="signUp()">
					{{signUpText}}
				</button>
			</div>
		</ng-template>
		<tab-container [headerTemplate]="defaultTabButtons"></tab-container>
		</div>
		`
})
export class AppComponent implements OnInit {

	loginText = 'Login';
	signUpText = 'Sign Up';
	lessons = ['Lesson 1', 'Lessons 2'];

	@ViewChild('defaultTabButtons')
	private defaultTabButtonsTpl: TemplateRef<any>;

	ngOnInit() {
		console.log(this.defaultTabButtonsTpl);
	}

	login() {
		console.log('Login');
	}

	signUp() {
		console.log('Sign Up');
	}

	totalEstimate = 10;
	ctx = {estimate: this.totalEstimate};

}
