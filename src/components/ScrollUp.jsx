import React from "react"
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollUp () {

    window.addEventListener('scroll', () => {
        const scrollToTopButton = document.getElementById('scrollToTopButton');
        if (window.pageYOffset > 100) {
          scrollToTopButton.classList.remove('hidden'); 
          scrollToTopButton.classList.add('block'); 
        } else {
          scrollToTopButton.classList.add('hidden');
          scrollToTopButton.classList.remove('block');
        }
      });

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}    

    return (
      <>
        <button onClick={scrollToTop} id="scrollToTopButton"
            className="hidden fixed bottom-7 right-7 p-2 
                        text-white rounded-full 
                       transition duration-300 hover:bg-indigo-800 bg-indigo-600">
        <FaArrowUp className="md:w-6 md:h-6 sm:h-7 sm:w-7" alt="Arrow up icon" />
    </button>
      </>  
    )
}