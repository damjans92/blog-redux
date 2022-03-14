import { useState } from "react";
import Modal from "./Modal";
import FormEditPost from "./Forms/FormEditPost";

const EditPost = ({ postId, postTitle, postText, postCategory }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="btn blue" onClick={() => setShowModal(true)}>
        Edit
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <FormEditPost
          postId={postId}
          postTitle={postTitle}
          postText={postText}
          postCategory={postCategory}
        />
      </Modal>
    </>
  );
};

export default EditPost;
