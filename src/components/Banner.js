import React from 'react'
import styled from 'styled-components'

const PosterArea = styled.div`
    height: ${props=> props.hasBanner? '156px': '86px'};
    margin-bottom: 12px;
    
    .poster {
        position: relative;
        overflow: hidden;
        height: 126px;

        img {
            width:100%;
        }

        .overhay {
            position: absolute;
            width: 100%;
            height: 100%;
            top:0;
            background-image: linear-gradient(to bottom, transparent 55%, white);
            z-index:100;
        }
    }

    .product-logo {
        height: 0;
        img {
            position: relative;
            top:-30px;
            margin: 0 24px;
            width: 60px;
            height: 60px;
            border-radius: 40px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
            border: solid 0.5px #eeeeee;
            z-index: 200;
            background-color: #ffffff;
        }
    }
`




export default function Banner (props) {

    const {bannerLink,logoLink,style} = props
    console.log(style)
    const event = {data:{bannerLink ,logoLink}}
    // console.log(event.data)
    return (
        <PosterArea style={style} hasBanner={event.data.bannerLink !== '' ? true:false}>
            <div className="poster" style={{height:`${event.data.bannerLink !== '' ? '126px' : '56px'}`}}>
            {event.data.bannerLink !== '' ? 
                <>
                <img src={event.data.bannerLink} alt="product-banner" />
                <div className="overhay"></div>
                </>
                :null}
            </div>
            <div className="product-logo">
                <img src={event.data.logoLink} alt="product-logo"/>
            </div>
        </PosterArea>
    )
}