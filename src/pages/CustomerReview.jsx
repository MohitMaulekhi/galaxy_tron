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
        <ReviewCard imageurl={rv1} title = {"Best deal ever"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque culpa, accusantium doloremque adipisci, sapiente sint accusamus nostrum reiciendis, "}/>
        <ReviewCard imageurl={rv2} title = {"Best deal ever"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque culpa, accusantium doloremque adipisci, sapiente sint accusamus nostrum reiciendis, "}/>
        <ReviewCard imageurl={rv3} title = {"Best deal ever"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque culpa, accusantium doloremque adipisci, sapiente sint accusamus nostrum reiciendis, "}/>
      
    </div>
    </div>
  )
}

export default CustomerReview