import React , {useState} from 'react'
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

<div className="main-container-write-posts-area p-[3rem] flex">
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
  <div className="right-area-section-text-to-post flex  w-[50%]">
    <div className="inner-right-area-section-text-to-post-by-user w-[100%] ">
      <div className="first-section-input-post-by-user">
        <input type="text" placeholder='Select Country'  className='border-2 border-black mx-1 rounded-sm p-2 w-[48%]'/>
        <input type="text" placeholder='Select State' className='border-2 border-black mx-1 rounded-sm p-2 w-[48%]'/>
      </div>
      <div className="second-area-input-post-by-user  ">
        <textarea  cols="51" rows="10" className=' mt-3 resize-none w-[97%] bg-gray-50 border-black mx-1 rounded-sm p-2 border-solid border-[2px]' placeholder='Write Your Experience'>

        </textarea>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default WritePosts