import Link from "next/link";
import Layout from "../layouts/default";

export default () => (
  <>
    <style jsx>{`
      .About-photo {
        width: 200px;
        margin: 0 auto;
        display: block;
      }

      .About-container dt {
        font-weight: bold;
        margin: 1em 0;
      }
      .About-container dd {
        margin: 0;
      }

      @media (min-width: 768px) {
        .About-photo {
          float: right;
        }
        .About-container {
          display: flex;
        }
        .About-container-primary {
          flex: 1;
        }
        .About-container-secondary {
          flex: 3;
        }
        .About-container > *:nth-child(2) {
          padding-left: 2em;
        }
      }
    `}</style>
    <Layout>
      <div className="About-container">
        <div className="About-container-secondary">
          <h1>Rafael Boog</h1>
          <b>Circular Circus Clown CCC</b>
          <p>
            The front-end is important. It is the surface between user and API,
            between content and search engine, between impression and brand.
          </p>
          <p>
            I develop compelling, usable experiences spanning these divides.
          </p>
        </div>

        <div className="About-container-primary">
          <img className="About-photo" src="/static/Rafael_bearbeitet.jpg" />
        </div>
      </div>
      <div className="About-container">
        <div className="About-container-primary">
          <dl>
            <dt>Location</dt>
            <dd>Vienna</dd>
          </dl>
          <dl>
            <dt>Technologies</dt>
            <dd>
              JavaScript, Node.js, React, TypeScript, GraphQL, Functional
              Programming.
            </dd>
          </dl>
          <dl>
            <dt>Nationality</dt>
            <dd>Canadian/Austrian</dd>
          </dl>
          <dl>
            <dt>Languages</dt>
            <dd>
              <ul>
                <li>English: Native Speaker</li>
                <li>German: Fluent</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Other Interests</dt>
            <dd>Techno, Automation, Altruism</dd>
          </dl>
        </div>
        <div className="About-container-secondary">
          <h2>Work Experience</h2>
          <p>
            Here is a medium paragraph. Income established fall taxpayer economy
            inverse market exposure. Term market index IRA taxpayer municipal
            bonds. Stocks credit potential upswing value rise money.
          </p>
          <h3>Frontend Architect</h3>
          <b>kununu GmbH</b>
          <p>Dec 2013 - Apr 2017</p>
          <p>
            Here is a paragraph. Term market index IRA taxpayer municipal bonds.
          </p>
          <ul>
            <li>
              Performance capitalization expenses holder bull strategy
              substantially 401k bondholders credit.
            </li>
            <li>Managed Standard & Poor's yield.</li>
            <li>Treasury Nikkei taxpayer index funds fall rates downturn.</li>
          </ul>
          <h3>Frontend Engineer</h3>
          <b>wollzelle</b>
          <p>Dec 2011 - Dec 2013</p>
          <p>
            Here is a longer paragraph. Income established fall taxpayer economy
            inverse market exposure. Term market index IRA taxpayer municipal
            bonds.
          </p>
          <ul>
            <li>Treasury Nikkei taxpayer index funds fall rates downturn.</li>
            <li>
              Income established fall taxpayer economy inverse market exposure.
            </li>
            <li>Managed Standard & Poor's yield.</li>
          </ul>
        </div>
      </div>
    </Layout>
  </>
);
