import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div
      className={clsx("hero shadow--lw", styles.heroBanner)}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <div
        className="container "
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src="img/seno.png"
          style={{ objectFit: "contain", translate: "10% 0" }}
          width={180}
        />
        <p style={{ fontSize: "1.5rem", marginBottom: "0", marginTop: "1rem" }}>
          Hi, my name is
        </p>
        <h1 className="hero__title text--primary ">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          className={styles.buttons}
          style={{ display: "flex", gap: "1rem" }}
        >
          <Link className="button button--secondary button--lg" to="/blog">
            Blog
          </Link>
          <Link className="button button--secondary button--lg" to="/docs">
            Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://seno-dev.com"
          >
            Portfolio Website
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
