import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import HatForm from "./HatForm";

export default function HatList() {
  const [hats, setHats] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getData = async () => {
    const response = await fetch("http://localhost:8090/api/hats/");
    if (response.ok) {
      const data = await response.json();
      const hats = data.hats;
      setHats(hats);
    }
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleDelete = async (hatId) => {
    const response = await fetch(`http://localhost:8090/api/hats/${hatId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setHats(hats.filter((hat) => hat.id !== hatId));
    }
  };

  const handleAddHats = (hats) => {
    setHats(hats);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Modal show={isOpen} onHide={hideModal}>
        <ModalHeader closeButton>
          <ModalTitle>Add Hat</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <HatForm hideModal={hideModal} handleAddHats={handleAddHats} />
        </ModalBody>
      </Modal>
      <div className="container mt-4 shadow-sm p-0">
        <table className="table table-light table-striped">
          <thead>
            <tr>
              <th></th>
              <th>
                <div className="d-flex">
                  <div style={{ marginRight: "5px", fontWeight: "bold" }}>
                    Fabric
                  </div>
                </div>
              </th>
              <th>
                <div className="d-flex">
                  <div style={{ marginRight: "5px", fontWeight: "bold" }}>
                    Style
                  </div>
                </div>
              </th>
              <th>
                <div className="d-flex">
                  <div style={{ marginRight: "5px", fontWeight: "bold" }}>
                    Color
                  </div>
                </div>
              </th>
              <th>
                <div className="d-flex">
                  <div style={{ marginRight: "5px", fontWeight: "bold" }}>
                    LOCATION
                  </div>
                </div>
              </th>
              <th>
                <div
                  className="bi bi-plus-square-dotted"
                  onClick={() => showModal()}
                ></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {hats.map((hat) => {
              return (
                <tr key={hat.id}>
                  <td>
                    <div
                      className="bi bi-x-square-fill"
                      onClick={() => handleDelete(hat.id)}
                      style={{}}
                    ></div>
                  </td>
                  <td>{hat.fabric}</td>
                  <td>{hat.style_name}</td>
                  <td>{hat.color}</td>
                  <td>{hat.closet_name}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
