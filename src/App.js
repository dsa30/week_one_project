import "./App.css";
import Card from "./components/Card";
import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {
  return (
    <div className="container">
      <Card
        heading="SEDANS"
        image={sedans}
        background="hsl(31, 77%, 52%)"
        btcolor="hsl(31, 77%, 52%)"
        paragraph="Choose a sedan for its affordability and excelent fuel economy. Ideal for cruising in the city of on your next road trip."
      />
      <Card
        heading="SUVS"
        image={suvs}
        background="hsl(184, 100%, 22%)"
        btcolor="hsl(184, 100%, 22%)"
        paragraph="Take and SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      />
      <Card
        heading="LUXURY"
        image={luxury}
        background="hsl(179, 100%, 13%)"
        btcolor="hsl(179, 100%, 13%)"
        paragraph="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of luxury rental and arrive in style."
      />
    </div>
  );
}

export default App;
