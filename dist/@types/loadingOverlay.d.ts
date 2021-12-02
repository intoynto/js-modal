export declare const overlayLoadingClass = "loadingContainer";
interface ILOvProps {
    clickClose?: boolean;
    text?: string;
    onClick?: (e: MouseEvent) => void;
}
declare class LoadingOverlay<P extends ILOvProps> {
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
