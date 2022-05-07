import { motion } from "framer-motion";
import styled from "styled-components";

export const BackDrop = styled.div`
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
  align-items: flex-end;
  justify-content: center;
`;

export const InfoCard = styled(motion.div)<{ variants: any }>`
  background-color: white;
  width: 100%;
  height: 35%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 18px;
`;
