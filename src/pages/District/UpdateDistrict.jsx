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
import PutApi from "../../utilities/PutApi";
import { toast } from "react-toastify";

export function UpdateDistrict({
  setRender,
  isOpen,
  onClose,
  selectDistrict,
  setSelectedDistrict,
}) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    districtId: "",
    key: "",
    provinceId: "",
  });

  useEffect(() => {
    if (selectDistrict) {
      setFormData({
        title: selectDistrict.title,
        districtId: selectDistrict.districtId,
        provinceId: selectDistrict.provinceId,
        key: selectDistrict.key,
      });
    }
  }, [selectDistrict]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    setSelectedDistrict(formData);
    console.log(formData);
    const data = {
      title: formData.title,
      districtId: formData.districtId,
      provinceId: formData.provinceId,
      key: formData.key,
    };
    let res = await PutApi("updatedistrict", data);
    // console.log(res);
    onClose();
    if (res.data.message === "District Updated") {
      setRender(true);
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
        <ModalHeader>Update District</ModalHeader>
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
            <FormLabel>District Id</FormLabel>
            <Input
              placeholder="id"
              name="districtId"
              value={formData.districtId}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Province</FormLabel>
            <Input
              placeholder="Province"
              name="provinceId"
              value={formData.provinceId}
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
