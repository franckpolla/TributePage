import "./App.css";

import Francis from "./assets/francis.jpg";

function App() {
  return (
    <>
      <div className=" bg-black h-auto text-white md:px-32 ">
        <h1 className="title text-3xl text-center  hover:animate-pulse pt-10 text-white">
          Francis Ngannou
        </h1>
        <p className=" text-center font-thin"> MMA champion </p>
        <div>
          <img
            src={Francis}
            className="w-full h-auto pt-10  lg:h-screen"
            alt="Francis_Image"
          />
        </div>
        <div className="container mt-20 ">
          <h2 className="px-5 text-2xl pb-10 text-blue-300">Biography</h2>
          <article className="px-10 font-normal ">
            Francis Ngannou was born on September 5, 1986, in Batié, Cameroon.
            He had a very difficult childhood, growing up in extreme poverty,
            especially after his parents' divorce. He found himself forced to
            work in a sand mine located in his hometown under extremely harsh
            conditions. A fan of boxing, particularly of the American boxer Mike
            Tyson, Ngannou wanted to become a boxer himself. He started
            practicing the sport late, at the age of 22, in Douala, the economic
            capital of Cameroon. With the intention of pursuing a career in
            boxing, he emigrated to France in 2013, at the age of 26, among a
            flow of migrants. Alone and without money, Ngannou lived as a
            homeless person on the streets of Paris. He was eventually noticed
            by a humanitarian association called La Chorba, which took him in.
            Within the association, he helped with the distribution of meals to
            the needy.
          </article>
          <h2 className="py-10 px-5 text-2xl text-blue-300  text-center">
            Advive for Life{" "}
          </h2>
          <article className="px-10 font-sans text-center">
            The one who intimidates me is myself. I'm scared to fail. That is
            the thing that makes me the most afraid, to fail. Just to think that
            I can do a mistake and lose the fight scares me, so that is why I
            work out a lot: to bring more chance to my size and less chance to
            my opponent.
          </article>
          <p className="pt-2 font-sherif text-center">
            {" "}
            __________Build your own life________{" "}
          </p>

          <footer className="text-center pt-20 ">
            <p className="text-gray-300 ">
              Copyright © 2024 Franckpolla. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
