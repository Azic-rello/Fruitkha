import { kartalar, serviceList } from "../constants";

const Services = () => {
  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-8">
          {serviceList.map((service) => (
            <div className="flex flex-col items-center text-center">
              <div className="border-2 border-dashed text-orange-500 border-orange-500 rounded-full p-5 mb-4 text-8xl">{service.icon}</div>
              <h3 className="font-bold text-lg mb-1">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-24 mb-16">
        <h3 className="text-4xl font-bold">
          Our
          <span className="text-orange-500 border-b-4 border-orange-500 inline-block">
            Products
          </span>
        </h3>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid, fuga quas
          itaque eveniet beatae optio.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
        {kartalar.map((item) => (
    <div
      className="bg-white shadow-lg rounded-2xl overflow-hidden w-64 hover:scale-105 transform transition duration-300"
    >
      <img
        src={item.rasm}
        alt={item.nomi}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800 mb-2">{item.nomi}</h1>
        <h2 className="text-gray-600 text-sm mb-2">{item.haqida}</h2>
        <p className="text-orange-500 font-semibold">{item.narxi}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Services;
