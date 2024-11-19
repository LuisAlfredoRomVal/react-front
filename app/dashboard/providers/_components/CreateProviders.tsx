"use client"
import {Modal, ModalContent, ModalHeader, ModalBody,  Button, useDisclosure} from "@nextui-org/react";
import { ReactNode } from "react";
import {LuPlus } from "react-icons/lu";

export default function CreateProviders({children}: {children:ReactNode}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary"><LuPlus size={20}/></Button>
      <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                {children}
              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}