export declare class Modal {
    protected uid: string;
    protected divOverlay_: HTMLElement | null | undefined;
    protected divModal_: HTMLElement | null | undefined;
    protected zIndex: number;
    constructor(props: any);
    protected createElements(): void;
    protected openRegiter(): void;
    protected openUnRegister(): void;
    getDivOverlay(): HTMLElement | null | undefined;
    getDivContent(): HTMLElement | null | undefined;
    open(): void;
    close(): void;
    destroy(): void;
}
export default Modal;

export declare type IAlertPropsObj = {
    title: string;
    message: string;
    buttons: IAlertButton[];
};
export declare type IAlertButton = {
    label: string;
    callback?: (e: Event) => void;
    className?: string;
};
export declare type IAlertCb = (e: Event) => void;
export declare function Alert(title: string, message: string, p?: string | IAlertCb, ...args: any[]): void;
export declare function Alert(props: IAlertPropsObj): void;
export declare function AlertWarn(title: string, message: string, p: string | IAlertCb, ...args: any[]): void;
export declare function AlertWarn(props: IAlertPropsObj): void;
export declare function AlertError(title: string, message: string, p: string | IAlertCb, ...args: any[]): void;
export declare function AlertError(props: IAlertPropsObj): void;
export declare function AlertExclam(title: string, message: string, p: string | IAlertCb, ...args: any[]): void;
export declare function AlertExclam(props: IAlertPropsObj): void;
export { Alert, AlertWarn, AlertError, AlertExclam };

interface IModalProps {
    component: any;
    props: any;
}
export declare function modal(props: IModalProps): void;
export { modal, Alert, AlertError, LoadingOverlay };

export declare const overlayLoadingClass = "loadingContainer";
interface ILOvProps {
    clickClose?: boolean;
    text?: string;
    onClick?: (e: MouseEvent) => void;
}
export declare class LoadingOverlay<P extends ILOvProps> {
    protected _ops: ILOvProps;
    protected div_: HTMLElement | undefined;
    protected wrapper_: HTMLElement | undefined;
    protected image_: HTMLElement | undefined;
    protected text_: HTMLElement | undefined;
    protected zIndex: number;
    constructor(props: P);
    divClicked(e?: MouseEvent): void;
    applyText(): void;
    open(): void;
    close(): void;
    setText(text: string): void;
    destroy(): void;
}
export { LoadingOverlay };

export declare function zIndexNext(): void;
export declare function zIndexPrev(): void;
export declare function zIndexGet(): number;
export declare const modalOverlayClassName = "modalOverlay";
export declare const modalWindowClassName = "modalContainer";
export declare const modalBodyClassName = "modalEnabled";
export declare function hasClass(element: HTMLElement, className: string): boolean;
export declare function openBodyCheckRegister(): void;
