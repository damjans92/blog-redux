import { useDispatch, useSelector } from "react-redux";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { clearNotificationMsg } from "../../redux/blogSlice";

const Notification = () => {
  const dispatch = useDispatch();
  const messageSuccess = useSelector((state) => state.blog.messageSuccess);

  const handlerShowMsg = () => {
    dispatch(clearNotificationMsg());
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {messageSuccess && (
        <div className="notification show">
          <div className="check-icon">
            <BsFillCheckSquareFill size={20} />
          </div>
          {messageSuccess}
          <div className="close-icon" onClick={handlerShowMsg}>
            <IoIosClose size={24} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
