import { Modal, ModalContent, ModalBody, ModalHeader } from "@nextui-org/react";
import { useActionData } from "react-router-dom";

function ErrorModal() {

  const actionData = useActionData() as { error?: string };
  console.log(actionData);
  const isError = actionData && actionData.error;
  if (!isError) return null;

  return (
    <Modal isOpen={true}>
      <ModalContent>
        <ModalHeader>Error :(</ModalHeader>
        <ModalBody>
          <p>{actionData.error}</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ErrorModal;
