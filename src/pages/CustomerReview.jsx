import ReviewCard from "../components/ReviewCard"
import rv1 from "/reviews/rv1.jpg"
import rv2 from "/reviews/rv2.jpg"
import rv3 from "/reviews/rv3.jpg"

function CustomerReview() {
  return (
    <div
    
    style={
      {
        backgroundImage:'url(/ReviewBg.gif)'
      }
    }>
    <h1 className="text-4xl text-center font-semibold pb-10" 
    
    >Customer Reviews</h1>
    <div className='flex flex-wrap justify-center mb-10 mx-4 gap-y-4'>
        <ReviewCard imageurl={rv1} title = {"Best deal ever"} content={"⭐⭐⭐⭐⭐ (5/5)The Galaxy Store offers a fantastic selection of apps, themes, and wallpapers exclusively designed for Samsung devices. The user interface is smooth, and downloading apps is quick and hassle-free. The exclusive deals and discounts for Samsung users are a great bonus. Highly recommended for anyone looking to personalize their Galaxy device!"}/>
        <ReviewCard imageurl={rv2} title = {"Best deal ever"} content={"⭐⭐⭐⭐⭐ (5/5)The Galaxy Store offers a fantastic selection of apps, themes, and wallpapers exclusively designed for Samsung devices. The user interface is smooth, and downloading apps is quick and hassle-free. The exclusive deals and discounts for Samsung users are a great bonus. Highly recommended for anyone looking to personalize their Galaxy device!"}/>
        <ReviewCard imageurl={rv3} title = {"Best deal ever"} content={"⭐⭐⭐⭐⭐ (5/5)The Galaxy Store offers a fantastic selection of apps, themes, and wallpapers exclusively designed for Samsung devices. The user interface is smooth, and downloading apps is quick and hassle-free. The exclusive deals and discounts for Samsung users are a great bonus. Highly recommended for anyone looking to personalize their Galaxy device!"}/>
      
    </div>
    </div>
  )
}

export default CustomerReview