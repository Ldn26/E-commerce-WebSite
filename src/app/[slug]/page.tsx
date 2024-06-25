import ProductImages from "../../components/ProductImages";
import CustomizeProduct from "../../components/CustomizeProduct";
import Add from "../../components/Add";

function SinglePage() {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px:32 2xl:px-64 relative  flex flex-col lg:flex-row gap-16">
      {/* Image */}
      <div className="w-full lg:w-1/2 sticky h-max top-20">
        <ProductImages />
      </div>
      {/* Text */}
      <div className="w-full lg:w-1/2  flex-col flex  gap-6 ">
        <h1 className="font-medium  text-4xl">Product Name </h1>
        <p className="text-gray-500 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          necessitatibus, labore tempore numquam id eliae accusamus excepturi ad
          officia, rem iure deser unt quaerat.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4 ">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProduct />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm ">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi cum
            culpa blanditiis, reprehenderit quidem perferendis perspiciatis
            nesciunt ipsa accusamus neque exercitationem quod debitis deleniti
            eum eligendi qui nihil dolore laborum.
          </p>
        </div>
        <div className="text-sm ">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi cum
            culpa blanditiis, reprehenderit quidem perferendis perspiciatis
            nesciunt ipsa accusamus neque exercitationem quod debitis deleniti
            eum eligendi qui nihil dolore laborum.
          </p>
        </div>
        <div className="text-sm ">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi cum
            culpa blanditiis, reprehenderit quidem perferendis perspiciatis
            nesciunt ipsa accusamus neque exercitationem quod debitis deleniti
            eum eligendi qui nihil dolore laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
