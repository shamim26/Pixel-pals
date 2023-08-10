import testimonial from "../../../assets/testimonial.jpg";

const Testimonial = () => {
  return (
    <div
      style={{ backgroundImage: `url(${testimonial})` }}
      className="
        px-8
        py-10
        md:py-0
        md:px-40
        md:h-[30rem]
        bg-cover
        bg-center
        bg-sky-950
        bg-blend-multiply
        flex
        flex-col
        md:flex-row
        justify-center
        items-center
        gap-8
    "
    >
      <div
        className="
      text-white
        space-y-4
      "
      >
        <p
          className="
        font-semibold
        tracking-wider
        "
        >
          TESTIMONIALS
        </p>
        <h1
          className="
        text-4xl
        font-bold
        "
        >
          What Our Clients Say About Us
        </h1>
        <p>
          We appreciate your kind and honest feedback and invite you to our
          amazing store.
        </p>
        <button
          className="
        font-medium
        py-3
        px-6 
        rounded-full
        bg-sky-700
        hover:bg-sky-500
        duration-200
        "
        >
          About Us
        </button>
      </div>
      <div
        className="
      bg-white
      rounded-xl
      p-10
      space-y-3
      hover:-translate-y-3
      transition-all
      duration-300
      group
      "
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="2em"
          width="2em"
          className="group-hover:fill-green-600"
        >
          <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
        </svg>
        <p>
          What a great store for the entire family! My kids love this place
          because of the toys!
        </p>
        <div>
          <h4
            className="
          font-semibold
          "
          >
            Mandy Mathers
          </h4>
          <p>CEO, Business Co.</p>
        </div>
      </div>
      <div
        className="
      bg-white
      rounded-xl
      p-10
      space-y-3
      hover:-translate-y-3
      transition-all
      duration-300
      group
      "
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="2em"
          width="2em"
          className="group-hover:fill-green-600"
        >
          <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
        </svg>
        <p>
          Not only do the toys make our children squeal with joy, but the sales
          team is awesome!
        </p>
        <div>
          <h4
            className="
          font-semibold
          "
          >
            Peter Bowman
          </h4>
          <p>CEO, Business Co.</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
