import { ChangeDetectorRef, EventEmitter, ElementRef, OnChanges, QueryList, SimpleChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Checkbox, DateTime, TextInput, RadioGroup, Range, Select, Toggle } from "ionic-angular";
import { DynamicFormValidationService, DynamicFormControlComponent, DynamicFormControlModel, DynamicFormArrayGroupModel, DynamicFormControlEvent, DynamicTemplateDirective } from "@ng-dynamic-forms/core";
export declare const enum IonicFormControlType {
    Array = 1,
    Checkbox = 2,
    DateTime = 3,
    Group = 4,
    Input = 5,
    RadioGroup = 6,
    Range = 7,
    Select = 8,
    TextArea = 9,
    Toggle = 10,
}
export declare class DynamicIonicFormControlComponent extends DynamicFormControlComponent implements OnChanges {
    protected changeDetectorRef: ChangeDetectorRef;
    protected validationService: DynamicFormValidationService;
    contentTemplates: QueryList<DynamicTemplateDirective>;
    inputTemplates: QueryList<DynamicTemplateDirective>;
    bindId: boolean;
    context: DynamicFormArrayGroupModel | null;
    group: FormGroup;
    hasErrorMessaging: boolean;
    model: DynamicFormControlModel;
    blur: EventEmitter<DynamicFormControlEvent>;
    change: EventEmitter<DynamicFormControlEvent>;
    focus: EventEmitter<DynamicFormControlEvent>;
    customEvent: EventEmitter<DynamicFormControlEvent>;
    ionCheckbox: Checkbox | undefined;
    ionDateTime: DateTime | undefined;
    ionInput: TextInput | undefined;
    ionRadioGroup: RadioGroup | undefined;
    ionRange: Range | undefined;
    ionSelect: Select | undefined;
    ionToggle: Toggle | undefined;
    customTemplate: ElementRef;
    type: IonicFormControlType | null;
    constructor(changeDetectorRef: ChangeDetectorRef, validationService: DynamicFormValidationService);
    ngOnChanges(changes: SimpleChanges): void;
    hasCustomTemplate(): boolean;
    static getFormControlType(model: DynamicFormControlModel): IonicFormControlType | null;
}
