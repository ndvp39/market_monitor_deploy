import { useState } from "react";
import { useContactUs } from "../hooks/useContactUs";
import { Form, Button, Container, Row, Col, Alert, Card, InputGroup } from "react-bootstrap";


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [showAlert, setShowAlert] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const { contactUs, isLoading, error } = useContactUs();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await contactUs(formData.name, formData.email, formData.subject, formData.message);
            console.log("Form data submitted:", formData);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
            if (result && result.success) {
                setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form fields
            }
        } catch (error) {
            // Handle network or other errors
            console.error("Error submitting form:", error);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
        }
    };

    return (
        <Container className="my-4 justify-content-center align-items-center min-vh-100">
            <Row className="w-100">
                <Col lg={7} className="mb-4">
                    <Card>
                        <Card.Header className="text-center">
                            <h2>Contact Us</h2>
                        </Card.Header>
                        <Card.Body>
                            <Form id="contactForm" autoComplete="on" onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>
                                            <i className="bi bi-person-fill"></i>
                                        </InputGroup.Text>
                                        <Form.Control 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange} 
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>
                                            <i className="bi bi-envelope-fill"></i>
                                        </InputGroup.Text>
                                        <Form.Control 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange} 
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Subject</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>
                                            <i className="bi bi-hash"></i>
                                        </InputGroup.Text>
                                        <Form.Control 
                                            as="select" 
                                            id="subject" 
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="Option 1">Option 1</option>
                                            <option value="Option 2">Option 2</option>
                                            <option value="Option 3">Option 3</option>
                                            <option value="Option 4">Option 4</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>
                                            <i className="bi bi-text-left"></i>
                                        </InputGroup.Text>
                                        <Form.Control 
                                            as="textarea" 
                                            id="message" 
                                            name="message" 
                                            rows="4" 
                                            placeholder="Enter your message here..."
                                            value={formData.message}
                                            onChange={handleChange} 
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group>
                                    <Button type="submit" className="btn-block" variant="primary">Submit</Button>
                                </Form.Group>
                            </Form>
                            {error && (
                                <div className="text-center mt-3">
                                    <Alert variant="danger" dismissible>{error}</Alert>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={5}>
                    <Card>
                        <Card.Header className="text-center">
                            <Row>
                                <Col md={3}>
                                    <i className="bi bi-headset" style={{ fontSize: '3.2rem' }}></i>
                                </Col>
                                <Col md={9}>
                                    <h5>24/7 Support</h5>
                                    <Button id="contactSupport" className="btn-block mb-4" variant="secondary">Contact Support</Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Row>
                                <Col md={3}>
                                    <i className="bi bi-clipboard-check" style={{ fontSize: '2.5rem' }}></i>
                                </Col>
                                <Col md={9} className="text-sm-center text-md-left">
                                    <h5 className="font-weight-bold">Open Hours</h5>
                                    <p>7am - 7pm CST</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <i className="bi bi-envelope-at" style={{ fontSize: '2.5rem' }}></i>
                                </Col>
                                <Col md={9} className="text-sm-center text-md-left">
                                    <h5 className="font-weight-bold">Email Address</h5>
                                    <p>market@monitor.com</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <i className="bi bi-house" style={{ fontSize: '2.5rem' }}></i>
                                </Col>
                                <Col md={9} className="text-sm-center text-md-left">
                                    <h5 className="font-weight-bold">Contact Info</h5>
                                    <p>Company Name<br />Karmiel<br />Magen 19865<br />Israel</p>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={3}>
                                    <i className="bi bi-telephone-forward" style={{ fontSize: '2.5rem' }}></i>
                                </Col>
                                <Col md={9} className="text-sm-center text-md-left">
                                    <h5 className="font-weight-bold">Call Us Now</h5>
                                    <p>+972-499-9999</p>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col xs={6}>
                                    <img src="/nadav_image.png" className="rounded-circle" alt="manager 1 profile image" width="100" height="100" />
                                </Col>
                                <Col xs={6}>
                                    <img src="/matan_image.png" className="rounded-circle" alt="manager 2 profile image" width="100" height="100" />
                                </Col>
                                <Row className="justify-content-center my-2">
                                    <p>Thank you for visiting our site!</p>
                                </Row>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;