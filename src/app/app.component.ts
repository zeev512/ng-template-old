import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
/*
This is an example of incorrect usag of multiple structureal directives.
The console will through this error:

Uncaught Error: Template parse errors:
Can't have multiple template bindings on one element. Use only one attribute named 'template' or prefixed with * ("
		<div class="lesson" *ngIf="lessons" [ERROR ->]*ngFor="let lesson of lessons">4
			<div class="lesson-detail">
				{{lesson | json}}
"): ng:///AppModule/AppComponent.html@1:38
    at syntaxError (compiler.es5.js:1690)
    at TemplateParser.webpackJsonp.../../../compiler/@angular/compiler.es5.js.TemplateParser.parse (compiler.es5.js:12811)
    at JitCompiler.webpackJsonp.../../../compiler/@angular/compiler.es5.js.JitCompiler._compileTemplate (compiler.es5.js:26963)
    at compiler.es5.js:26883
    at Set.forEach (<anonymous>)
    at JitCompiler.webpackJsonp.../../../compiler/@angular/compiler.es5.js.JitCompiler._compileComponents (compiler.es5.js:26883)
    at compiler.es5.js:26770
    at Object.then (compiler.es5.js:1679)
    at JitCompiler.webpackJsonp.../../../compiler/@angular/compiler.es5.js.JitCompiler._compileModuleAndComponents (compiler.es5.js:26769)
    at JitCompiler.webpackJsonp.../../../compiler/@angular/compiler.es5.js.JitCompiler.compileModuleAsync (compiler.es5.js:26698)
 */
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
