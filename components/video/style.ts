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
  background-color: rgba(0, 0, 0, 0.5);
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
    margin-bottom: 10px;
    margin-top: 2px;
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

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const DetailWrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  padding-bottom: 80px;
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  overflow: hidden;
  height: 100%;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 90px;
  z-index: 30;
  width: 100%;
  padding: 0 15px;
  padding-bottom: 10px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 70px;
`;

export const Nickname = styled.div`
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

export const Info = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
  .material-symbols-rounded {
    cursor: pointer;
    font-size: 40px;
    margin-bottom: 5px;
    margin-top: 20px;
  }
  .likeCount {
    font-weight: 700;
    font-size: 12px;
  }
`;
