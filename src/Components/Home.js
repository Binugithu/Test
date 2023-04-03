import React from 'react';
import styled from 'styled-components';
import Models from './Home/Models.js';

import bgimg1 from '../images/tesla-car-1.jpg';
import bgimg2 from '../images/tesla-car-2.jpg';
import bgimg3 from '../images/tesla-car-3.jpg';
import bgimg4 from '../images/tesla-car-4.jpg';
import bgimg5 from '../images/solar-panels.jpg';
import bgimg6 from '../images/solar-roof.jpg';
import bgimg7 from '../images/Desktop-Accessories.jpg';

import downArrow from '../images/down-arrow.svg';

const Home = () => {
  return (
    <div>
        <Main>
           <Models
                title="Model S"
                text="Order online for Touchless Delivery"
                LeftBtn= "Custom order"
                rightBtn="Existing Inventory"
                backgroundImg={bgimg1}
                dropdown={downArrow}
                ifDropDownExists
            />
            <Models
                title="Model Y"
                text="Order online for Touchless Delivery"
                LeftBtn= "Custom order"
                rightBtn="Existing Inventory"
                backgroundImg={bgimg2}
                
            />
            <Models
                title="Model 3"
                text="Order online for Touchless Delivery"
                LeftBtn= "Custom order"
                rightBtn="Existing Inventory"
                backgroundImg={bgimg3}
              
            />
            <Models
            title="Model X"
            text="Order online for Touchless Delivery"
            LeftBtn= "Custom order"
            rightBtn="Existing Inventory"
            backgroundImg={bgimg4}
            ifblackColorExists
          
           />
           <Models
            title="Lowest Solar Panels in America"
            text="Money Back Guarantee"
            LeftBtn= "Order Now"
            rightBtn= "Learn More"
            backgroundImg={bgimg5}
            ifblackColorExists
            
           />
           <Models
            title="Solar For New Roof"
            text="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
            LeftBtn= "Order Now"
            rightBtn="Learn More"
            backgroundImg={bgimg6}
            ifblackColorExists
            
           />
           <Models
            title="Accessories"
            text=""
            LeftBtn= "Shop Now"
            backgroundImg={bgimg7}
            ifblackColorExists
            
           />
        

        
            
        </Main>
        
    
    </div>
  );
};
const Main =styled.main`
     width: auto
     height: auto;
     overflow: auto;
     scroll-behaviour:smooth;
     scroll-snap-align: initial;
     scroll-snap-type: mandatory;

`;

export default Home