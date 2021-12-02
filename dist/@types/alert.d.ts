declare type IAlertPropsObj = {
    title: string;
    message: string;
    buttons: IAlertButton[];
};
declare type IAlertButton = {
    label: string;
    callback?: (e: Event) => void;
    className?: string;
};
declare type IAlertCb = (e: Event) => void;
declare function Alert(title: string, message: string, p?: string | IAlertCb, ...args: any[]): void;
declare function Alert(props: IAlertPropsObj): void;
declare function AlertWarn(title: string, message: string, p: string | IAlertCb, ...args: any[]): void;
declare function AlertWarn(props: IAlertPropsObj): void;
declare function AlertError(title: string, message: string, p: string | IAlertCb, ...args: any[]): void;
declare function AlertError(props: IAlertPropsObj): void;
declare function AlertExclam(title: string, message: string, p: string | IAlertCb, ...args: any[]): void;
declare function AlertExclam(props: IAlertPropsObj): void;
export { Alert, AlertWarn, AlertError, AlertExclam };
