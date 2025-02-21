
function ReviewCard({title,content,imageurl}) {
  return (
    <div className="mx-4 my-2 sm:w-1/4 border-black border-4 p-2 bg-gray-900 rounded-2xl shadow-2xl">
        <img className="h-40 w-40 md:p-2 p-4 m-auto" src={imageurl} alt="" />
        <div className="">
            <h1 className="font-semibold text-2xl">{title}</h1>
            <p className="text-sm">{content}</p>
            <button className="bg-black rounded-full text-white px-3 py-2 hover:opacity-75 m-1">Read more</button>
        </div>
    </div>
  )}
export default ReviewCard