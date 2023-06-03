import styles from "./About.module.css";

export default function About() {
  const keyRequirements = [
    "Next.js",
    "NextAuth.js",
    "ReactRedux",
    "TypeScript",
    "Eslint",
    "Prettier",
    "Material U.I.",
    "Styled-Component",
    "react-window",
    "Dummy Json",
  ];

  const implemented = [
    {
      met: "Next.Js",
      implementation: "Learned Next.Js and used it to create a React app.",
    },
    {
      met: "TypeScript",
      implementation:
        "Learned TypeScript and tried to implement it on the app.",
    },
    {
      met: "react-window",
      implementation:
        "Learned react-window, react-window-infinite-loader, react-virtualized-auto-sizer and used it to render data from Dummy JSON.",
    },
    {
      met: "Eslint & Prettier",
      implementation: `Used for "Linting" / format the code to make it more readable. \n Familiar since I've been using it before on my other projects.`,
    },
    {
      met: "Dummy Json",
      implementation: `Used as a mock backend server for fetching product data. \n Familiar since I've been using it before on my other projects.`,
    },
  ];

  return (
    <main className={styles.main}>
      <h1>Project SK E-com</h1>
      <p>This project was created for SK Innovate Group</p>

      <h2 className={styles.h2}>Key Requirements:</h2>
      <ul className={styles.ul}>
        {keyRequirements.map((requirements) => {
          return (
            <li className={styles.li} key={requirements}>
              {requirements}
            </li>
          );
        })}
      </ul>

      <h2 className={styles.h2}>Implemented:</h2>
      <ul className={styles.ul}>
        {implemented.map((requirements) => {
          return (
            <li className={styles.li} key={requirements.met}>
              <p>{requirements.met}</p>
              <p>&nbsp; &nbsp;{requirements.implementation}</p>
            </li>
          );
        })}
      </ul>
      <p className={styles.pLink}>
        Link to the &nbsp;
        <a className={styles.a} href="https://github.com/RhazzXIX/sk-ecommerce">
          code
        </a>
      </p>
    </main>
  );
}
