
const getRepoQuery = (userInput) => `
query { 
  user(login: "${userInput}") {
    name
    avatarUrl
    bio
    followers {
      totalCount
    }
    following {
      totalCount
    }
    repositories(first: 20) {
      totalCount
      nodes {
        name
        forkCount
        primaryLanguage {
          name
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

const renderRepo = ({ data }) => {
  console.log('nice one', data);

  const repoPage = document.querySelector('.repo-page');
  window.onload = () => {
    repoPage.innerHTML = `
      <div class='container'>
        <div class="profile-main">
          <div class="profile-photo">
            <img src="images/eric-cartman.jpg" alt="profile" />
          </div>
          <div class="profile-username"><h2>sambabib</h2></div>
        </div>
      </div>
    `;
    console.log(repoPage);
  };
};

const loadRepo = (e) => {
  e.preventDefault();
  let userInput = document.querySelector('.user-input').value;
  console.log(userInput);

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer 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',
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
        }, 8000);
        return response.json();
      }
    })
    .then(renderRepo)
    // console.log('na so', data);
    .catch((error) => console.error('no be so', error));
};

window.onload = () => {
  const form = document.querySelector('#repo-search');
  form.addEventListener('submit', loadRepo);
};
