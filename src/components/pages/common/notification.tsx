import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type: any, msg: any) => {
    toast(msg, {
        type: type,
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: false
    });
};

export const toastComponent = () => {
    return (
        <ToastContainer
            transition={Slide}
        />
    );
}