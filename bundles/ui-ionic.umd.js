/*!
@ng-dynamic-forms/ui-ionic 1.4.34 2017-10-26 13:27 UTC
Copyright (c) 2016-2017, Udo Schöfer http://www.udos86.de

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ng-dynamic-forms/core'), require('ionic-angular'), require('@angular/common'), require('@angular/forms'), require('angular2-text-mask')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@ng-dynamic-forms/core', 'ionic-angular', '@angular/common', '@angular/forms', 'angular2-text-mask'], factory) :
	(factory((global.ngDF = global.ngDF || {}, global.ngDF.ionicUI = {}),global.ng.core,global.ngDF.core,global['ionic-angular'],global.ng.common,global.ng.forms,global['angular2-text-mask']));
}(this, (function (exports,core,core$1,ionicAngular,common,forms,angular2TextMask) { 'use strict';

var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicIonicFormControlComponent = /** @class */ (function (_super) {
    __extends$1(DynamicIonicFormControlComponent, _super);
    /**
     * @param {?} changeDetectorRef
     * @param {?} validationService
     */
    function DynamicIonicFormControlComponent(changeDetectorRef, validationService) {
        var _this = _super.call(this, changeDetectorRef, validationService) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.context = null;
        _this.hasErrorMessaging = false;
        _this.blur = new core.EventEmitter();
        _this.change = new core.EventEmitter();
        _this.focus = new core.EventEmitter();
        _this.customEvent = new core.EventEmitter();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    DynamicIonicFormControlComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes["model"]) {
            this.type = DynamicIonicFormControlComponent.getFormControlType(this.model);
        }
    };
    /**
     * @return {?}
     */
    DynamicIonicFormControlComponent.prototype.hasCustomTemplate = function () {
        return this.customTemplate.nativeElement.children.length !== 0;
    };
    /**
     * @param {?} model
     * @return {?}
     */
    DynamicIonicFormControlComponent.getFormControlType = function (model) {
        switch (model.type) {
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                return 1 /* Array */;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                return 2 /* Checkbox */;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
                return 3 /* DateTime */;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                return 4 /* Group */;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                return 5 /* Input */;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                return 6 /* RadioGroup */;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                return 8 /* Select */;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
                return 7 /* Range */;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
                return 10 /* Toggle */;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                return 9 /* TextArea */;
            default:
                return null;
        }
    };
    DynamicIonicFormControlComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "dynamic-ionic-form-control,dynamic-form-ionic-control",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"[model.cls.element.container, model.cls.grid.container]\"><ng-container *ngIf=\"type !== 1 && template?.align === 'START'\"><ng-container *ngTemplateOutlet=\"template?.templateRef; context: model\"></ng-container></ng-container><div *ngIf=\"type === 1\" [dynamicId]=\"bindId && model.id\" [formArrayName]=\"model.id\" [ngClass]=\"model.cls.element.control\"><fieldset *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\" [formGroupName]=\"idx\" [ngClass]=\"[model.cls.element.group, model.cls.grid.group]\"><dynamic-ionic-form-control *ngFor=\"let controlModel of groupModel.group\" [bindId]=\"false\" [context]=\"groupModel\" [group]=\"control.at(idx)\" [hasErrorMessaging]=\"controlModel.hasErrorMessages\" [model]=\"controlModel\" [templates]=\"templates\" [ngClass]=\"[controlModel.cls.element.host, controlModel.cls.grid.host]\" (dfBlur)=\"onBlur($event)\" (dfChange)=\"onValueChange($event)\" (dfFocus)=\"onFocus($event)\" (ionEvent)=\"onCustomEvent($event)\"></dynamic-ionic-form-control><ng-container *ngTemplateOutlet=\"template?.templateRef; context: groupModel\"></ng-container></fieldset></div><fieldset *ngIf=\"type === 4\" [dynamicId]=\"bindId && model.id\" [formGroupName]=\"model.id\" [name]=\"model.name\" [ngClass]=\"model.cls.element.control\"><legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend><dynamic-ionic-form-control *ngFor=\"let controlModel of model.group\" [group]=\"control\" [hasErrorMessaging]=\"controlModel.hasErrorMessages\" [model]=\"controlModel\" [templates]=\"templates\" [ngClass]=\"[controlModel.cls.element.host, controlModel.cls.grid.host]\" (dfBlur)=\"onBlur($event)\" (dfChange)=\"onValueChange($event)\" (dfFocus)=\"onFocus($event)\" (ionEvent)=\"onCustomEvent($event)\"></dynamic-ionic-form-control></fieldset><ion-list *ngIf=\"type === 6\" radio-group [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionChange)=\"onValueChange($event)\"><ion-list-header *ngIf=\"model.label !== null\">{{model.label}}</ion-list-header><ion-item *ngFor=\"let option of model.options$ | async\" [ngClass]=\"model.cls.element.option\"><ion-label>{{option.label}}</ion-label><ion-radio [value]=\"option.value\"></ion-radio></ion-item></ion-list><ion-item *ngIf=\"type !== 1 && type !== 4 && type !== 6\" [ngSwitch]=\"type\"><ion-label *ngIf=\"(model.label !== null) && (type !== 2)\" floating [innerHTML]=\"model.label\" [ngClass]=\"[model.cls.element.label, model.cls.grid.label]\"></ion-label><ion-label *ngIf=\"(model.label !== null) && (type === 2)\" [innerHTML]=\"model.label\" [ngClass]=\"[model.cls.element.label, model.cls.grid.label]\"></ion-label><ion-checkbox *ngSwitchCase=\"2\" [checked]=\"model.checked\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-checkbox><ion-datetime *ngSwitchCase=\"3\" [displayFormat]=\"model.format\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" (ionBlur)=\"onBlur($event)\" (ionCancel)=\"onCustomEvent($event, 'ionCancel')\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-datetime><ion-input *ngSwitchCase=\"5\" clearInput=\"true\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" [readonly]=\"model.readOnly\" [step]=\"model.step\" [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\" [type]=\"model.inputType\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-input><ion-range *ngSwitchCase=\"7\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" [pin]=\"true\" [snaps]=\"true\" [step]=\"model.step\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-range><ion-select *ngSwitchCase=\"8\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [multiple]=\"model.multiple\" [ngClass]=\"model.cls.element.control\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"><ion-option *ngFor=\"let option of model.options$ | async\" [value]=\"option.value\">{{ option.label }}</ion-option></ion-select><ion-textarea *ngSwitchCase=\"9\" clearInput=\"true\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" [readonly]=\"model.readOnly\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-textarea><ion-toggle *ngSwitchCase=\"10\" [checked]=\"model.checked\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-toggle></ion-item><p *ngIf=\"model.placeholder\" class=\"hint form-hint\">{{model.placeholder}}</p><div *ngIf=\"hasErrorMessaging\" [hidden]=\"!showErrorMessages\"><p class=\"has-error\"><span *ngFor=\"let message of errorMessages\">{{message}}</span></p></div><ng-container *ngIf=\"type !== 1 && template?.align === 'END'\"><ng-container *ngTemplateOutlet=\"template?.templateRef; context: model\"></ng-container></ng-container><div #customTemplate><ng-content></ng-content></div></div>"
                },] },
    ];
    /**
     * @nocollapse
     */
    DynamicIonicFormControlComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef, },
        { type: core$1.DynamicFormValidationService, },
    ]; };
    DynamicIonicFormControlComponent.propDecorators = {
        'contentTemplates': [{ type: core.ContentChildren, args: [core$1.DynamicTemplateDirective,] },],
        'inputTemplates': [{ type: core.Input, args: ["templates",] },],
        'bindId': [{ type: core.Input },],
        'context': [{ type: core.Input },],
        'group': [{ type: core.Input },],
        'hasErrorMessaging': [{ type: core.Input },],
        'model': [{ type: core.Input },],
        'blur': [{ type: core.Output, args: ["dfBlur",] },],
        'change': [{ type: core.Output, args: ["dfChange",] },],
        'focus': [{ type: core.Output, args: ["dfFocus",] },],
        'customEvent': [{ type: core.Output, args: ["ionEvent",] },],
        'ionCheckbox': [{ type: core.ViewChild, args: [ionicAngular.Checkbox,] },],
        'ionDateTime': [{ type: core.ViewChild, args: [ionicAngular.DateTime,] },],
        'ionInput': [{ type: core.ViewChild, args: [ionicAngular.TextInput,] },],
        'ionRadioGroup': [{ type: core.ViewChild, args: [ionicAngular.RadioGroup,] },],
        'ionRange': [{ type: core.ViewChild, args: [ionicAngular.Range,] },],
        'ionSelect': [{ type: core.ViewChild, args: [ionicAngular.Select,] },],
        'ionToggle': [{ type: core.ViewChild, args: [ionicAngular.Toggle,] },],
        'customTemplate': [{ type: core.ViewChild, args: ["customTemplate",] },],
    };
    return DynamicIonicFormControlComponent;
}(core$1.DynamicFormControlComponent));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicIonicFormComponent = /** @class */ (function (_super) {
    __extends(DynamicIonicFormComponent, _super);
    function DynamicIonicFormComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blur = new core.EventEmitter();
        _this.change = new core.EventEmitter();
        _this.focus = new core.EventEmitter();
        _this.customEvent = new core.EventEmitter();
        return _this;
    }
    DynamicIonicFormComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "dynamic-ionic-form",
                    template: "<dynamic-ionic-form-control *ngFor=\"let controlModel of model; trackBy: trackByFn\" [group]=\"group\" [model]=\"controlModel\" [ngClass]=\"[controlModel.cls.element.host, controlModel.cls.grid.host]\" [templates]=\"templates\" (dfBlur)=\"onEvent($event, 1)\" (dfChange)=\"onEvent($event, 2)\" (dfFocus)=\"onEvent($event, 3)\" (ionEvent)=\"onEvent($event, 4)\"></dynamic-ionic-form-control>"
                },] },
    ];
    /**
     * @nocollapse
     */
    DynamicIonicFormComponent.ctorParameters = function () { return []; };
    DynamicIonicFormComponent.propDecorators = {
        'group': [{ type: core.Input },],
        'model': [{ type: core.Input },],
        'blur': [{ type: core.Output, args: ["dfBlur",] },],
        'change': [{ type: core.Output, args: ["dfChange",] },],
        'focus': [{ type: core.Output, args: ["dfFocus",] },],
        'customEvent': [{ type: core.Output, args: ["ionEvent",] },],
        'templates': [{ type: core.ContentChildren, args: [core$1.DynamicTemplateDirective,] },],
        'components': [{ type: core.ViewChildren, args: [DynamicIonicFormControlComponent,] },],
    };
    return DynamicIonicFormComponent;
}(core$1.DynamicFormComponent));

var DynamicFormsIonicUIModule = /** @class */ (function () {
    function DynamicFormsIonicUIModule() {
    }
    DynamicFormsIonicUIModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.ReactiveFormsModule,
                        ionicAngular.IonicModule,
                        angular2TextMask.TextMaskModule,
                        core$1.DynamicFormsCoreModule
                    ],
                    declarations: [
                        DynamicIonicFormControlComponent,
                        DynamicIonicFormComponent
                    ],
                    exports: [
                        core$1.DynamicFormsCoreModule,
                        DynamicIonicFormControlComponent,
                        DynamicIonicFormComponent
                    ]
                },] },
    ];
    /**
     * @nocollapse
     */
    DynamicFormsIonicUIModule.ctorParameters = function () { return []; };
    return DynamicFormsIonicUIModule;
}());

exports.DynamicIonicFormComponent = DynamicIonicFormComponent;
exports.DynamicIonicFormControlComponent = DynamicIonicFormControlComponent;
exports.DynamicFormsIonicUIModule = DynamicFormsIonicUIModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-ionic.umd.js.map
