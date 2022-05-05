import { motion } from "framer-motion";
import styled from "styled-components";

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 240px);
  gap: 3px;
  padding: 80px 20px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardWrapper = styled(motion.div)`
  width: 100%;
  height: 240px;
  margin-bottom: 5px;
  position: relative;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  max-height: 240px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  aspect-ratio: 1 / 1.44;
  background-color: black;
  img {
    height: 100%;

    object-fit: cover;
  }
`;

export const Contents = styled.div`
  position: absolute;
  bottom: 0;
  background-color: rgba(36, 21, 21, 0.3);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
`;

export const MainContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h3 {
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 5px;
  }
  span {
    font-size: 10px;
  }
`;

export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .likeCount {
    margin-top: 3px;
    color: white;
    font-size: 10px;
  }
`;
