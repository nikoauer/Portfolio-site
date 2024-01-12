import logo from '../assets/portrait.jpg'

export default function HomePage() {
    return(
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">Hi, My name is Niko Auer and I am a <span className="text-blue-600">Web Developer</span></h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">I am fueled by a passion for crafting interactive solutions to contemporary challenges. The allure of coding lies not just in problem-solving, but in embracing it as a gateway to continuous learning and personal growth</p>
            </div>
        
            <div className="relative ms-4">
              <img className="w-full rounded-md" src={logo} alt="Potrait"/>
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 "></div>
              <div className="absolute bottom-0 start-0">
                <svg className="w-2/3 ms-auto h-auto text-white" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="531" y="352" width="99" height="99" fill="white"/>
                  <rect x="140" y="352" width="106" height="99" fill="white"/>
                  <rect x="482" y="402" width="64" height="49" fill="white"/>
                  <rect x="433" y="402" width="63" height="49" fill="white"/>
                  <rect x="384" y="352" width="49" height="50" fill="white"/>
                  <rect x="531" y="328" width="50" height="50" fill="white"/>
                  <rect x="99" y="303" width="49" height="58" fill="white"/>
                  <rect x="99" y="352" width="49" height="50" fill="white"/>
                  <rect x="99" y="392" width="49" height="59" fill="white"/>
                  <rect x="44" y="402" width="66" height="49" fill="white"/>
                  <rect x="234" y="402" width="62" height="49" fill="white"/>
                  <rect x="334" y="303" width="50" height="49" fill="white"/>
                  <rect x="581" width="49" height="49" fill="white"/>
                  <rect x="581" width="49" height="64" fill="white"/>
                  <rect x="482" y="123" width="49" height="49" fill="white"/>
                  <rect x="507" y="124" width="49" height="24" fill="white"/>
                  <rect x="531" y="49" width="99" height="99" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
    )
}