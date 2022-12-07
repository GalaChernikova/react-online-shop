import Nav from "./Nav";
import delivery from "./../images/delivery.png";

function Delivery() {
  return (
    <div>
      <Nav />

      <div className="flex my-14 mx-auto p-20 max-w-7xl justify-around shadow-xl rounded-2xl">
        <div className="flex flex-col w-1/3">
          <h2 className="text-3xl mb-20">DELIVERY</h2>

          <p className="text-2xl mb-10">
            We currently offer the following three delivery options for getting
            your order to you. Please know that there will be no additional VAT
            or duty charges requested on delivery by our carriers.
          </p>
        </div>

        <img src={delivery} className="block w-2/5"/>
      </div>
    </div>
  );
}

export default Delivery;
