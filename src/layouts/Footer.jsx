
const gitHubRepoUrl = "https://jsohndata.github.io/particle-fireworks/";
const getFullYear = new Date().getFullYear();

export default function Footer() {

  return(
    <footer>
      <p>&copy; {getFullYear}</p>
      <p>{gitHubRepoUrl}</p>
    </footer>
    );
  };