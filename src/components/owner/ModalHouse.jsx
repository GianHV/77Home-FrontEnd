import {
  Modal,
  Button,
  Form,
  Row,
  Col,
  Container,
  InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const ModalHouse = (props) => {
  const { isShow, handleClose } = props;

  const [propertyImagePreview, setPropertyImagePreview] = useState(null);
  const [isPropertyImageInvalid, setIsPropertyImageInvalid] = useState(false);

  const [ownershipDocumentPreview, setOwnershipDocumentPreview] =
    useState(null);
  const [isOwnershipDocumentInvalid, setIsOwnershipDocumentInvalid] =
    useState(false);

  const [houseName, setHouseName] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);

  const [houseDescription, setHouseDescription] = useState("");
  const [isDescriptionTouched, setIsDescriptionTouched] = useState(false);

  const [streetAddress, setStreetAddress] = useState("");
  const [isStreetAddressTouched, setIsStreetAddressTouched] = useState(false);

  const [rentPrice, setRentPrice] = useState("0");
  const [isRentPriceTouched, setIsRentPriceTouched] = useState(false);

  const [area, setArea] = useState("0");
  const [isAreaTouched, setIsAreaTouched] = useState(false);

  const [bedrooms, setBedrooms] = useState("0");
  const [isBedroomsTouched, setIsBedroomsTouched] = useState(false);

  const [bathrooms, setBathrooms] = useState("0");
  const [isBathroomsTouched, setIsBathroomsTouched] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberTouched, setIsPhoneNumberTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const handleImageChange = (event, type) => {
    const file = event.target.files[0];

    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "propertyImage") {
          setPropertyImagePreview(reader.result);
          setIsPropertyImageInvalid(false);
        } else if (type === "ownershipDocument") {
          setOwnershipDocumentPreview(reader.result);
          setIsOwnershipDocumentInvalid(false);
        }
      };
      reader.readAsDataURL(file);
    } else {
      if (type === "propertyImage") {
        setIsPropertyImageInvalid(true);
      } else if (type === "ownershipDocument") {
        setIsOwnershipDocumentInvalid(true);
      }
    }
  };

  const handleNumberChange = (setter, value) => {
    if (/^\d*$/.test(value) && (value === "" || parseInt(value, 10) > 0)) {
      setter(value);
    }
  };

  const handleNumberphoneChange = (setter, value) => {
    if (/^\d{0,10}$/.test(value)) {
      setter(value);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (field) => {
    switch (field) {
      case "name":
        setIsNameTouched(true);
        break;
      case "description":
        setIsDescriptionTouched(true);
        break;
      case "streetAddress":
        setIsStreetAddressTouched(true);
        break;
      case "rentPrice":
        setIsRentPriceTouched(true);
        break;
      case "area":
        setIsAreaTouched(true);
        break;
      case "bedrooms":
        setIsBedroomsTouched(true);
        break;
      case "bathrooms":
        setIsBathroomsTouched(true);
        break;
      case "phoneNumber":
        setIsPhoneNumberTouched(true);
        break;
      case "email":
        setIsEmailTouched(true);
        break;
      default:
        break;
    }
  };

  return (
    <Modal show={isShow} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Thêm nhà trọ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="houseName">
                  <Form.Label>Tên nhà trọ</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Nhập tên nhà trọ"
                      required
                      value={houseName}
                      onChange={(e) => setHouseName(e.target.value)}
                      onBlur={() => handleBlur("name")}
                      isInvalid={isNameTouched && houseName.trim() === ""}
                    />
                    <Form.Control.Feedback type="invalid">
                      Tên nhà trọ không được để trống!
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Col>

              <Col md={8}>
                <Form.Group controlId="description">
                  <Form.Label>Mô tả</Form.Label>
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      rows={1}
                      placeholder="Mô tả nhà trọ của bạn"
                      required
                      value={houseDescription}
                      onChange={(e) => setHouseDescription(e.target.value)}
                      onBlur={() => handleBlur("description")}
                      isInvalid={
                        isDescriptionTouched && houseDescription.trim() === ""
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      Mô tả không được để trống!
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="ward">
                  <Form.Label>Phường/Xã</Form.Label>
                  <Form.Select>
                    <option>Chọn phường/xã</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="streetAddress">
                  <Form.Label>Số nhà, Tên đường</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập số nhà, tên đường"
                    required
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    onBlur={() => handleBlur("streetAddress")}
                    isInvalid={
                      isStreetAddressTouched && streetAddress.trim() === ""
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Số nhà, Tên đường không được để trống!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="rentPrice">
                  <Form.Label>Giá thuê</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập giá thuê"
                    required
                    value={rentPrice}
                    onChange={(e) =>
                      handleNumberChange(setRentPrice, e.target.value)
                    }
                    onBlur={() => handleBlur("rentPrice")}
                    isInvalid={
                      isRentPriceTouched &&
                      (rentPrice.trim() === "" || parseInt(rentPrice, 10) <= 0)
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Giá thuê phải là số dương!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="area">
                  <Form.Label>Diện tích (m²)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập diện tích"
                    required
                    value={area}
                    onChange={(e) =>
                      handleNumberChange(setArea, e.target.value)
                    }
                    onBlur={() => handleBlur("area")}
                    isInvalid={
                      isAreaTouched &&
                      (area.trim() === "" || parseInt(area, 10) <= 0)
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Diện tích phải là số dương!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="bedrooms">
                  <Form.Label>Số phòng ngủ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập số phòng ngủ"
                    required
                    value={bedrooms}
                    onChange={(e) =>
                      handleNumberChange(setBedrooms, e.target.value)
                    }
                    onBlur={() => handleBlur("bedrooms")}
                    isInvalid={
                      isBedroomsTouched &&
                      (bedrooms.trim() === "" || parseInt(bedrooms, 10) <= 0)
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Số phòng ngủ phải là số dương!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="bathrooms">
                  <Form.Label>Số phòng tắm</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập số phòng tắm"
                    required
                    value={bathrooms}
                    onChange={(e) =>
                      handleNumberChange(setBathrooms, e.target.value)
                    }
                    onBlur={() => handleBlur("bathrooms")}
                    isInvalid={
                      isBathroomsTouched &&
                      (bathrooms.trim() === "" || parseInt(bathrooms, 10) <= 0)
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Số phòng tắm phải là số dương!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập số điện thoại"
                    required
                    value={phoneNumber}
                    onChange={(e) =>
                      handleNumberphoneChange(setPhoneNumber, e.target.value)
                    }
                    onBlur={() => handleBlur("phoneNumber")}
                    isInvalid={
                      isPhoneNumberTouched && phoneNumber.length !== 10
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Số điện thoại phải có 10 chữ số!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Nhập email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur("email")}
                    isInvalid={isEmailTouched && !isValidEmail(email)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Email không đúng định dạng!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="propertyImage">
                  <Form.Label>Hình ảnh nhà trọ</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleImageChange(e, "propertyImage")}
                    isInvalid={isPropertyImageInvalid}
                  />
                  <Form.Text className="text-muted">
                    Supported format: PNG, JPG
                  </Form.Text>
                  {isPropertyImageInvalid && (
                    <Form.Control.Feedback type="invalid">
                      Vui lòng chọn ảnh có định dạng hợp lệ!
                    </Form.Control.Feedback>
                  )}
                  {propertyImagePreview && (
                    <img
                      src={propertyImagePreview}
                      alt="Property preview"
                      style={{ width: "250px", height: "auto" }}
                    />
                  )}
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="ownershipDocument">
                  <Form.Label>Giấy tờ chính chủ</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleImageChange(e, "ownershipDocument")}
                    isInvalid={isOwnershipDocumentInvalid}
                  />
                  <Form.Text className="text-muted">
                    Supported format: PNG, JPG
                  </Form.Text>
                  {isOwnershipDocumentInvalid && (
                    <Form.Control.Feedback type="invalid">
                      Vui lòng chọn ảnh có định dạng hợp lệ!
                    </Form.Control.Feedback>
                  )}
                  {ownershipDocumentPreview && (
                    <img
                      src={ownershipDocumentPreview}
                      alt="Document preview"
                      style={{ width: "250px", height: "auto" }}
                    />
                  )}
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Hủy
        </Button>
        <Button variant="primary" type="submit">
          Gửi thông tin
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalHouse;
