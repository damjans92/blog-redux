import { useState } from "react";
import Modal from "./Modal";
import FormAddPost from "./Forms/FormAddPost";

const AddPost = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button className="btn blue" onClick={() => setShowModal(true)}>
        Add Post
      </button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <FormAddPost />
      </Modal>
    </div>
  );
};

export default AddPost;
