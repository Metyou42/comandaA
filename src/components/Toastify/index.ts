import { toast } from "react-toastify";

toast.configure({
    autoClose: 10_000,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true,
});

export const toastSuccess = (msg): void =>
{
    toast.success(msg, {
        autoClose: 2000,
    })
}

export const toastInfo = (msg): void =>
{
    toast.info(msg, {
        autoClose: 3000,
    })
}

export const toastWarning = (msg): void =>
{
    toast.warning(msg, {
        autoClose: 5000,
    })
}

export const toastError = (msg): void =>
{
    toast.error(msg)
}
