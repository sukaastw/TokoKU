import toast from "react-hot-toast";


export function confirmDeleteToast(message = "Yakin ingin menghapus item ini?") {
  if (window.confirm(message)) {
    toast.success("Item berhasil dihapus!");
  } else {
    toast("Dibatalkan.");
  }
}
