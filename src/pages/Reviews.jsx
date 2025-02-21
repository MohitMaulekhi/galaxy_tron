import React from "react";
import {Marquee} from "react-marquee-slider";
import times from "lodash/times";



const Reviews = () => (
  <Marquee velocity={25} scatterRandomly minScale={0.7}>
    {times(5, String).map(id => (
      // <Box key={`marquee-example-review-${id}`}>
      //   <Review>
      //     <Avatar>
      //       <img src="https://randomuser.me/api/portraits/women/68.jpg" />
      //     </Avatar>
      //     <Content>
      //       <p>
      //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      //         incididunt ut labore et dolore magna aliqua.
      //       </p>
      //     </Content>
      //   </Review>
      // </Box>
      // <div key={ke}/>
      <div></div>
    ))}
  </Marquee>
);

export default Reviews