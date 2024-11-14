import ListHouse from "./ListHouse";
import ModalHouse from "./ModalHouse"
import { useState } from "react";
import { Button } from "react-bootstrap";
const ManageHouse = () => {
  const [isShow, setShow] = useState(false)
  const handleClose = () => setShow(false)
  return (
    <div>
      <Button style={{position: "absolute", left: "6%", top: "5%"}} variant="primary" onClick={() => setShow(true)}>
        Thêm nhà trọ
      </Button>
      <ListHouse />
      <ModalHouse isShow={isShow} handleClose={handleClose}></ModalHouse>
    </div>
  );
};

export default ManageHouse;
