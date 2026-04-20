var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

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

// test

function openMenu()
{
    sidemenu.style.right = "0";
}

function closeMenu()
{
    sidemenu.style.right = "-200px";
}


const projects = {
    ArcadeEngine: {
        title: "2D Arcade Game Engine",

        description: `The 2D Arcade Game Engine is a custom game engine and game collection built entirely in C++ using SDL2, developed from scratch without relying on any existing engine framework.
        The engine includes a full rendering pipeline built on a custom ScreenBuffer with per-pixel alpha blending, a modular shape library covering rectangles, circles, lines, triangles, and stars, and a complete input system driven by an event-based GameController architecture.<br><br>
        Currently shipping two fully playable games: Breakout, featuring multi-level loading from a custom file format, physics-based ball and paddle collision, and a high score system — and Tetris, featuring all 7 tetrominoes with full rotation logic, a ghost piece, DAS (Delayed Auto Shift) input handling, and recursive line clearing.<br><br>
        The project was built with the explicit goal of understanding how game engines work at a fundamental level — every system that a commercial engine provides for free, this engine implements manually.`,

        interest: `The most technically significant system in the engine is the shape dispatch architecture inside <code>TetrisShapes</code>. Rather than using a switch statement or virtual functions to construct each tetromino, I implemented a static <code>unordered_map</code> keyed by enum that stores member function pointers — <code>void (TetrisShapes::*)()</code> — which are resolved and called at runtime.<br><br>
        This means adding a new shape requires only defining its construction function and registering it in the map. No conditional branching, no changes to existing code. The pattern is closed for modification and open for extension, a direct application of the Open/Closed Principle using advanced C++ type system features most junior developers never encounter.<br><br>
        The second major system is the <code>Excluder</code> class, which underpins all collision detection in the engine. Excluder stores four pre-computed boundary edges with outward normals, and uses axis-aligned intersection math to determine both which edge was hit and the magnitude of penetration. Both the Breakout blocks and the Tetris boundary inherit from Excluder, meaning the same collision logic handles fundamentally different gameplay contexts without modification.<br><br>
        <img src="Images/Projects/ArcadeEngine_ShapeMap.png" class="openGL-img">`,

        interestTitle: "Pointer Dispatch & Collision Architecture",

        learn: `Building this engine from scratch gave me a genuinely different perspective on game development. Every feature I now take for granted in Unreal or Unity — input routing, frame timing, pixel rendering, collision normals — I had to implement and debug myself.<br><br>
        The most important lesson was the cost of architectural decisions made early. The <code>Excluder</code> collision system only works cleanly because I designed it to be inherited from the start. Had I written collision directly into the Ball or Block classes, sharing it across the engine would have required a rewrite.<br><br>
        Working at the pixel level through the <code>ScreenBuffer</code> and implementing per-pixel alpha blending using the one-minus-source-alpha formula also gave me a concrete understanding of how transparency compositing actually works — something I previously only understood abstractly.`,

        video: "Videos/ArcadeEngine.mp4",

        about: `A custom 2D game engine and game collection built in C++ and SDL2 from scratch, featuring a pixel-level rendering pipeline, modular collision architecture, and two fully playable games — Breakout and Tetris — each with complete game loops, scoring, and level systems.`,

        stats: [
            "<i class=\"fa-solid fa-code\"></i> C++",
            "<i class=\"fa-solid fa-user\"></i> 1 Developer",
            "<i class=\"fa-solid fa-gears\"></i> SDL2",
            "<i class=\"fa-solid fa-clock\"></i> Sept 2025 - Ongoing",
            "<i class=\"fa-solid fa-gamepad\"></i> Custom Engine"
        ]
    },

    RumRunner: {
        title: "Rum Runner Revenge",

        description: `Rum Runner’s Revenge was developed by a team of 11 passionate game developers as part of an academic capstone project. 
                The game was nominated for the TIGER Game Award, a prestigious recognition at Bournemouth University that celebrates outstanding technical and creative achievement in student game development.
                I was primarily responsible for designing and implementing the enemy AI using a custom state machine, enabling responsive and challenging combat behavior.<br><br> Additionally, I created a physics based collapsing bridge, adding dynamic environmental interaction, and developed an intuitive mini map system to help guide players through the pirate infested world.
                The project showcased our ability to work as a cohesive team, applying professional pipelines and Unity best practices to deliver a polished, engaging 2D action RPG experience.<br><br>
                You can download and play the game <a href="https://trojanhorse-studio.itch.io/rum-runners-revenge" target=\\"_blank\\">here.</a><br>
                You can also download the <a href="Files/Technical_Design_Document.pdf" download >technical design document.</a>`,

        interest: `In Rum Runner’s Revenge, I implemented state machines to manage enemy AI behaviors such as patrol, chase, and attack. 
                Each enemy transitions smoothly between states based on player proximity and other game events, allowing for responsive and dynamic interactions.<br><br> 
                The patrol state enables enemies to follow predefined routes, while the chase state activates when the player is detected, increasing engagement intensity. 
                The attack state handles combat mechanics, including timing and hit detection. This structured approach made the AI predictable yet challenging, improving gameplay flow and player experience.<br><br>
                Here is a link to the <a href="https://github.com/GameStudioProject/Rum-Runners-Revenge/tree/MAIN-BACKUP-DO-NOT-COMMIT-TO-THIS/Assets/_SCRIPTS/Enemy%20Scripts/Enemies/E3_Crab" target=\\\\"_blank\\\\">enemy scrips</a>`,

        interestTitle: "State Machines",

        learn: `Working on Rum Runner’s Revenge taught me invaluable lessons in effective teamwork and communication within a large development group. 
                Coordinating with 10 other developers required clear and consistent collaboration to align our goals, manage tasks, and integrate our systems smoothly.<br><br> 
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
                    I implemented core features such as object interactions, customer orders, recipe management, and a responsive UI all structured with clear separation of responsibilities.<br><br> 
                    This project served as a deep dive into Unity’s event driven programming, ScriptableObjects for data driven design, and scene organization for rapid iteration. 
                    It was an excellent opportunity to apply professional level game structure principles while delivering a playable and visually appealing prototype.`,

        interest: `The character system in the game is built around smooth, responsive controls that allow the player to navigate the kitchen efficiently and interact with various objects. 
                    I implemented a modular interaction system where the player can pick up, drop, combine, and process ingredients based on context sensitive actions.<br><br> 
                    Each interactable object such as counters, plates, chopping boards, and cooking stations is designed with its own logic, but all share a unified interface to simplify player interaction. 
                    The system uses raycasting and input driven events to detect nearby interactables, ensuring intuitive behavior and minimal player friction. 
                    These mechanics are central to the gameplay loop, reinforcing time management, coordination, and spatial awareness in a dynamic kitchen environment.<br><br>
                    <img src="Images/Projects/Kitchen_Movement.png" class="img-project"> `,

        interestTitle: "Character Interactions",

        learn: `Through this project, I gained a deeper understanding of clean code architecture and how to structure a scalable gameplay loop around core mechanics. 
        I learned how to manage game state, handle player input efficiently, and create modular systems that can be easily extended or reused.<br><br> 
        Implementing systems like timed cooking, ingredient processing, and recipe validation helped me strengthen my grasp of event driven programming and interface based design. 
        I also gained hands on experience with Unity’s physics and animation systems, and refined my ability to write maintainable code while managing interactions between multiple game objects in a fast paced environment.`,

        video: "Videos/Kitchen.mp4",

        about: 'Kitchen Chaos is a fast paced cooking game where players manage recipes, time, and kitchen physics to serve meals efficiently. ' +
            'Built in Unity with custom systems for cooking, interaction, and game flow.',

        stats: ["<i class=\"fa-solid fa-code\"></i> C#", "<i class=\"fa-solid fa-user\"></i> 1 Developer", "<i class=\"fa-solid fa-gears\"></i> Unity", "<i class=\"fa-solid fa-clock\"></i> 3 Months", "<i class=\"fa-solid fa-gamepad\"></i> 3D Arcade"]
    },

    CurrentProject: {
        title: "Dungeon Slayer",
        description: `Dungeon Slayer is a wave based Action RPG built in Unreal Engine 5, utilizing the Gameplay Ability System (GAS) from the ground up. 
        Set in a medieval dungeon, players fight through waves of enemies using a sword, bow, and shield. 
        The game is developed using C++ with Blueprint integration, and Rider is used as the primary IDE. 
        Core systems include modular combat abilities, enemy wave management, and input driven weapon switching. 
        The project is planned for release on Steam, and a YouTube devlog series is in the works to document the full development journey.`,

        interest: ` I implemented a flexible input system using Unreal Engine 5's Enhanced Input framework integrated with the Gameplay Ability System (GAS). 
        Inputs are defined through a custom UDungeonInputConfig data asset, which maps input actions to gameplay tags. 
        These mappings are bound dynamically at runtime using a custom UDungeonEnhancedInputComponent, which handles input events like Pressed, Released, and Held.<br><br>
        This setup allows for clean separation of input logic and gameplay behavior, making the system modular and easy to extend.
        When an input event is triggered, the corresponding gameplay tag is passed to the UDungeonAbilitySystemComponent. 
        This component filters available abilities based on the current weapon or shield and checks for tag matches using the ability's dynamic source tags.<br><br>
        If a match is found, the ability is activated and replicated appropriately. 
        This tag driven approach enables context aware input handling and supports designer driven workflows, reducing coupling and improving scalability for future content.<br><br>
        <img src="Images/Projects/Current_EIC.png" class="openGL-img"> <img src="Images/Projects/Current_GASI.png" class="openGL-img">`,

        interestTitle: "Inputs & Ability binding",

        learn: `While developing Dungeon Slayer, I am continuously learning new skills from animation setup to building the equipment and damage systems using Unreal Engine 5 and GAS(Game play ability system). 
        Each part helped me better understand gameplay programming and engine features.
        I also focused on writing clean, efficient, and modular C++ code, balancing performance with readability. 
        This project has strengthened my ability to create scalable systems and maintain good coding practices.`,

        video: "Videos/DungeonSlayer.mp4",

        about: 'Dungeon Slayer is a wave based medieval action game built in Unreal Engine 5 using the Gameplay Ability System.' +
        'Players explore a dark dungeon, battling enemy waves with a sword, bow, and shield. Developed with C++ and Blueprints, the game offers dynamic combat and a scalable, modular design.',

        stats: ["<i class=\"fa-solid fa-code\"></i> C++", "<i class=\"fa-solid fa-user\"></i> 1 Developer", "<i class=\"fa-solid fa-gears\"></i> Unreal Engine 5", "<i class=\"fa-solid fa-clock\"></i> Current", "<i class=\"fa-solid fa-gamepad\"></i> Action RPG "]
    }
};

function openProject(projectKey) {
    const panel = document.getElementById("project-panel");
    const data = projects[projectKey];

    document.getElementById("panel-title").textContent = data.title;
    document.getElementById("panel-paragraph-intro").innerHTML = data.description;
    document.getElementById("panel-paragraph-interest").innerHTML = data.interest;
    document.getElementById("panel-paragraph-learn").innerHTML = data.learn;
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

