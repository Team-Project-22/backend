import styled, { keyframes, css } from "styled-components";
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";


export const StyledSlider = styled(Slider)`
   height: 90%; //슬라이드 컨테이너 영역

  .slick-list {  //슬라이드 스크린
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    background: green;
  }

  .slick-slide div { //슬라이더  컨텐츠
    /* cursor: pointer; */
  }

  .slick-dots {  //슬라이드의 위치
    bottom: 20px;
    margin-top: 200px;
  }

  .slick-track { //이건 잘 모르겠음
    width: 100%;
  }

  .slick-slide{
    img{
      object-fit: cover;
      width: 50%;
      height: auto;
    }
  }
`;