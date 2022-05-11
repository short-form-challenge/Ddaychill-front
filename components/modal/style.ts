import { motion } from "framer-motion";
import styled from "styled-components";
import { IModal } from "interface/components";

export const BackDrop = styled.div<Pick<IModal, "modalPosition">>`
  position: fixed;
  margin: 0 auto;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  max-width: 375px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: ${(props) =>
    props.modalPosition === "bottom" ? "flex-end" : "center"};
  justify-content: center;
`;

export const InfoCard = styled(motion.div)<{ variants: any }>`
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 18px;
  max-width: 375px;
`;
