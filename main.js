const form = document.querySelector('#repo-search');

const getRepoQuery = (userInput) => `
query { 
  user(login: "${userInput}") {
    name
    login
    avatarUrl
    bio
    status {
      message
    }
    email
    websiteUrl
    followers {
      totalCount
    }
    following {
      totalCount
    }
    starredRepositories {
      totalCount
    }
    repositories(first: 20) {
      totalCount
      nodes {
        name
        forkCount
        primaryLanguage {
          name
          color
        }
        updatedAt
        licenseInfo {
          name
        }
      }
    }
  }
}
`;

const loadRepo = (e) => {
  e.preventDefault();
  let userInput = document.querySelector('.user-input').value;
  console.log(userInput);

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${githubToken}`,
    },
    body: JSON.stringify({
      query: getRepoQuery(userInput),
    }),
  };

  fetch(`https://api.github.com/graphql`, options)
    .then((response) => {
      if (!response.ok || userInput === '') {
        alert('query not successful');
      } else {
        setTimeout(() => {
          window.location.href = 'repo.html';
        }, 1000);
        return response.json();
      }
    })
    .then((data) => {
      window.localStorage.setItem('user', JSON.stringify(data));
    })
    .catch((error) => console.error('no be so', error));
};

form.addEventListener('submit', loadRepo);
