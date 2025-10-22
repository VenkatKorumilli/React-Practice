import React, { useState } from "react";

export default function BootstrapModal() {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <button className="btn btn-primary" onClick={openModal}>
        Open Modal
      </button>

      {show && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal Title</h5>
                <button
                  type="button"
                  className="close"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <p>This is the body content of the modal.</p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
          {/* Modal backdrop */}
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </>
  );
}
