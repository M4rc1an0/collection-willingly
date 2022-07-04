import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./style";

const Carrousel = () => {

    return (
        <S.ImgBanner>
            <Carousel autoPlay infiniteLoop interval={5000} transitionTime={1000} showThumbs={false}>
                <div>
                    <S.Img src='./imagem_1.jpg' />
                </div>
                <div>
                    <S.Img src='./imagem_2.jpg' />
                </div>
                <div>
                    <S.Img src='./imagem_3.jpg' />
                </div>
            </Carousel>
        </S.ImgBanner>
    )
}

export default Carrousel