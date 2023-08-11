import React from 'react'

function TeamCard({item}) {
  return (
    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
      <div className="text-center space-y-3">
        <img alt="" src={item.image} className="rounded" />
        <div className="dark:text-white">
          <a href="{page-profile.html}">{item.name}</a>
        </div>
        <div className="text-sm uppercase text-gray-400 dark:text-gray-300/60">
         {item.job}
        </div>
        <div className="border-b dark:border-zinc-700/50" />
      </div>
    </div>
  );
}

export default TeamCard