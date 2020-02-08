const client_id = "9fcfc5e0f1ac3943bdf5c75bef";
const client_secret = "3fe15592a5876cca275d5018c95873bba8f5805b";
this.repos_sort = 'created: asc';
document.getElementById("searchUser").addEventListener("keyup", getData);

async function getData(e){
  console.log(e.target.value)
  if (e.target.value!= ""){
    const profile=await fetch(
      `https://api.github.com/users/${e.target.value}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposit = await fetch(
      `https://api.github.com/users/${e.target.value}/repos?per_page=${5}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const data = await profile.json();
    const repos = await reposit.json();

    document.getElementById("img").innerHTML = `<img src="${data.avatar_url}" width="250px"  />
    <a href="${data.html_url}>More Detail</a>`;
    document.getElementById("dtl").innerHTML = ` 
    <span class="badge badge-primary">Public Repos: ${data.public_repos}</span>
               <span class="badge badge-secondary">Public Gists: ${data.public_gists}</span>
               <span class="badge badge-success">Followers: ${data.followers}</span>
            <span class="badge badge-info">Following: ${data.following}</span> `;

        document.getElementById("detail").innerHTML = `<ul class="list-group mt-4">
  <li>Name : ${data.name}</li>
  <li >Company : ${data.company}</li>
  <li >Blog: ${data.blog}</li>
  <li >Location : ${data.location}</li>
  <li>Member Since : ${data.created_at}</li>
</ul>`;

repos.forEach(function(repo) {
  output += `
      
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repos.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
          <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success">Forks: ${repo.forms_count}</span>
          </div>
        </div>
      </div>
     
    `;
});

document.getElementById("rep").innerHTML = `${output}</ul>`;
} 
else
 {
document.getElementById("img").innerHTML = "";
document.getElementById("dtl").innerHTML = "";
document.getElementById("detail").innerHTML = "";
document.getElementById("rep").innerHTML = "";
}
}

  
