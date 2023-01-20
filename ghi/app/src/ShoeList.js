import React, {useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ShoeForm from './ShoeForm'

export default function ShoeList() {
  const [shoes, setShoes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getData = async () => {
    const response = await fetch("http://localhost:8080/api/shoes/");
    if (response.ok) {
      const data = await response.json();
      const shoes = data.shoes;
      setShoes(shoes);
    }
  }

  const showModal = () => {
    setIsOpen(true);
  }

  const hideModal = () => {
    setIsOpen(false);
  }

  const handleDelete = async (shoeId) => {
    console.log(shoeId)
    const response = await fetch(`http://localhost:8080/api/shoes/${shoeId}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      setShoes(shoes.filter(shoe => shoe.id !== shoeId));
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
        <Modal show={isOpen} onHide={hideModal}>
        <ModalHeader closeButton>
            <ModalTitle>Add a shoe!</ModalTitle>
        </ModalHeader>
            <ModalBody>
                <ShoeForm />
            </ModalBody>
        </Modal>
        <div className="container mt-4 shadow-sm p-0">
        <table className="table table-light table-striped">
            <thead>
            <tr>
                <th></th>
                <th>
                <div className="d-flex">
                    <div style={{marginRight: "5px", fontWeight: "bold"}}>Manufacturer</div>
                </div>
                </th>
                <th>
                <div className="d-flex">
                    <div style={{marginRight: "5px", fontWeight: "bold"}}>Model</div>
                </div>
                </th>
                <th>
                <div className="d-flex">
                    <div style={{marginRight: "5px", fontWeight: "bold"}}>Color</div>
                </div>
                </th>
                <th>
                <div className="d-flex">
                    <div style={{marginRight: "5px", fontWeight: "bold"}}>BIN</div>
                </div>
                </th>
                <th>
                    <div className="bi bi-plus-square-dotted" onClick={() => showModal()}></div> 
                </th>
            </tr>
            </thead>
            <tbody>
            {shoes.map(shoe => {
                return (
                <tr key={shoe.id}>
                    <td>
                    <div className="bi bi-x-square-fill" onClick={() => handleDelete(shoe.id)} style={{}}>   
                    </div>
                    </td>
                    <td>{shoe.manufacturer}</td>
                    <td>{shoe.model_name}</td>
                    <td>{shoe.color}</td>
                    <td>{shoe.closet_name}</td>
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
