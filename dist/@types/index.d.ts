import { Alert, AlertError } from "./alert";
import { LoadingOverlay } from "./loadingOverlay";
interface IModalProps {
    component: any;
    props: any;
}
declare function modal(props: IModalProps): void;
export { modal, Alert, AlertError, LoadingOverlay };
