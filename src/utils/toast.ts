import { toast } from 'react-toastify';

const showSuccess = (message: string) => toast.success(message);
const showError = (message: string) => toast.error(message);
const showInfo = (message: string) => toast.info(message);

export { showError, showSuccess, showInfo };
