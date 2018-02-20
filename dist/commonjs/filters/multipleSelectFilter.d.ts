import { I18N } from 'aurelia-i18n';
import { Column, Filter } from './../models';
import { FilterArguments } from '../models/filterArguments.interface';
import { FilterCallback } from './../models/filterCallback.interface';
export declare class MultipleSelectFilter implements Filter {
    private i18n;
    $filterElm: any;
    grid: any;
    searchTerms: string[] | number[] | boolean[];
    columnDef: Column;
    callback: FilterCallback;
    defaultOptions: any;
    isFilled: boolean;
    /**
     * Initialize the Filter
     */
    constructor(i18n: I18N);
    /**
     * Initialize the filter template
     */
    init(args: FilterArguments): void;
    /**
     * Clear the filter values
     */
    clear(triggerFilterChange?: boolean): void;
    /**
     * destroy the filter
     */
    destroy(): void;
    /**
     * Create the HTML template as a string
     */
    private buildTemplateHtmlString();
    /**
     * From the html template string, create a DOM element
     * Subscribe to the onClose event and run the callback when that happens
     * @param filterTemplate
     */
    private createDomElement(filterTemplate);
    private findValueInSearchTerms(value);
    private subscribeOnClose();
}
