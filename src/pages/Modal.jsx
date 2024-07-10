import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import PutApi from "../utilities/PutApi";
import { toast } from "react-toastify";

export function InitialFocus({
  isOpen,
  onClose,
  selectedProvince,
  setSelectedProvince,
}) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [formData, setFormData] = useState({
    title: selectedProvince.title || "",
    key: selectedProvince.key || "",
    provinceId: selectedProvince.provinceId || "",
  });

  useEffect(() => {
    setFormData({
      title: selectedProvince.title || "",
      key: selectedProvince.key || "",
      provinceId: selectedProvince.provinceId,
    });
  }, [selectedProvince]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    setSelectedProvince(formData);
    const data = {
      title: formData.title,
      key: formData.key,
      provinceId: selectedProvince.provinceId,
    };
    let res = await PutApi("updateprovince", data);
    onClose();
    if (res.data.message === "Province Updated") {
      toast(res.data.message);
    }
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Province</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              ref={initialRef}
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Key</FormLabel>
            <Input
              placeholder="Key"
              name="key"
              value={formData.key}
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} mr={3}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleUpdate}>
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
