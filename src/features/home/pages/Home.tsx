import Hero from "../components/Hero"
import FeaturedApartments from "../components/FeaturedApartments"
import ValueProposition from "../components/ValueProposition"

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <FeaturedApartments />
      <ValueProposition />
    </div>
  )
}

export default Home