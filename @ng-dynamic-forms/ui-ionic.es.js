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
import { ChangeDetectorRef, Component, ContentChildren, EventEmitter, Input, NgModule, Output, ViewChild, ViewChildren } from '@angular/core';
import { DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER, DynamicFormComponent, DynamicFormControlComponent, DynamicFormValidationService, DynamicFormsCoreModule, DynamicTemplateDirective } from '@ng-dynamic-forms/core';
import { Checkbox, DateTime, IonicModule, RadioGroup, Range, Select, TextInput, Toggle } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

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
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.customEvent = new EventEmitter();
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
            case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                return 1 /* Array */;
            case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                return 2 /* Checkbox */;
            case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
                return 3 /* DateTime */;
            case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                return 4 /* Group */;
            case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                return 5 /* Input */;
            case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                return 6 /* RadioGroup */;
            case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                return 8 /* Select */;
            case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
                return 7 /* Range */;
            case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
                return 10 /* Toggle */;
            case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                return 9 /* TextArea */;
            default:
                return null;
        }
    };
    DynamicIonicFormControlComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ionic-form-control,dynamic-form-ionic-control",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"[model.cls.element.container, model.cls.grid.container]\"><ng-container *ngIf=\"type !== 1 && template?.align === 'START'\"><ng-container *ngTemplateOutlet=\"template?.templateRef; context: model\"></ng-container></ng-container><div *ngIf=\"type === 1\" [dynamicId]=\"bindId && model.id\" [formArrayName]=\"model.id\" [ngClass]=\"model.cls.element.control\"><fieldset *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\" [formGroupName]=\"idx\" [ngClass]=\"[model.cls.element.group, model.cls.grid.group]\"><dynamic-ionic-form-control *ngFor=\"let controlModel of groupModel.group\" [bindId]=\"false\" [context]=\"groupModel\" [group]=\"control.at(idx)\" [hasErrorMessaging]=\"controlModel.hasErrorMessages\" [model]=\"controlModel\" [templates]=\"templates\" [ngClass]=\"[controlModel.cls.element.host, controlModel.cls.grid.host]\" (dfBlur)=\"onBlur($event)\" (dfChange)=\"onValueChange($event)\" (dfFocus)=\"onFocus($event)\" (ionEvent)=\"onCustomEvent($event)\"></dynamic-ionic-form-control><ng-container *ngTemplateOutlet=\"template?.templateRef; context: groupModel\"></ng-container></fieldset></div><fieldset *ngIf=\"type === 4\" [dynamicId]=\"bindId && model.id\" [formGroupName]=\"model.id\" [name]=\"model.name\" [ngClass]=\"model.cls.element.control\"><legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend><dynamic-ionic-form-control *ngFor=\"let controlModel of model.group\" [group]=\"control\" [hasErrorMessaging]=\"controlModel.hasErrorMessages\" [model]=\"controlModel\" [templates]=\"templates\" [ngClass]=\"[controlModel.cls.element.host, controlModel.cls.grid.host]\" (dfBlur)=\"onBlur($event)\" (dfChange)=\"onValueChange($event)\" (dfFocus)=\"onFocus($event)\" (ionEvent)=\"onCustomEvent($event)\"></dynamic-ionic-form-control></fieldset><ion-list *ngIf=\"type === 6\" radio-group [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionChange)=\"onValueChange($event)\"><ion-list-header *ngIf=\"model.label !== null\">{{model.label}}</ion-list-header><ion-item *ngFor=\"let option of model.options$ | async\" [ngClass]=\"model.cls.element.option\"><ion-label>{{option.label}}</ion-label><ion-radio [value]=\"option.value\"></ion-radio></ion-item></ion-list><ion-item *ngIf=\"type !== 1 && type !== 4 && type !== 6\" [ngSwitch]=\"type\"><ion-label *ngIf=\"(model.label !== null) && (type !== 2)\" floating [innerHTML]=\"model.label\" [ngClass]=\"[model.cls.element.label, model.cls.grid.label]\"></ion-label><ion-label *ngIf=\"(model.label !== null) && (type === 2)\" [innerHTML]=\"model.label\" [ngClass]=\"[model.cls.element.label, model.cls.grid.label]\"></ion-label><ion-checkbox *ngSwitchCase=\"2\" [checked]=\"model.checked\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-checkbox><ion-datetime *ngSwitchCase=\"3\" [displayFormat]=\"model.format\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" (ionBlur)=\"onBlur($event)\" (ionCancel)=\"onCustomEvent($event, 'ionCancel')\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-datetime><ion-input *ngSwitchCase=\"5\" clearInput=\"true\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" [readonly]=\"model.readOnly\" [step]=\"model.step\" [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\" [type]=\"model.inputType\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-input><ion-range *ngSwitchCase=\"7\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" [pin]=\"true\" [snaps]=\"true\" [step]=\"model.step\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-range><ion-select *ngSwitchCase=\"8\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [multiple]=\"model.multiple\" [ngClass]=\"model.cls.element.control\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"><ion-option *ngFor=\"let option of model.options$ | async\" [value]=\"option.value\">{{ option.label }}</ion-option></ion-select><ion-textarea *ngSwitchCase=\"9\" clearInput=\"true\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" [readonly]=\"model.readOnly\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-textarea><ion-toggle *ngSwitchCase=\"10\" [checked]=\"model.checked\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionBlur)=\"onBlur($event)\" (ionChange)=\"onValueChange($event)\" (ionFocus)=\"onFocus($event)\"></ion-toggle></ion-item><p *ngIf=\"model.placeholder\" class=\"hint form-hint\">{{model.placeholder}}</p><div *ngIf=\"hasErrorMessaging\" [hidden]=\"!showErrorMessages\"><p class=\"has-error\"><span *ngFor=\"let message of errorMessages\">{{message}}</span></p></div><ng-container *ngIf=\"type !== 1 && template?.align === 'END'\"><ng-container *ngTemplateOutlet=\"template?.templateRef; context: model\"></ng-container></ng-container><div #customTemplate><ng-content></ng-content></div></div>"
                },] },
    ];
    /**
     * @nocollapse
     */
    DynamicIonicFormControlComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
        { type: DynamicFormValidationService, },
    ]; };
    DynamicIonicFormControlComponent.propDecorators = {
        'contentTemplates': [{ type: ContentChildren, args: [DynamicTemplateDirective,] },],
        'inputTemplates': [{ type: Input, args: ["templates",] },],
        'bindId': [{ type: Input },],
        'context': [{ type: Input },],
        'group': [{ type: Input },],
        'hasErrorMessaging': [{ type: Input },],
        'model': [{ type: Input },],
        'blur': [{ type: Output, args: ["dfBlur",] },],
        'change': [{ type: Output, args: ["dfChange",] },],
        'focus': [{ type: Output, args: ["dfFocus",] },],
        'customEvent': [{ type: Output, args: ["ionEvent",] },],
        'ionCheckbox': [{ type: ViewChild, args: [Checkbox,] },],
        'ionDateTime': [{ type: ViewChild, args: [DateTime,] },],
        'ionInput': [{ type: ViewChild, args: [TextInput,] },],
        'ionRadioGroup': [{ type: ViewChild, args: [RadioGroup,] },],
        'ionRange': [{ type: ViewChild, args: [Range,] },],
        'ionSelect': [{ type: ViewChild, args: [Select,] },],
        'ionToggle': [{ type: ViewChild, args: [Toggle,] },],
        'customTemplate': [{ type: ViewChild, args: ["customTemplate",] },],
    };
    return DynamicIonicFormControlComponent;
}(DynamicFormControlComponent));

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
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        _this.customEvent = new EventEmitter();
        return _this;
    }
    DynamicIonicFormComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-ionic-form",
                    template: "<dynamic-ionic-form-control *ngFor=\"let controlModel of model; trackBy: trackByFn\" [group]=\"group\" [model]=\"controlModel\" [ngClass]=\"[controlModel.cls.element.host, controlModel.cls.grid.host]\" [templates]=\"templates\" (dfBlur)=\"onEvent($event, 1)\" (dfChange)=\"onEvent($event, 2)\" (dfFocus)=\"onEvent($event, 3)\" (ionEvent)=\"onEvent($event, 4)\"></dynamic-ionic-form-control>"
                },] },
    ];
    /**
     * @nocollapse
     */
    DynamicIonicFormComponent.ctorParameters = function () { return []; };
    DynamicIonicFormComponent.propDecorators = {
        'group': [{ type: Input },],
        'model': [{ type: Input },],
        'blur': [{ type: Output, args: ["dfBlur",] },],
        'change': [{ type: Output, args: ["dfChange",] },],
        'focus': [{ type: Output, args: ["dfFocus",] },],
        'customEvent': [{ type: Output, args: ["ionEvent",] },],
        'templates': [{ type: ContentChildren, args: [DynamicTemplateDirective,] },],
        'components': [{ type: ViewChildren, args: [DynamicIonicFormControlComponent,] },],
    };
    return DynamicIonicFormComponent;
}(DynamicFormComponent));

var DynamicFormsIonicUIModule = /** @class */ (function () {
    function DynamicFormsIonicUIModule() {
    }
    DynamicFormsIonicUIModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        TextMaskModule,
                        DynamicFormsCoreModule
                    ],
                    declarations: [
                        DynamicIonicFormControlComponent,
                        DynamicIonicFormComponent
                    ],
                    exports: [
                        DynamicFormsCoreModule,
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

export { DynamicIonicFormComponent, DynamicIonicFormControlComponent, DynamicFormsIonicUIModule };
//# sourceMappingURL=ui-ionic.es.js.map
