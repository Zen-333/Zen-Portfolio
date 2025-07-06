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
        description: `In this project, I developed a fully functional top down RPG in Unreal Engine 5 using C++ and the Gameplay Ability System (GAS).
                    I architected modular multiplayer ready systems including combat, character abilities, AI behavior, XP progression, inventory management, and saving/loading mechanics, all following SOLID principles and clean, scalable code practices.
                    I integrated both C++ and Blueprints to create an optimized, professional gameplay experience, with custom UI, dynamic effects, and responsive input systems.
                    This project demonstrates my ability to build complex, networked gameplay features to AAA standards using Unreal Engine’s most powerful systems.<br><br> 
                    Here is a link to the<a href=\"https://github.com/Zen-333/Git_UE_AuraProject/tree/main/Source/Aura/Public" target=\"_blank\"> Aura Project</a>`,

        interest: `GAS was implemented as the backbone of the combat and ability systems in my project. 
                    I created custom AbilitySystemComponent and AttributeSet classes in C++, allowing me to define core character stats like health, mana, and strength with full network replication. 
                    Abilities were built as modular, data driven assets that triggered gameplay effects and animations through both C++ and Blueprints. 
                    I implemented gameplay tags for state management (e.g., stunned, casting) and used attribute modifiers, effect durations, cooldowns, and costs to balance gameplay. 
                    The system was designed with scalability in mind new abilities could be added with minimal code, and all logic remained consistent across singleplayer and multiplayer sessions thanks to proper replication and prediction handling. 
                    GAS gave me the foundation to create a professional MMO style ability systems with high responsiveness and flexibility<br><br> <img src="Images/Projects/Aura_AbilityGiven.png" class="img-project"> `,

        interestTitle: "GAS Implementation",

        learn: `Through this project, I gained in depth experience with Unreal Engine 5’s Gameplay Ability System (GAS), learning how to build modular, scalable, and network ready gameplay mechanics using C++. 
                    I implemented abilities, attributes, effects, and replication logic from scratch all within the GAS framework. 
                    This strengthened my understanding of Unreal's architecture and taught me how to design gameplay systems that are clean, data driven, and multiplayer compatible. 
                    I also learned how to integrate GAS with animation, UI, and Blueprint scripting, giving me full control over creating complex abilities with professional level performance and flexibility.`,

        video: "Videos/Aura.mp4",

        about: 'Aura is a top down RPG built in Unreal Engine 5 using C++ and the Gameplay Ability System (GAS). ' +
            'It features modular, scalable systems for combat, abilities, AI, and progression, reflecting professional grade gameplay architecture.',

        stats: ["<i class=\"fa-solid fa-code\"></i> C++", "<i class=\"fa-solid fa-user\"></i> 1 Developer", "<i class=\"fa-solid fa-gears\"></i> Unreal Engine", "<i class=\"fa-solid fa-clock\"></i> 6 Months", "<i class=\"fa-solid fa-gamepad\"></i> 3D RPG"]
    },
    RumRunner: {
        title: "Rum Runner Revenge",

        description: `Rum Runner’s Revenge was developed by a team of 11 passionate game developers as part of an academic capstone project. 
                The game was nominated for the TIGER Game Award, a prestigious recognition at Bournemouth University that celebrates outstanding technical and creative achievement in student game development.
                I was primarily responsible for designing and implementing the enemy AI using a custom state machine, enabling responsive and challenging combat behavior. Additionally, I created a physics based collapsing bridge, adding dynamic environmental interaction, and developed an intuitive mini map system to help guide players through the pirate infested world.
                The project showcased our ability to work as a cohesive team, applying professional pipelines and Unity best practices to deliver a polished, engaging 2D action RPG experience.<br><br>
                You can also download and play the game <a href="https://trojanhorse-studio.itch.io/rum-runners-revenge" target=\\"_blank\\">here</a>`,

        interest: `In Rum Runner’s Revenge, I implemented state machines to manage enemy AI behaviors such as patrol, chase, and attack. 
                Each enemy transitions smoothly between states based on player proximity and other game events, allowing for responsive and dynamic interactions. 
                The patrol state enables enemies to follow predefined routes, while the chase state activates when the player is detected, increasing engagement intensity. 
                The attack state handles combat mechanics, including timing and hit detection. This structured approach made the AI predictable yet challenging, improving gameplay flow and player experience.<br><br>
                Here is a link to the <a href="https://github.com/GameStudioProject/Rum-Runners-Revenge/tree/MAIN-BACKUP-DO-NOT-COMMIT-TO-THIS/Assets/_SCRIPTS/Enemy%20Scripts/Enemies/E3_Crab" target=\\\\"_blank\\\\">enemy scrips</a>`,

        interestTitle: "State Machines",

        learn: `Working on Rum Runner’s Revenge taught me invaluable lessons in effective teamwork and communication within a large development group. 
                Coordinating with 10 other developers required clear and consistent collaboration to align our goals, manage tasks, and integrate our systems smoothly. 
                I gained experience using version control tools and agile workflows, which helped us stay organized and address challenges quickly. 
                This project reinforced the importance of open communication, flexibility, and mutual support in creating a polished game, and it strengthened my ability to contribute effectively within a diverse team environment.`,

        video: "Videos/GSP.mp4",

        about: 'Rum Runner’s Revenge is a 2D pixel art, pirate themed action RPG where players battle through challenging enemies in a dark, souls like world. ' +
                'Developed in Unity, the game combines retro visuals with stamina based combat and immersive level design.',

        stats: ["<i class=\"fa-solid fa-code\"></i> C#", "<i class=\"fa-solid fa-user\"></i> 11 Developers", "<i class=\"fa-solid fa-gears\"></i> Unity", "<i class=\"fa-solid fa-clock\"></i> 3 Months", "<i class=\"fa-solid fa-gamepad\"></i> 2D RPG"]
    },
    KitchenChaos: {
        title: "Kitchen Chaos",
        description: `This project is a fast paced cooking game developed in Unity, inspired by the "Overcooked" style gameplay. 
                    The goal was to create a complete, polished game loop from scratch within a short timeframe, focusing on clean architecture and gameplay systems. 
                    I implemented core features such as object interactions, customer orders, recipe management, and a responsive UI all structured with clear separation of responsibilities. 
                    This project served as a deep dive into Unity’s event driven programming, ScriptableObjects for data driven design, and scene organization for rapid iteration. 
                    It was an excellent opportunity to apply professional level game structure principles while delivering a playable and visually appealing prototype.`,

        interest: `The character system in the game is built around smooth, responsive controls that allow the player to navigate the kitchen efficiently and interact with various objects. 
                    I implemented a modular interaction system where the player can pick up, drop, combine, and process ingredients based on context sensitive actions. 
                    Each interactable object such as counters, plates, chopping boards, and cooking stations is designed with its own logic, but all share a unified interface to simplify player interaction. 
                    The system uses raycasting and input driven events to detect nearby interactables, ensuring intuitive behavior and minimal player friction. 
                    These mechanics are central to the gameplay loop, reinforcing time management, coordination, and spatial awareness in a dynamic kitchen environment.`,

        interestTitle: "Character Interactions",

        learn: `Through this project, I gained a deeper understanding of clean code architecture and how to structure a scalable gameplay loop around core mechanics. 
        I learned how to manage game state, handle player input efficiently, and create modular systems that can be easily extended or reused. 
        Implementing systems like timed cooking, ingredient processing, and recipe validation helped me strengthen my grasp of event driven programming and interface based design. 
        I also gained hands on experience with Unity’s physics and animation systems, and refined my ability to write maintainable code while managing interactions between multiple game objects in a fast paced environment.`,

        video: "Videos/Kitchen.mp4",

        about: 'Kitchen Chaos is a fast paced cooking game where players manage recipes, time, and kitchen physics to serve meals efficiently. ' +
            'Built in Unity with custom systems for cooking, interaction, and game flow.',

        stats: ["<i class=\"fa-solid fa-code\"></i> C#", "<i class=\"fa-solid fa-user\"></i> 1 Developer", "<i class=\"fa-solid fa-gears\"></i> Unity", "<i class=\"fa-solid fa-clock\"></i> 3 Months", "<i class=\"fa-solid fa-gamepad\"></i> 3D Arcade"]
    }
};

function openProject(projectKey) {
    const panel = document.getElementById("project-panel");
    const data = projects[projectKey];

    document.getElementById("panel-title").textContent = data.title;
    document.getElementById("panel-paragraph-intro").innerHTML = data.description;
    document.getElementById("panel-paragraph-interest").innerHTML = data.interest;
    document.getElementById("panel-paragraph-learn").textContent = data.learn;
    document.getElementById("panel-title-interest").textContent = data.interestTitle;
    document.getElementById("panel-about").textContent = data.about;
    document.getElementById("panel-video").innerHTML = `
    <video controls>
      <source src="${data.video}" type="video/mp4">
    </video>
  `;

    const statsHTML = data.stats
        .map(stat => `<p>${stat}</p>`)
        .join("<br>");
    document.getElementById("panel-stats").innerHTML = statsHTML;

    panel.classList.add("active");
}

document.getElementById("close-panel").addEventListener("click", () => {
    document.getElementById("project-panel").classList.remove("active");
});