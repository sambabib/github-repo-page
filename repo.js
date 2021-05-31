const repoPage = document.querySelector('.repo-page');
let localUser = localStorage.getItem('user');
let parsedUser = JSON.parse(localUser);
console.log(parsedUser);

const testNodes = document.querySelector('.repo-nodes');
let repoNodes = parsedUser.data.user.repositories.nodes;

// const months = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec',
// ];

let myDate = new Date(`${parsedUser.data.user.repositories.nodes.updatedAt}`),
    month = myDate.getMonth();
    date = myDate.getDate();
    day = myDate.getDay();

console.log(myDate)

window.onload = () => {
  repoPage.innerHTML = `
        <div class="container">
            <div class="left-side-bio">
                <div class="profile-main">
                    <div class="profile-photo">
                        <img src=${parsedUser.data.user.avatarUrl} alt="profile" />
                    </div>
                    <div class="profile-username">
                        <h1>${parsedUser.data.user.name}</h1>
                        <h2>${parsedUser.data.user.login}</h2>
                    </div>
                </div>
                <div class="status">
                    <img src="images/smiley-face.svg" alt="smiley face">
                </div>
                <div class="bio">
                    <p>
                        ${parsedUser.data.user.bio}
                    </p>
                </div>
                <div class="bio-contact">
                    <p id="bio-email">
                    <span>
                        <svg class="octicon octicon-mail" 
                        viewBox="0 0 16 16" 
                        version="1.1" 
                        width="16" 
                        height="16" 
                        aria-hidden="true"
                        fill="#8b949e"
                        >
                            <path fill-rule="evenodd" 
                            d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z">
                            </path>
                        </svg>
                    </span>
                        ${parsedUser.data.user.email}
                    </p>
                    <p id="bio-url">
                    <span>
                        <svg 
                        aria-hidden="true" 
                        viewBox="0 0 16 16" 
                        version="1.1" 
                        data-view-component="true" 
                        height="16" 
                        width="16" 
                        class="octicon octicon-link"
                        fill="#8b949e"
                        >
                            <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                            </path>
                        </svg>
                    </span>
                        ${parsedUser.data.user.websiteUrl}
                    </p>
                </div>
                <div class="follower-count">
                    <div class="followers">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            version="1.1"
                            data-view-component="true"
                            height="16"
                            width="16"
                            fill="#8b949e"
                            class="octicon octicon-people text-icon-tertiary"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                            ></path>
                        </svg>
                        <p><span>${parsedUser.data.user.followers.totalCount}</span>followers</p>
                    </div>
                    <div class="following">
                        <p><span>${parsedUser.data.user.following.totalCount}</span>following</p>
                    </div>
                    <div class="stars">
                        <img src="images/star.svg" alt="star" />
                        <p><span>${parsedUser.data.user.starredRepositories.totalCount}</span></p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="right-side-repo">
            <div class="nav">
                <div class="nav-items">
                    <div id="overview">
                        <i>
                            <svg 
                            aria-hidden="true" 
                            viewBox="0 0 16 16" 
                            version="1.1" 
                            data-view-component="true" 
                            height="16" 
                            width="16" 
                            class="octicon octicon-book UnderlineNav-octicon hide-sm"
                            fill="#8b949e"
                            >
                                <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z">
                                </path>
                            </svg>
                        </i>
                        <p>Overview</p>
                    </div>
                    <div id="repo">
                        <i>
                            <svg 
                            aria-hidden="true" 
                            viewBox="0 0 16 16" 
                            version="1.1" 
                            data-view-component="true" 
                            height="16" 
                            width="16" 
                            class="octicon octicon-repo UnderlineNav-octicon hide-sm"
                            fill="#c9d1d9"
                            >
                                <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                                </path>
                            </svg>
                        </i>
                        <p id="repo-text">Repositories <span>${parsedUser.data.user.repositories.totalCount}</span><p>
                    </div>
                    <div id="projects">
                        <i>
                            <svg 
                            aria-hidden="true" 
                            viewBox="0 0 16 16" 
                            version="1.1" 
                            data-view-component="true" 
                            height="16" 
                            width="16" 
                            class="octicon octicon-project UnderlineNav-octicon hide-sm"
                            fill="#8b949e"
                            >
                                <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z">
                                </path>
                            </svg>
                        </i>
                        <p>Projects<p>
                    </div>
                    <div id="packages">
                        <i>
                            <svg 
                            aria-hidden="true" 
                            viewBox="0 0 16 16" 
                            version="1.1" 
                            data-view-component="true" 
                            height="16" 
                            width="16" 
                            class="octicon octicon-package UnderlineNav-octicon hide-sm"
                            fill="#8b949e"
                            >
                                <path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>
                            </svg>
                        </i>
                        <p>Packages</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="search-repo">
                    <input type="text" id="text" placeholder="Find a repository..." />
                    <div class="search-filter">
                        <div class="filter search-type">
                            <p>Type</p>
                        </div>
                        <div class="filter search-language">
                            <p>Language</p>
                        </div>
                        <div class="filter search-sort">
                            <p>Sort</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  const showRepoNodes = () => {
    repoNodes.forEach((repoNode) => {
      testNodes.innerHTML += `
            <div class="container">
                <div class="repos">
                    <div class="right-side-list">
                        <div class="repo-details">
                            <div class="repo-name">
                                <h2>${repoNode.name}</h2>
                            </div>
                            <div class="repo-stack-time">
                                <span id="language-color" style="background: ${repoNode.primaryLanguage.color}; border: 1px solid ${repoNode.primaryLanguage.color}"></span>
                                <p>${repoNode.primaryLanguage.name}</p>
                                <p>Updated at ${repoNode.updatedAt}</p>
                            </div>
                        </div>
                        <div class="star-repo">
                            <img src="images/star.svg" alt="star" />
                            <p>Star</p>
                        </div>
                    </div>
                </div>
            </div> 
         `;
    });
  };

  showRepoNodes();
};
