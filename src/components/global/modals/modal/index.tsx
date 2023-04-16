import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ModalStyle from "./style";

let modal: HTMLElement | null = null;

interface Iprops {
  isModal: boolean;
  children: React.ReactNode;
}

const Modal: FC<Iprops> = (props) => {
  const { isModal, children } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    modal = document.getElementById("__modal");
    console.log(modal);
    setMounted(true);
    return () => setMounted(false);
  }, []);
  useEffect(() => {
    const html = document.getElementsByTagName("html");
    const body = document.getElementsByTagName("body");
    if (isModal) {
      setTimeout(() => {
        html[0].classList.add("overflow");
        body[0].classList.add("overflow");
      }, 500);
    }
    return () => {
      html[0].classList.remove("overflow");
      body[0].classList.remove("overflow");
    };
  }, [isModal]);

  if (!isModal) return null;

  return mounted
    ? modal
      ? createPortal(<ModalStyle>{children}</ModalStyle>, modal)
      : null
    : null;
};

export default Modal;
