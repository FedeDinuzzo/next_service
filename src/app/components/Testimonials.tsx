import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import styles from "../constants/style";

type Props = {
  type?: "heladera" | "lavarropas" | "general";
};

const Testimonials = ({ type }: Props) => {
  const feedbackFiltrado = type ? feedback.filter((f) => f.categoria === type) : feedback;

  return (
    <section id="clients" className={`${styles.flexCenter} flex-col relative lg:mb-40 px-6 xl:px-0`}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          Experiencias de
          <br />
          Nuestros Clientes
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Calidad De Servicio no es lo que nosotros damos, es lo que reciben nuestros clientes.
          </p>
        </div>
      </div>

      <div className="overflow-hidden h-[500px] md:h-auto w-full relative group my-10 md:my-0">
        {/* Gradientes */}
        <div className="hidden md:block absolute h-full w-10 md:w-12 bg-gradient-to-r from-[#00040f] to-transparent z-20" />
        <div className="md:hidden absolute top-0 h-10 w-full bg-gradient-to-b from-[#00040f] to-transparent z-20" />
        <div className="md:hidden absolute bottom-0 h-10 w-full bg-gradient-to-t from-[#00040f] to-transparent z-20" />

        {/* Carrusel */}
        <div className="group-hover:paused flex md:flex-row flex-col md:w-[200%] w-full gap-6 md:animate-slide-horizontal animate-slide-vertical">
          {[...feedbackFiltrado, ...feedbackFiltrado].map((card, i) => (
            <div key={`${card.id}-${i}`} className="min-w-[420px] max-w-[420px] flex-shrink-0">
              <FeedbackCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
