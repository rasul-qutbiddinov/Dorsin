import React from 'react'
import teamData from '../../data/team.data';
import TeamCard from '../../components/TeamCard';
import Title from '../../components/Title';

function Team() {
  return (
    <section id="team">
      <div className="container">
        <Title
          title="Our Team"
          text="It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {teamData.map((item, index) => (
            <TeamCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team