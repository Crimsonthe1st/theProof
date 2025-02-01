import React from 'react';

const tags = [
   { title: 'Calculus', description: 'Study of continuous change; derivatives and integrals', icon: '.', id: 1 },
   { title: 'Linear Algebra', description: 'Linear equations, vector spaces, matrices', icon: '.', id: 2 },
   { title: 'Statistics', description: 'Analysis, interpetation, and presentation of data', icon: '.', id: 3 }
]

function Problems() {
   const listTags = tags.map(tag =>
      <ProblemCard title={tag.title} icon={tag.icon} description={tag.description} key={tag.id}></ProblemCard>
   )

   return (
      <div className="flex justify-center flex-wrap">
         <div className="flex flex-row gap-x-5 w-sm">
            {listTags}
         </div>
      </div>
   )
}

// TODO: add "tags" property not just "tag"
function ProblemCard({ title, icon, description }) {
   return (
      <button className="mx-auto flex max-w items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
         <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-o" src={icon} alt="" />
         <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
               <p className="text-lg font-semibold text-black">{title}</p>
               <p className="font-medium text-gray-500">{description}</p>
            </div>
         </div>
      </button>
   )
}

export default Problems;