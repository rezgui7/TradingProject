import './PictureGallerie.css';
import { useState } from 'react';

const PictureGallery  = () => {
    const galleryItems = [
        {
          imageSrc: 'https://www.mtfe.ca/_nuxt/img/RichInvestment_1.13af1b6.png',
          description: 'Description 1',
          link: 'your_link_1'
        },
        {
          imageSrc: 'https://www.mtfe.ca/_nuxt/img/RichInvestment_2.954fc51.png',
          description: 'Description 2',
          link: 'your_link_2'
        },
        {
          imageSrc: 'https://www.mtfe.ca/_nuxt/img/RichInvestment_3.221616b.png',
          description: 'Description 3',
          link: 'your_link_3'
        },
        {
          imageSrc: 'https://www.mtfe.ca/_nuxt/img/RichInvestment_4.5c22f67.png',
          description: 'Description 4',
          link: 'your_link_4'
        }
      ];

      const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
    
      const handleItemClick = (link) => {
        // Logic to handle click event, such as navigating to the specified link
        window.location.href = link;
      };
    
      return (
        <div>
            <div className="container2">
            <h3 class="h3_tit">Rich Investment Analysis & Useful Trading Tutorial</h3>
            <p>Various knowledge systems such as financial data analysis, trading indicators, risk management, etc.</p>
            <br/>
        </div>
        
            
        <div class="container">
            
        <div className="image-gallery">
      <a href="your_link">
        <div className='image-container'>
        <img src="https://www.mtfe.ca/_nuxt/img/RichInvestment_1.13af1b6.png" alt="Image 1" />
        <p class="p_tit">Expert strategy analysis, advance market layout.</p>
        </div>
      </a>
      <a href="your_link">
      <div className='image-container'>
        <img src="https://www.mtfe.ca/_nuxt/img/RichInvestment_2.954fc51.png" alt="Image 2" />
        <p class="p_tit">Key information analysis to grasp profit opportunities.</p>
        </div>
      </a>
      <a href="your_link">
      <div className='image-container'>
        <img src="https://www.mtfe.ca/_nuxt/img/RichInvestment_3.221616b.png" alt="Image 3" />
        <p class="p_tit">Basic investment learning and trading skills improvement.</p>
        </div>
      </a>
      <a href="your_link">
      <div className='image-container'>
        <img src="https://www.mtfe.ca/_nuxt/img/RichInvestment_4.5c22f67.png" alt="Image 4" />
        <p class="p_tit">Online video learning skills are fully mastered.</p>
        </div>
      </a>
    </div>
    </div>
    </div>
    );
}
 
export default PictureGallery ;