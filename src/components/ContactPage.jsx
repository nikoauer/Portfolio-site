import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import email from "../assets/email.svg"
import contactbackground from "../assets/contactbackground.svg"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  return (
    <div id="contact" className="relative min-h-screen w-full">
      <div className="absolute inset-0 -z-10">
        <img
          src={contactbackground}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              Want to get in touch? You can simply send me a message using my contact form or get in touch through my LinkedIn or Email.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin aria-hidden="true" className="h-7 w-6 text-black" />
                </dt>
                <dd>
                  <a href="https://www.linkedin.com/in/niko-auer/" target="_blank"
                  rel="noreferrer" className="hover:text-indigo-600 text-gray-900">
                    LinkedIn
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <FaGithub aria-hidden="true" className="h-7 w-6 text-black" />
                </dt>
                <dd>
                  <a href="https://github.com/nikoauer" target="_blank"
                  rel="noreferrer" className="hover:text-indigo-600 text-gray-900">
                    Github
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-black" />
                </dt>
                <dd>
                  <a href="mailto:niko.auer.developer@gmail.com" className="hover:text-indigo-600 text-gray-900">
                    niko.auer.developer@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg bg-slate-50 p-5 rounded-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <input type="hidden" name="access_key" value="1f0d15e7-785b-4223-a949-0bc7ed3629f2" />
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-black">
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    placeholder="Name"
                    name="Name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    placeholder="Phone Number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    placeholder="What do you want to say?"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
