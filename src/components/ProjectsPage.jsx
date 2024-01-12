import { Cog6ToothIcon, FaceSmileIcon, WrenchIcon } from '@heroicons/react/20/solid'
import rockfit from "../assets/rockfit.png"

const features = [
  {
    name: 'How does it work?',
    description:
      'A customer simply inputs their right and left foot measurement in centermeters and it will return recommended shoes and their size.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Why?',
    description: `One of the issues with buying rock climbing shoes is that there isn't always a store to try them on, so to allow customers to have a guide to understand what shoe would foot their foot this was built. Furthermore it always small business to be locally supported and to better engage and fullfil customers needs.`,
    icon: FaceSmileIcon,
  },
  {
    name: 'Tools used:',
    description: 'Expressjs, Nodejs, MongoDB, React, Bootstrap.',
    icon: WrenchIcon,
  },
]

export default function Projectspage() {
  return (
    <>
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Shoe Calculator</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl hover:text-blue-600"><a href="https://shoe-calculator-frontend.onrender.com/" target="_blank">RockFit</a></p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A rock climbing shoe calculator that was designed to assist a rock climbing retailer in being able to provide an easy to use shoe guide for customers that want to purchase shoes online.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
  src={rockfit}
  alt="Product screenshot"
  className="max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
/>

        </div>
      </div>
    </div>
{/* 
    section 2 */}
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="relative p-6 md:p-16">
      <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
          <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
            Fully customizable rules to match your unique needs
          </h2>
  
          
          <nav class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
            <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
              <span class="flex">
                <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
                <span class="grow ms-6">
                  <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Advanced tools</span>
                  <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Use Preline thoroughly thought and automated libraries to manage your businesses.</span>
                </span>
              </span>
            </button>
  
            <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
              <span class="flex">
                <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                <span class="grow ms-6">
                  <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Smart dashboards</span>
                  <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Quickly Preline sample components, copy-paste codes, and start right off.</span>
                </span>
              </span>
            </button>
  
            <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
              <span class="flex">
                <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                <span class="grow ms-6">
                  <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Powerful features</span>
                  <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Reduce time and effort on building modern look design with Preline only.</span>
                </span>
              </span>
            </button>
          </nav>
        </div>
        
  
        <div class="lg:col-span-6">
          <div class="relative">
            <div>
              <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
              </div>
  
              <div id="tabs-with-card-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
              </div>
  
              <div id="tabs-with-card-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
              </div>
            </div>
  
            <div class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
              <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
                <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
                <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
              </svg>
            </div>

          </div>
        </div>
      </div>
  
      <div class="absolute inset-0 grid grid-cols-12 w-full h-full">
        <div class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
      </div>
    </div>
  </div>
  </>
  )
}