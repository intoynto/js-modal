declare class Modal {
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
