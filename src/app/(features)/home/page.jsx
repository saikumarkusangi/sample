import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Search Header */}
      <div className="flex items-center gap-2 mb-6">
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Find a mentor"
            className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-8 overflow-x-auto">
        <button className="px-6 py-2 rounded-full bg-black text-white">ALL</button>
        <button className="px-6 py-2 rounded-full border border-gray-200 hover:bg-gray-50">INDUSTRY</button>
        <button className="px-6 py-2 rounded-full border border-gray-200 hover:bg-gray-50">COMPANY</button>
      </div>

      {/* Recommended Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Recommended for you</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mentors.map((mentor) => (
            <div key={mentor.name} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{mentor.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">{mentor.role}</p>
                <p className="text-sm text-gray-500">{mentor.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Searches */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Trending searches</h2>
        <div className="space-y-4">
          {trendingSearches.map((search) => (
            <div key={search.title} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                  {search.icon}
                </div>
                <div>
                  <p className="font-medium">{search.title}</p>
                  <p className="text-sm text-gray-500">{search.count} mentors</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mentors = [
  {
    name: 'Caroline',
    role: 'Recruitment',
    company: 'Insurance',
    image: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg='
  },
  {
    name: 'David',
    role: 'Data Analyst',
    company: 'Fintech',
    image: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg='
  },
  {
    name: 'Joseph',
    role: 'Researcher',
    company: 'Investment',
    image: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg='
  }
];

const trendingSearches = [
  {
    title: 'Sales',
    count: 704,
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" /></svg>
  },
  {
    title: 'Salesforce',
    count: 12,
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
  },
  {
    title: 'Social Work',
    count: 403,
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
  }
];
