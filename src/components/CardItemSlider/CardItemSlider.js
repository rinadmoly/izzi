import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import Image3 from '../../img/aaa.png'
import './cardSlider.css'
export default class CardItemSlider extends Component {

    render() {
  
      const images = [
        {
            original: Image3,
            thumbnail: Image3,
        },
        {
            original: Image3,
            thumbnail: Image3,
        },
        {
            original: Image3,
            thumbnail: Image3,
        },
        {
            original: Image3,
            thumbnail: Image3,
        },
        {
            original: Image3,
            thumbnail: Image3,
        },
        {
            original: Image3,
            thumbnail: Image3,
        },
        {
            original: Image3,
            thumbnail: Image3,
        },
        {
            original: Image3,
            thumbnail: Image3,
        },
        {
            original: Image3,
            thumbnail: Image3,
        },
      ]
      return (
          <div className='card_slider'>
                <ImageGallery items={images} 
                    showIndex={true}/>
          </div> 
      );
    }  
}
