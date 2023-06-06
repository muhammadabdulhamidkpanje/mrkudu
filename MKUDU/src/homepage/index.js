import { Link } from "react-router-dom";
import assignment from "../assets/assignment.pdf"

const Homepage = () => {
    const FeatureDAta = [{title:"Distributed ledger",
                          content:"Distributed ledger technology is a platform that uses ledgers stored on separate, connected devices in a network to ensure data accuracy and security. Blockchains evolved from distributed ledgers to address growing concerns that too many third parties are involved in too many transactions.",
                          Image:"/distributedImage.jpg"},

                          {title:"Smart Contract",
                          content:"Distributed ledger technology is a platform that uses ledgers stored on separate, connected devices in a network to ensure data accuracy and security. Blockchains evolved from distributed ledgers to address growing concerns that too many third parties are involved in too many transactions.",
                          Image:"/smartcontractImage.jpg"},
                          
                          {title:"consensus mechanism",
                          content:"Distributed ledger technology is a platform that uses ledgers stored on separate, connected devices in a network to ensure data accuracy and security. Blockchains evolved from distributed ledgers to address growing concerns that too many third parties are involved in too many transactions.",
                          Image:"/consensusImage.png"},
                        ]
    const contributorCardDAta = [{name:"Stephen Silas Ataba",
                                  matNo:"U18/FNS/CSC/1078",
                                  photo:"stephen.jpg",},
                                 {name:"Muhammad Abdulhamid Kpanje",
                                  matNo:"U18/FNS/CSC/1075",
                                  photo:"/abdulhamid.jpg",},
                                 {name:"",
                                  matNo:"",
                                  photo:"",},]
  return (
    <section className=" mt-16 ml-8 mr-8 pt-2 h-1/2 ">
      <section className="flex flex-col sm:flex-row  rounded-md border-3 border-wheat bg-zinc-300 ">
        <main 
          className="sm:w-1/2 inherit bg-contain no-repeat h-[200px] sm:h-[450px]"
        >

          <img src="/mainBG.webp" alt="blockchain image" className="w-full h-full rounded-md"/>
        </main>
        <aside className="flex justify-center items-center  ">
          <h3 className=" text-center text-2xl m-[80px] uppercase">
            assignment on blockchain technology by group z
          </h3>
        </aside>
      </section>
      <section className=" my-5 border-b-2 border-black-200">
        <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl"> features of Blockchain technologies</h2>
        {/**three different cards */}
        <div className="flex flex-col w-full sm:flex-row justify-evenly">
         {FeatureDAta.map((data)=>(
            <div className="">
            <div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full h-[200px]" src={`${data.Image}`} alt="Mountain" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{data.title}</div>
                  <p class="text-gray-700 text-base">
                    {data.content}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 w-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">
                    read more
                  </span>
                </div>
              </div>
            </div>
            </div>
         ))}
         </div>
      </section>
      {/**the assigmnent card  */}
      <section className="">
      <div class="pt-6 pb-12 bg-gray-300">  
      <div id="card" class="">
    <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">The assigmnent</h2>

    <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
      
      <div v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
        
        <div class="h-64 w-auto md:w-1/2">
          <img class="inset-0 h-full w-full object-cover object-center" src="card.img" />
        </div>
        
        <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 class="font-semibold text-lg flex leading-tight justify-self-center content-center">
          Distributed ledger technology is a platform that uses ledgers stored 
          on separate, connected devices in a network to ensure data accuracy 
          and security. Blockchains evolved from distributed ledgers 
          to address growing concerns 
          that too many third parties are involved in too many transactions
          .......................
          </h3>
          <div className="border-top-4 flex items-center justify-evenly">
          <a
        href="/assignment.pdf"
        download="A term paper on blockchain technology"
        target="_blank"
        rel="noreferrer"
      >

            <button className=" bg-rose-100 rounded py-2 px-5">Download </button>
            </a>
            <Link to="/assignment">
            <button className=" bg-rose-100 rounded py-2 px-5"> Read more </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
{/**contributors page */}
<section className="my-4">
<h2 class="text-center font-serif my-2  uppercase text-4xl xl:text-5xl">contributors</h2>
<div className="flex flex-col w-full sm:flex-row justify-evenly ">
         {contributorCardDAta.map((data)=>(
            <div className="sm:w-[33.33%]">
            <div>
              <div class="max-w-sm  overflow-hidden shadow-lg">
                <img className="w-full h-[200px] rounded" src={`${data.photo}`} alt="contributor photo" />
                <div class="px-6 py-4">
                  <p class="text-black-700 uppercase text-base ">
                    {data.name}
                  </p>
                  <p class="text-black uppercase text-base ">
                    {data.matNo}
                  </p>
                </div>
              </div>
            </div>
            </div>
         ))}
         </div>
</section>

</section>
  );
};
export default Homepage;
