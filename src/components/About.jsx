import Nav from "./Nav";
import shopping from "./../images/shopping.png";

function About() {
  return (
    <div>
      <Nav />

      <div className="flex my-14 mx-auto p-20 max-w-7xl justify-around shadow-xl rounded-2xl">
        <img src={shopping} className="block w-4/5" />

        <div className="flex flex-col w-1/3">
          <h2 className="text-3xl mb-20">ABOUT US</h2>
          <p className="text-2xl mb-10">
            Online shopping app is a Professional shopping Platform. Here we
            will provide you only interesting content, which you will like very
            much.
          </p>
          <p className="text-2xl mb-10">
            We're dedicated to providing you the best of shopping, with a focus
            on dependability and shopping. We're working to turn our passion for
            shopping into a booming online website. We hope you enjoy our
            shopping as much as we enjoy offering them to you.
          </p>
          <p className="text-2xl mb-10">
            Thanks For Visiting Our Site Have a nice day!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
