module knockout {
    interface koSubscription{
        dispose();
    };
    interface koExtendOptions {
        throttle?: number;
    };
    interface koExtend {
        ();
        extend(options:koExtendOptions);
    }
    interface koComputedOptions {
        read?: () =>any;
        write?: () =>void;
        owner?: any;
    };
    export interface koComputed {
        (evaluator: () => any): koExtend;
        (options: koComputedOptions): koExtend;
        (): any;
    };
    export interface koObservable {
        (value: number): {
            (newValue: number): void;
            (): number;
            subscribe(callback: (newValue: number) => void ):koSubscription;
        };
        (value: string): {
            (newValue: string): void;
            (): string;
            subscribe(callback: (newValue: string) => void ):koSubscription;
        };
        (value: bool): {
            (newValue: bool): void;
            (): bool;
            subscribe(callback: (newValue: bool) => void ):koSubscription;
        };
        (value: any): {
            (newValue: any): void;
            (): any;
            subscribe(callback: (newValue: any) => void ):koSubscription;
        };
    };
    export interface koObservableArray {
        (array: Array): {
            (newValue: Array): void;
            (): Array;
            subscribe(callback: (newValue: Array) => void ): koSubscription;

            pop(): any;
            push(...items: any[]): void;
            reverse(): any[];
            shift(): any;
            slice(start: number, end?: number): any[];
            sort(compareFn?: (a, b) => number): any[];
            splice(start: number): string[];
            splice(start: number, deleteCount: number, ...items: any[]): any[];
            unshift(...items: any[]): number;
            indexOf(item): number;

            remove(value):any;
            remove(predicate: (value) =>bool): any;
            removeAll();
            removeAll(arrayOfValues: any[]):any[];

            destroy(value);
            destroy(predicate: (value) =>bool): any;
            destroyAll();
            destroyAll(arrayOfValues: any[]):any[];
            replace(oldItem, newItem);
        };
    };

    export function applyBindings(viewModel?, rootNode?: HTMLElement);
    export function toJSON(viewModel, replacer?, space?):string;
    export function toJS(viewModel): Object;

    export var observable: koObservable;
    export var computed: koComputed;
    export var observableArray: koObservableArray;
};
module knockout.utils {
    export var fieldsIncludedWithJsonPost:any[];

    export function extend(target, source);
    export function arrayForEach(array: any[], action: (any) =>void );
    export function arrayIndexOf(array: any[], item: any);
    export function arrayFirst(array: any[], predicate: (item) =>bool, predicateOwner? ): any;
    export function arrayFilter(array: any[], predicate: (item) =>bool);
    export function arrayGetDistinctValues(array: any[]);
    export function arrayMap(array: any[], mapping:(item)=>any);
    export function arrayPushAll(array: any[],valuesToPush: any[]);
    export function arrayRemoveItem(array: any[], itemToRemove);
    export function getFormFields(form: HTMLFormElement, fieldName: string): HTMLElement[];
    export function parseJson(jsonString:string):Object;
    export function registerEventHandler(element: HTMLElement, eventType: string, handler: (event: Event) =>void );
    export function stringifyJson(data, replacer?, space?);
    export function range(min: number, max: number);
    export function toggleDomNodeCssClass(node:HTMLElement, className:string, shouldHaveClass?:bool);
    export function triggerEvent(element: HTMLElement, eventType: string);
    export function unwrapObservable(value);
};

declare var ko: knockout;