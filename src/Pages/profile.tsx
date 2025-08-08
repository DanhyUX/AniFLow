import Back from "/assets/chevronback.png";


function Profile() {
  return (
    <>


      {/* Profile Start */}
   <div className="my-12 mx-6">
       <div className="flex gap-1 items-center">
           <div className="top-[5%] left-[5%] mx-6 bg-red-700 rounded-[100%] w-[42px]">
                <a href="/">
                  <img src={Back} alt="" className="py-2 px-2 " />
       
                </a>
       
              </div>
              <p className="font-bold">Back Home</p>
       </div>

       <div className="mt-8">
        <div className="flex gap-4 items-center">
          <div className="p-8 rounded-[100%] w-[128px] h-[128px] bg-gray-400">
            </div>

            <div className="flex flex-col gap-2 item">
                <h1 className="font-bold text-2xl"> Generic Otaku Name</h1>
                <p>otakuman@hotmail.com</p>
                <div className=" flex bg-linear-to-r from-yellow-400 to-yellow-600 h-min justify-center rounded-2xl text-[18px]">Premium</div>
            </div>
        </div>
       </div>
   </div>
 
      
      {/* Profile End */}



    </>
  );
}

export default Profile;