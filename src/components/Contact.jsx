import React from 'react'

export default function Contact() {
  const CONTACT = {
    email: 'sriharsha.godavarthideveloper@gmail.com',
    phone: '+1-945-342-3862', // TODO: update with your number
    location: 'Irving, TX',
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold">Contact</h2>
      <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="md:col-span-1 space-y-2 md:space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold">Let’s connect</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-md">Reach out via email or phone. I’m open to opportunities in cloud, full‑stack, and platform engineering.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6 items-stretch">
            <a href={`mailto:${CONTACT.email}`} className="group p-5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-3 hover:bg-blue-50 min-h-[80px]">
              <span className="text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.243l8 6 8-6V18H4z"/></svg>
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500">Email</div>
                <div className="text-sm font-medium text-gray-800 group-hover:text-blue-800 break-words leading-snug">{CONTACT.email}</div>
              </div>
            </a>
            <a href={`tel:${CONTACT.phone}`} className="group p-5 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center gap-3 hover:bg-emerald-50 min-h-[80px]">
              <span className="text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.5a1 1 0 01-1 1A17.5 17.5 0 013.5 6a1 1 0 011-1H8a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.7 2.22z"/></svg>
              </span>
              <div>
                <div className="text-xs text-gray-500">Phone</div>
                <div className="text-sm font-medium text-gray-800 group-hover:text-emerald-800">{CONTACT.phone}</div>
              </div>
            </a>
            <div className="p-5 rounded-xl bg-slate-50/60 border border-slate-200 flex items-center gap-3 sm:col-span-2 min-h-[80px]">
              <span className="text-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.93V18a1 1 0 00-2 0v1.93A8.001 8.001 0 014.07 13H6a1 1 0 000-2H4.07A8.001 8.001 0 0111 4.07V6a1 1 0 002 0V4.07A8.001 8.001 0 0119.93 11H18a1 1 0 000 2h1.93A8.001 8.001 0 0113 19.93z"/></svg>
              </span>
              <div>
                <div className="text-xs text-gray-500">Location</div>
                <div className="text-sm font-medium text-gray-800">{CONTACT.location}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t px-6 py-4 text-xs text-gray-500">Typically responds within 24–48 hours.</div>
      </div>
    </div>
  )
}
