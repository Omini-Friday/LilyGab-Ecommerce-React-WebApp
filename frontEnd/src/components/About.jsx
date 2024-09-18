import React from "react";
import { TbTruckReturn } from "react-icons/tb";
import about from "../assets/about.png";

function About() {
  return (
    <section className="max-padd-container py-12 xl:py-32">
      <div className="flex flex-col xl:flex-row">
        <div className="flex-1">
          <h3 className="h3 capitalize">
            Unveiling Our Product's Key Features!
          </h3>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            nemo ex asperiores inventore vel voluptates voluptate debitis itaque
            aut ullam.
          </p>
          <div className="flex flex-col items-start gap-y-4">
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md">
                <TbTruckReturn className="text-white texxt-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Easy Return Process</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere est, omnis harum officiis nulla placeat?
                </p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md">
                <TbTruckReturn className="text-white texxt-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Secure Payment Option</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere est, omnis harum officiis nulla placeat?
                </p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md">
                <TbTruckReturn className="text-white texxt-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Live Customer Support</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere est, omnis harum officiis nulla placeat?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flexCenter">
          <div>
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
