const Location = ({ data }) => {
  return (
    <section className="bg-green text-white py-16">
      <div className="text-center mb-8">
        <h4 className="">{data.label} </h4>
        <h2 className="mt-6">{data.title}</h2>
      </div>

      <div className="w-full h-[400px] md:h-[500px]">
        <iframe
          className="w-full h-full border-0"
          src={data.href}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start container mx-auto mt-8 px-2 p2">
        <div>
          <p>{data.Distances.one}</p>
          <p>{data.Distances.two}</p>
          <p>{data.Distances.three}</p>
        </div>
        <div>
          <p>{data.Distances.four}</p>
          <p>{data.Distances.five}</p>
          <p>{data.Distances.six}</p>
        </div>
        <div>
          <p>{data.Distances.seven}</p>
          <p>{data.Distances.eight}</p>
          <p>{data.Distances.nine}</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
