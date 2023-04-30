import { toast } from "react-toastify";

const notify = (type, text) => {
  if (type === "success") {
    toast.success(text , {
        theme :"colored", 
        className :"toast",
        position : "top-center"
      });
    } else {
      toast.error(text , {
        theme : "colored",
        className :"toast-error",
        position : "top-center"
    });
  }
};

export default notify;
