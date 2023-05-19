import {Grid} from "@mui/material";
import React from "react";
import Cards from "./Card";


const main = () => {

const sector = [

  {
    toLink:"https://en.wikipedia.org/wiki/Law_enforcement_in_India#:~:text=The%20principal%20national%20ministry%20concerned,administered%20by%20the%20central%20government.",
    name : "Law Enforcements",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYA-M4JHH2pGYFADPlznvM8MkyJsKdiwinqzZAz_f&s"

  },

  {
    toLink:"https://en.wikipedia.org/wiki/Water_supply_and_sanitation_in_India",
    name : "Water Supply",
    image : "https://static.vecteezy.com/system/resources/previews/004/658/439/original/tap-icon-color-faucet-in-flat-style-water-supply-illustration-for-infographic-website-or-app-free-vector.jpg",
  },
  {
    toLink:"https://en.wikipedia.org/wiki/District_magistrate",
    name : "District Collector",
    image : "https://static.theprint.in/wp-content/uploads/2022/12/District-Magistrate-copy.jpg",

  },
  {
    toLink:"https://en.wikipedia.org/wiki/Tourism_in_India",
    name : "Tourism",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OSBc2sLmtPY1vaPPNrq4U-uMI1Zm0dYkAw&usqp=CAU",

  },
  {
    toLink:"https://en.wikipedia.org/wiki/Public_sector_undertakings_in_India",
    name : "Public Sector",
    image : "https://thumbs.dreamstime.com/b/public-sector-icon-isolated-white-background-your-web-mobile-app-design-public-sector-icon-isolated-white-background-133861103.jpg"

  },
  {
    toLink:"https://en.wikipedia.org/wiki/List_of_electricity_organisations_in_India",
    name : "Electricity Department",
    image : "https://img.freepik.com/free-vector/electricity-lighting-composition-with-characters-electricians-with-power-line-gear-lamp_1284-54213.jpg",

  },

  {
    toLink:"https://en.wikipedia.org/wiki/Central_Public_Works_Department",
    name : "PwD Department",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6NtAl6BONsp4cYEtQDqN1qzqT0SPnycd5xQ&usqp=CAU",

  },

  {
    toLink:"https://en.wikipedia.org/wiki/Union_government_ministries_of_India",
    name : "Politicians",
    image : "https://static.vecteezy.com/system/resources/previews/005/611/055/original/the-lecturer-stands-behind-the-rostrum-the-speaker-lectures-and-gestures-a-young-politician-speaks-to-the-public-flat-cartoon-illustration-free-vector.jpg",

  }
]

  return (

<>


<section className="bg-white my-20 dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We believe in Solving Problems</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at QuickSupport we focus on social where technology, innovation, and capital can solve long-term problem and drive smooth life.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#explore" className="inline-flex button justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
           </div>
    </div>
<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
</section>




<hr className="my-12"/>

<hr className="my-12"/>



    <div id="explore">

    <hr className="my-12"/>

    <div className="text-container text-center">
    <h1 class="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    </div>



    <hr className="my-12"/>

    <div className="md:mx-36 my-16 sm:mx-0">


    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} className="md:my-4 sm:d-block xs:d-block">
  {sector.map((sec, index) => (
    <Grid item xs={12} sm={4} md={4} key={index}>
        <Cards 
          className="m-4 overflo"
          toLink={sec.toLink}
          name = {sec.name}
          image = {sec.image} />
    </Grid>
  ))}
</Grid>
  </div>
    </div>


    <hr className="my-12"/>
    <hr className="my-12"/>
              </>
  );
};

export default main;
