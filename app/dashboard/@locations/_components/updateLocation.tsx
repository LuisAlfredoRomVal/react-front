"use client"
import {Modal, ModalContent, ModalHeader, ModalBody,  Button, useDisclosure} from "@nextui-org/react";
import { div } from "framer-motion/client";
import { ReactNode } from "react";
import { LuPen } from "react-icons/lu";

export default function UpdateLocation({children, store}: {children:ReactNode, store: string | string[] | undefined}) {
  if(store)return <div/>
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary"><LuPen size={20}/></Button>
      <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
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