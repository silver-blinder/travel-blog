import PropTypes from "prop-types";
const Blog = ({ destination, img, content, date }) => {
  return (
    <div className=" relative h-full w-full">
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="bg-white w-80 h-128 rounded-xl border-black border-solid border-2 shadow-specific p-3 flex flex-col gap-2">
          <p className=" text-2xl text-center font-myfont1 py-0 my-0 hover:text-yellow-400 cursor-pointer ">
            {destination}
          </p>
          <div className="flex justify-center items-center h-52">
            <img
              src={img.Url}
              alt={img.title}
              className="rounded-lg max-h-full"
            />
          </div>

          <p className=" text-base leading-extra-loose font-myfont3 text-gray-500">
            {content}
          </p>
          <p className=" text-sm font-myfont2 pt-0">{date}</p>
          <div className=" flex flex-row gap-2 items-center">
            <img
              src="public/images/image-avatar.webp"
              alt="writer"
              className=" w-6 rounded-full"
            />
            <p className=" font-myfont1 text-sm">Rorschach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  destination: PropTypes.string.isRequired,
  img: PropTypes.shape({
    Url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Blog;
