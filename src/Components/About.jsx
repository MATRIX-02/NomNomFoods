const About = () => {
    return (
      <div className="bg-[#37718E] top-0 w-full text-white pt-20 absolute">
        <div className="w-full max-w-6xl mx-auto py-12 ">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
          <div className="flex flex-col md:flex-row m-3">
            <div className="flex-grow md:w-full md:mr-4 mb-8">
              <div className="bg-white shadow-md p-8 text-gray-800 mb-8 h-2/4">
                <h2 className="text-2xl font-bold mb-4 border-b w-fit border-dashed">Our Mission</h2>
                <p className="text-lg text-gray-500 text-justify mb-4">
                  Welcome to NOMNOMFOODS, your go-to destination for delicious
                  meals delivered right to your doorstep. Our mission is simple:
                  to bring you the best dining experience without leaving the
                  comfort of your home. Whether you're craving your favorite local
                  cuisine or eager to explore new flavors, NOMNOMFOODS has you
                  covered.
                </p>
              </div>
              <div className="bg-white shadow-md p-8 text-gray-800 mb-8 h-2/4">
                <h2 className="text-2xl font-bold mb-4 border-b w-fit border-dashed">Our Commitment</h2>
                <p className="text-lg text-gray-500 text-justify mb-4">
                  At NOMNOMFOODS, we're committed to quality, convenience, and
                  customer satisfaction. We partner with a diverse range of
                  restaurants and eateries to offer you a wide selection of
                  mouthwatering dishes. From appetizers to desserts, we've curated
                  a menu that caters to every palate.
                </p>
              </div>
            </div>
            <div className="md:w-full md:ml-4 mb-8 ">
              <div className="bg-white shadow-md p-8 text-gray-800 mb-8 h-2/4">
                <h2 className="text-2xl font-bold mb-4 border-b w-fit border-dashed">Ordering Made Easy</h2>
                <p className="text-lg text-gray-500 text-justify mb-4">
                  Ordering with NOMNOMFOODS is quick and easy. Simply browse our
                  app, select your favorite dishes, and checkout. Our efficient
                  delivery team will ensure that your food arrives fresh and
                  piping hot, right on time.
                </p>
              </div>
              <div className="bg-white shadow-md p-8 text-gray-800 mb-8 h-2/4">
                <h2 className="text-2xl font-bold mb-4 border-b w-fit border-dashed">Join Us Today</h2>
                <p className="text-lg text-gray-500 text-justify mb-4">
                  Join us on a culinary journey and experience the convenience of
                  NOMNOMFOODS. Whether it's a busy weekday or a lazy weekend, let
                  us handle the cooking while you sit back, relax, and enjoy a
                  delicious meal from NOMNOMFOODS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  