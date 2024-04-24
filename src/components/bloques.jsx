import ImgCards from "./imgCards";
import { imgData } from "../assets/dataStore";
const Bloques = () => {
  const RenderContent = (props) => {
    // console.log(img, "las props........");
    const { image, title, info } = props.img;
    return (
      <div class="p-4 lg:w-1/3">
        <ImgCards imgSrc={image}>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p>{info}</p>
        </ImgCards>
      </div>
    );
  };
  return (
    <section class="text-gray-600 body-font ">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {imgData.map((img) => (
            <RenderContent img={img} />
          ))}
          <div className="mt-6 mx-auto -my-10">
            <button className="text-black bg-gray-100 px-3 py-1 rounded shadow-md font-style: italic">
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bloques;
