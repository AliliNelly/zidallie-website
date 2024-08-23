import React from "react";
import { team } from "../../data/about";

function Team() {
  return (
    <section id="our-team" className="my-20 p-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center py-10">Meet The Team</h2>
        <div className="flex flex-wrap items-center justify-evenly gap-8">
          {team.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 my-6 text-center w-60 h-80">
              <img
                src={person.image}
                alt="Team Member 1"
                className="w-full rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
              <p className="text-gray-700 text-sm">{person.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
