
function createDiv(content) {
  const newDiv = document.createElement('div');
  newDiv.textContent = content;
  return newDiv;
}

const contentArray = [
  {
    title: "iOS Development",
    description: "რეგისტრაცია დასრულებულია",
    imageUrl: "assets/img/Ios_Development.jpg",
    linkUrl: "https://www.tbcacademy.ge/usaid/ios-development"
  },
  {
    title: "React",
    description: "რეგისტრაცია დასრულებულია",
    imageUrl: "assets/img/React.jpg",
    linkUrl: "https://www.tbcacademy.ge/usaid/react"
  },
  {
    title: "Intro to Python",
    description: "რეგისტრაცია დასრულებულია",
    imageUrl: "assets/img/Python.jpg",
    linkUrl: "https://www.tbcacademy.ge/usaid/python-basic"
  },
  {
    title: "RAdvanced Python",
    description: "რეგისტრაცია დასრულებულია",
    imageUrl: "assets/img/Advanced_Python.jpg",
    linkUrl: "https://www.tbcacademy.ge/usaid/python-advance"
  },
  {
    title: "Advanced Cybersecurity Course",
    description: "რეგისტრაცია დასრულებულია",
    imageUrl: "assets/img/Advanced_Cybersecurity_Course.jpg",
    linkUrl: "https://www.tbcacademy.ge/usaid/information-security-advance"
  },
  {
    title: "ToT - Training of Trainers",
    description: "რეგისტრაცია დასრულებულია",
    imageUrl: "assets/img/ToT.jpg",
    linkUrl: "https://www.tbcacademy.ge/usaid/training-of-trainers"
  },
  {
    title: "Blockchain",
    description: "რეგისტრაცია დასრულებულია",
    imageUrl: "assets/img/Blockchain.jpg",
    linkUrl: "https://www.tbcacademy.ge/usaid/blockchain"
  },
  {
    title: "DevOps",
    description: "რეგისტრაცია დასრულებულია",
    imageUrl: "assets/img/DevOps.jpg",
    linkUrl: "https://www.tbcacademy.ge/usaid/devops"
  },
  {
    title: "Information Security Governance",
    description: "რეგისტრაცია დასრულებულია",
    imageUrl: "assets/img/Information_Security_Governance.jpg",
    linkUrl: "#ttps://www.tbcacademy.ge/usaid/information-security-basic"
  }
];


function fillContainer() {
  const container = document.getElementById('container');

  contentArray.forEach(item => {
  
    const newDiv = document.createElement('div');
    newDiv.className = 'grid-item';

    const image = document.createElement('img');
    image.src = item.imageUrl;
    newDiv.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = item.title;
    newDiv.appendChild(title);

    const description = document.createElement('p');
    description.textContent = item.description;
    newDiv.appendChild(description);


    const link = document.createElement('a');
    link.href = item.linkUrl;
    link.textContent = '\u2192 კურსის დეტალები';
    newDiv.appendChild(link);

    container.appendChild(newDiv);
  });
}


fillContainer();