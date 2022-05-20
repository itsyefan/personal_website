import './App.css';
import { Hero } from './components/Hero';
import { TypeEffect } from './components/TypeEffect';
import github from './images/github.png';
import leetcode from './images/leetcode.png';
import linkedin from './images/linkedin.png';

function App() {
  return (
    <div class="snap-y snap-mandatory h-screen w-full overflow-scroll overflow-x-hidden">
      <div class="snap-start w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500 grid place-items-center">
        <div class="py-10 px-10 w-56 h-56 bg-white shadow-2xl rounded-xl lg:h-96 lg:w-96">
          <h1 class="font-sans text-black text-center text-xl lg:text-6xl lg:pb-2">
            <Hero />
          </h1>
          <div class="w-auto h-14">
            <h3 class="font-sans font-thin italic text-center text-md text-black lg:text-2xl">
              <TypeEffect />
            </h3>
          </div>

          <div class="w-auto h-auto lg:h-60 justify-center">
            <div class="top-5 flex flex-rows justify-evenly relative top-1/2">
              <a href="https://leetcode.com/itsyefan/" target="_blank" rel="noopener noreferrer" ><img src={leetcode} alt="LeetCode Profile" class="h-12 w-12 duration-300 hover:blur-sm "></img></a>
              <a href="https://github.com/itsyefan" target="_blank" rel="noopener noreferrer" ><img src={github} alt="GitHub Profile" class="h-12 w-12 duration-300 hover:blur-sm"></img></a>
              <a href="https://www.linkedin.com/in/ethanyip/" target="_blank" rel="noopener noreferrer" ><img src={linkedin} alt="LinkedIn Profile" class="h-12 w-14 duration-300 hover:blur-sm"></img></a>
            </div>
          </div>
        </div>
      </div>
      <div class="snap-start w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 grid place-items-center">
        <div class="py-10 px-10 h-128 w-128 2xl:h-156 2xl:w-156 bg-white shadow-2xl rounded-xl relative">
          <h1 class="text-center font-thin text-4xl pb-10 2xl:text-6xl">About Me</h1>
          <p class="text-sm 2xl:text-lg">
          Hi! My name is Ethan, and I am a penultimate year software engineering student looking for places where I can show off my capabilities.<br/> Some things I can bring to the table include being an observant team player, a clear communicator, and a hard worker .
          I believe my previous work experience and leadership positions provide a good reflection of this. <br/><br/>I love taking on the different challenges that are thrown my way and enjoy anything that gets my brain going. I find that getting hands on with things is my
          favourite way of learning (even this website was my way of getting to know the basics of JS, Tailwind and responsive web development). <br/><br/>Outside of software development and academics, I like to play video games and indulge in outdoor activities.
          </p>
        </div>
      </div>
    </div>

  );
}

export default App;
