const ConfirmAlert = ({ message, onCancel, onConfirm }) => {
  return (
    <dialog className="modal" open>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Confirm Action</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <button className="btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-error" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop backdrop-blur-sm bg-black/40" onClick={onCancel}></div>
    </dialog>
  );
};

export default ConfirmAlert;
