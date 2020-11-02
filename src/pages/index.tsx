import React from "react";
import styled from "styled-components";
import { experienceData, expertiseData } from "../models/cv";

const PageWrapper = styled.div`
  margin: 0 auto;
  padding: 12px;
  color: ${(p) => p.theme.base};
  h2,
  h3,
  p {
    margin: 0;
    margin-top: 0.4em;
  }
  h2 {
    font-weight: 100;
    text-transform: uppercase;
    color: ${(p) => p.theme.darkAccent};
  }
  h3 {
    color: ${(p) => p.theme.accent};
  }
  .bold {
    font-weight: bold;
  }
  .expertise {
    .flex {
      display: flex;
      flex-wrap: wrap;
      .f-child {
        flex: 0 0 50%;
      }
    }
  }
  section {
    margin-top: 1.5em;
  }
  .exp {
    margin-top: 0.5em;
    .company-lvl {
      padding-bottom: 0.5em;
      padding-left: 2.5em;
      position: relative;
      .role + .role {
        margin-top: 0.5em;
      }
      h3 {
        margin: 0;
      }
      &:before {
        content: "";
        display: block;
        position: absolute;
        width: 1px;
        border-left: 1px solid ${(p) => p.theme.darkAccent};
        top: 0;
        left: calc(0.5em + 2px);
        height: 100%;
      }
      &:after {
        content: "";
        position: absolute;
        display: block;
        background: #fff;
        width: 1em;
        height: 1em;
        border: 2px solid ${(p) => p.theme.accent};
        border-radius: 50%;
        left: 0;
        top: 0;
      }
    }
  }
  @media print {
    font-size: 9pt;
    width: 15cm;
  }
  @media screen {
    max-width: 800px;
  }
  @media screen and (max-width: 767px) {
    .expertise {
      .flex {
        .f-child {
          flex: 0 0 100%;
        }
      }
    }
  }
`;

const Page = () => {
  return (
    <PageWrapper>
      <section className="intro">
        <p>
          A certified AWS Cloud practitioner with expertise in various
          programming lingo, frameworks and tools. I integrate beautiful designs
          and strings of code, whilst continue looking for the most efficient
          and productive approach to my work.
        </p>
      </section>
      <section className="expertise">
        <h2>Expertise</h2>
        <div className="flex">
          {expertiseData.map((e) => {
            return (
              <div className="f-child" key={e.title}>
                <h3>{e.title}</h3>
                <div className="content">{e.content}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="education">
        <h2>Education</h2>
        <h3>Tarumanagara University (Jakarta, Indonesia)</h3>
        <p>2001 - 2005</p>
        <p className="bold">
          Bachelor of Arts in Visual Communication &amp; Design
        </p>
        <p>GPA: 3.18</p>
      </section>
      <section className="certification">
        <h2>Certification</h2>
        <h3>AWS Cloud Practitioner</h3>
        <p>Attained in 11 August 2020</p>
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <div className="exp">
          {experienceData.map((e) => {
            return (
              <React.Fragment key={e.company}>
                <div className="company-lvl">
                  {e.roles.map((role) => {
                    return (
                      <div className="role" key={role.period}>
                        <h3>{role.name}</h3>
                        <p className="bold">
                          {e.company} | {role.period}
                        </p>
                        <p>{role.description}</p>
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Page;
