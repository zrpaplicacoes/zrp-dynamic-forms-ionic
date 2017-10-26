import { EventEmitter, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent, DynamicFormControlEvent, DynamicFormControlModel, DynamicTemplateDirective } from "@ng-dynamic-forms/core";
import { DynamicIonicFormControlComponent } from "./dynamic-ionic-form-control.component";
export declare class DynamicIonicFormComponent extends DynamicFormComponent {
    group: FormGroup;
    model: DynamicFormControlModel[];
    blur: EventEmitter<DynamicFormControlEvent>;
    change: EventEmitter<DynamicFormControlEvent>;
    focus: EventEmitter<DynamicFormControlEvent>;
    customEvent: EventEmitter<DynamicFormControlEvent>;
    templates: QueryList<DynamicTemplateDirective>;
    components: QueryList<DynamicIonicFormControlComponent>;
}
