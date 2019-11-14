export default {
  GRAPHQL_API_PATH: "https://api.github.com/graphql",
  GITHUB_TOKEN: process.env.REACT_APP_GITUHB_API_TOKEN,
  THEMES: {
    lightPurple: {
      name: "light-purple",
      color: "#ac53f2",
      background: "#fff"
    },
    lightGreen: {
      name: "light-green",
      color: "#09c62a",
      background: "#fff"
    },
    darkPurple: {
      name: "dark-purple",
      color: "#ac53f2",
      background: "#000"
    },
    darkGreen: {
      name: "dark-green",
      color: "#09c62a",
      background: "#000"
    }
  } as any,
  DEFAULT_THEME: "lightPurple",
  DEFAULT_SEARCH_RESULTS_AMOUNT: 100
};
