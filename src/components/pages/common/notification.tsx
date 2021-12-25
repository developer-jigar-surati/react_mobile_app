import { ToastContainer, toast, Slide } from 'react-toastify'; // Zoom, Flip, Bounce
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