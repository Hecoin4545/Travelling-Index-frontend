import React , {useState} from 'react'
import { Button } from '@/components/ui/button'

import '../WritePosts/WritePosts.css'

function WritePosts() {
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
      const selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selectedFiles);
  
      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
  
      setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  
      // FOR BUG IN CHROME
      event.target.value = "";
    };
  
    function deleteHandler(image) {
      setSelectedImages(selectedImages.filter((e) => e !== image));
      URL.revokeObjectURL(image);
    }

  return (
    <>
    {/* <div className="main-container-write-posts-area">
        <div className="left-image-area-write-post-section">
            
        </div>
        <div className="right-image-area-write-post-section"></div>
    </div> */}

<div className="main-container-write-posts-area px-[3rem] py-[2rem] flex ">
  <div className='image-section-area-button-click  w-[50%]   '>
    <div className="add-images-area-section-clicking flex justify-end items-center p-[3rem] border-black border-dashed border-2">
        <br />
        <input
          placeholder='Choose Images (1 to 5)'
          type='file'
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
          className=' text-white w-[56%] '
        />

      <br />
        </div>
    <div className="images-showcase-section-oncliking mt-5">
<div className="inner-area-showcase-images-preview">
      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
          </button>
        ))}

      <div className="images flex justify-center items-center flex-column flex-wrap ">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image ">
                <div className="inner-center-image-delete-options h-[13rem] w-[13rem]  mx-2">
                <img src={image}  alt="upload" className='flex flex-row justify-center items-start' />
                <button onClick={() => deleteHandler(image)}>
                  delete image
                </button>
              </div>
              </div>
            );
          })}
      </div>
    </div>
        </div>
  </div>
  <div className="right-area-section-text-to-post flex  w-[50%]" id='right-area-section-text-to-post'>
    <div className="inner-right-area-section-text-to-post-by-user w-[100%] ">
      <div className="first-section-input-post-by-user">
        <input type="text" placeholder='Select Country'  className='border-2 border-black mx-1 rounded-sm p-2 w-[48%]'/>
        <input type="text" placeholder='Select State' className='border-2 border-black mx-1 rounded-sm p-2 w-[48%]'/>
      </div>
      <div className="second-area-input-post-by-user  ">
        <textarea  cols="51" rows="10" className=' mt-3 resize-none w-[97%] border-black mx-1 rounded-sm p-2 border-solid border-[2px]' placeholder='Write Your Experience'>
        </textarea>
      </div>
      <div className="ratings-area-section-main-clicking">
        <div className="inner-rating-area-clicking flex justify-center items-start flex-col">
      <div class="rate rating-1 flex justify-center items-center flex-row-reverse my-3">
        <label for="star5" title="text"  >5 stars</label>
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star1" title="text">1 star</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <p className=' text-2xl font-[lora] font-bold pr-5'>Cleanliness:- </p>
            </div>

            <div class="rate rating-1 flex justify-center items-center flex-row-reverse my-3">
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star1" title="text">1 star</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <p className=' text-2xl font-[lora] font-bold pr-5'>Dangerous:- </p>
            </div>


            <div class="rate rating-1 flex justify-center items-center flex-row-reverse my-3">
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star1" title="text">1 star</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <p className=' text-2xl font-[lora] font-bold pr-5'>Unique:- </p>
            </div>


            <div class="rate rating-1 flex justify-center items-center flex-row-reverse my-3">
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star1" title="text">1 star</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <p className=' text-2xl font-[lora] font-bold pr-5'>Populated:- </p>
            </div>


            <div class="rate rating-1 flex justify-center items-center flex-row-reverse my-3">
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star1" title="text">1 star</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <p className=' text-2xl font-[lora] font-bold pr-5'>Local People:- </p>
            </div>
     </div>

     <div className="second-area-input-post-by-user2  ">
        <textarea  cols="51" rows="10" className=' mt-3 resize-none w-[97%] border-black mx-1 rounded-sm p-2 border-solid border-[2px]' placeholder='Things To Take Care Of...'>
        </textarea>
      </div>


      <div className="first-section-input-post-by-user">
        <input type="text" placeholder='Exact Location Of The Place You Visited'  className='border-2 border-black mx-1 rounded-sm p-2 w-[97%]'/>
      </div>


      <div className="first-section-input-post-by-user mt-5 ">
        <label className=' p-2 w-[97%] text-lg font-[lora] font-bold'>Would You Recommand It To Others??</label>
        <select id="cars">
  <option value="volvo" className='font-[karla] font-semibold'>Yes</option>
  <option value="saab" className='font-[karla] font-semibold'>No</option>

</select>
      </div>

      

      </div>
    </div>
  </div>
</div>
<div className="post-button-click-area-post-by-user  flex justify-center items-center">
  <Button variant='default' className='cursor-pointer font-bold font-[lora] mr-3 w-[45rem] h-[3rem]'>Travel Facts</Button>
    
  </div>
    </>
  )
}

export default WritePosts