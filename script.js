var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const projects = {
    Aura: {
        title: "Aura",
        description: `I developed a top-down RPG in Unreal using C++ & GAS. Multiplayer systems, modular design, UI, AI, abilities, saving/loading, and more.`,
        interest: `I developed a top-down RPG in Unreal using C++ & GAS. Multiplayer systems, modular design, UI, AI, abilities, saving/loading, and more.`,
        learn: `I developed a top-down RPG in Unreal using C++ & GAS. Multiplayer systems, modular design, UI, AI, abilities, saving/loading, and more.`,
        video: "Videos/Aura.mp4",
        stats: ["C++", "1 Developer", "Unreal Engine", "6 Months", "3D RPG"]
    },
    RumRunner: {
        title: "Rum Runner Revenge",
        description: `In a team of 11, I built enemy AI, state machines, the game map, and a custom physics-based bridge.`,
        interest: `I developed a top-down RPG in Unreal using C++ & GAS. Multiplayer systems, modular design, UI, AI, abilities, saving/loading, and more.`,
        learn: `I developed a top-down RPG in Unreal using C++ & GAS. Multiplayer systems, modular design, UI, AI, abilities, saving/loading, and more.`,
        video: "Videos/GSP.mp4",
        stats: ["C#", "11 Developers", "Unity", "3 Months", "2D RPG"]
    },
    KitchenChaos: {
        title: "Kitchen Chaos",
        description: `Built cooking state machines, custom physics without rigidbodies, scriptable object recipes, timing systems, and UI.`,
        interest: `I developed a top-down RPG in Unreal using C++ & GAS. Multiplayer systems, modular design, UI, AI, abilities, saving/loading, and more.`,
        learn: `I developed a top-down RPG in Unreal using C++ & GAS. Multiplayer systems, modular design, UI, AI, abilities, saving/loading, and more.`,
        video: "Videos/Kitchen.mp4",
        stats: ["C#", "1 Developer", "Unity", "3 Months", "3D Arcade"]
    }
};

function openProject(projectKey) {
    const panel = document.getElementById("project-panel");
    const data = projects[projectKey];

    document.getElementById("panel-title").textContent = data.title;
    document.getElementById("panel-paragraph-intro").textContent = data.description;
    document.getElementById("panel-paragraph-interest").textContent = data.interest;
    document.getElementById("panel-paragraph-learn").textContent = data.learn;
    document.getElementById("panel-video").innerHTML = `
    <video controls>
      <source src="${data.video}" type="video/mp4">
    </video>
  `;

    const statsHTML = data.stats
        .map(stat => `<p><i class="fa-solid fa-circle-info"></i> ${stat}</p>`)
        .join("<br>");
    document.getElementById("panel-stats").innerHTML = statsHTML;

    panel.classList.add("active");
}

document.getElementById("close-panel").addEventListener("click", () => {
    document.getElementById("project-panel").classList.remove("active");
});