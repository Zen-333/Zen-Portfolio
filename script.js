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

function openMenu()
{
    sidemenu.style.right = "0";
}

function closeMenu()
{
    sidemenu.style.right = "-200px";
}


const projects = {

    // ─────────────────────────────────────────────────────────────────────────
    ArcadeEngine: {
        title: "2D Arcade Game Engine",
        githubUrl: "https://github.com/Zen-333/ArcadeGameEngine",

        description: `The 2D Arcade Game Engine is a custom game engine and game collection built entirely in C++ using SDL2, developed from scratch without relying on any existing engine framework.
        <br><br>
        The engine includes a full rendering pipeline built on a custom ScreenBuffer with per-pixel alpha blending, a modular shape library covering rectangles, circles, lines, triangles, and stars, and a complete input system driven by an event-based GameController architecture.
        <br><br>
        Currently shipping two fully playable games: Breakout, featuring multi-level loading from a custom file format, physics-based ball and paddle collision, and a high score system — and Tetris, featuring all 7 tetrominoes with full rotation logic, a ghost piece, DAS (Delayed Auto Shift) input handling, and recursive line clearing.
        <br><br>
        The project was built with the explicit goal of understanding how game engines work at a fundamental level — every system that a commercial engine provides for free, this engine implements manually.`,

        interest: `The most technically significant system in the engine is the shape dispatch architecture inside <code>TetrisShapes</code>. Rather than using a switch statement or virtual functions to construct each tetromino, I implemented a static <code>unordered_map</code> keyed by enum that stores member function pointers — <code>void (TetrisShapes::*)()</code> — which are resolved and called at runtime.
        <br><br>
        This means adding a new shape requires only defining its construction function and registering it in the map. No conditional branching, no changes to existing code. The pattern is closed for modification and open for extension — a direct application of the Open/Closed Principle using advanced C++ type system features most junior developers never encounter.
        <br><br>
        The second major system is the <code>Excluder</code> class, which underpins all collision detection in the engine. Excluder stores four pre-computed boundary edges with outward normals, and uses axis-aligned intersection math to determine both which edge was hit and the magnitude of penetration. Both the Breakout blocks and the Tetris boundary inherit from Excluder, meaning the same collision logic handles fundamentally different gameplay contexts without modification.
        <br><br>
        <img src="Images/Projects/ArcadeEngine_ShapeMap.png" class="openGL-img">`,

        interestTitle: "Pointer Dispatch & Collision Architecture",

        learn: `Building this engine from scratch gave me a genuinely different perspective on game development. Every feature I now take for granted in Unreal or Unity — input routing, frame timing, pixel rendering, collision normals — I had to implement and debug myself.
        <br><br>
        The most important lesson was the cost of architectural decisions made early. The <code>Excluder</code> collision system only works cleanly because I designed it to be inherited from the start. Had I written collision directly into the Ball or Block classes, sharing it across the engine would have required a complete rewrite.
        <br><br>
        Working at the pixel level through the <code>ScreenBuffer</code> and implementing per-pixel alpha blending using the one-minus-source-alpha formula also gave me a concrete understanding of how transparency compositing actually works — something I previously only understood abstractly.`,

        video: "Videos/ArcadeEngine.mp4",

        about: "A custom 2D game engine and game collection built in C++ and SDL2 from scratch, featuring a pixel-level rendering pipeline, modular collision architecture, and two fully playable games — Breakout and Tetris — each with complete game loops, scoring, and level systems.",

        stats: [
            "<i class='fa-solid fa-code'></i> C++",
            "<i class='fa-solid fa-user'></i> 1 Developer",
            "<i class='fa-solid fa-gears'></i> SDL2",
            "<i class='fa-solid fa-clock'></i> Sep 2025 – Ongoing",
            "<i class='fa-solid fa-gamepad'></i> Custom Engine"
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    RumRunner: {
        title: "Rum Runner's Revenge",
        githubUrl: "https://github.com/GameStudioProject/Rum-Runners-Revenge",

        description: `Rum Runner's Revenge was developed by a team of 11 game developers as part of an academic capstone project at Bournemouth University. The game was nominated for the TIGER Game Award — a prestigious recognition that celebrates outstanding technical and creative achievement in student game development.
        <br><br>
        I was primarily responsible for designing and implementing the enemy AI using a custom finite state machine, enabling responsive and challenging combat behaviour. I also created a physics-based collapsing bridge with trigger-driven destruction logic, and developed an in-game mini-map rendering live player and enemy positions.
        <br><br>
        The project was built using professional pipelines and Unity best practices, shipped in 3 months using Agile sprints and Git version control.
        <br><br>
        You can download and play the game <a href="https://trojanhorse-studio.itch.io/rum-runners-revenge" target="_blank">here</a> or download the <a href="Files/Technical_Design_Document.pdf" download>technical design document</a>.`,

        interest: `I implemented a custom finite state machine to manage enemy AI behaviours — patrol, chase, and attack. Each enemy transitions smoothly between states based on player proximity and game events, allowing for responsive and dynamic interactions.
        <br><br>
        The patrol state enables enemies to follow predefined routes using Unity's NavMesh. The chase state activates when the player enters detection range, increasing engagement intensity. The attack state handles combat mechanics including timing, hit detection, and cooldown logic.
        <br><br>
        This structured approach kept AI behaviour predictable and debuggable while remaining extensible — adding a new state required no changes to existing transition logic.
        <br><br>
        You can view the enemy scripts on <a href="https://github.com/GameStudioProject/Rum-Runners-Revenge/tree/MAIN-BACKUP-DO-NOT-COMMIT-TO-THIS/Assets/_SCRIPTS/Enemy%20Scripts/Enemies/E3_Crab" target="_blank">GitHub here</a>.`,

        interestTitle: "Finite State Machine AI",

        learn: `Working on Rum Runner's Revenge taught me invaluable lessons in teamwork and communication within a large development group. Coordinating with 10 other developers required clear and consistent collaboration to align goals, manage tasks, and integrate systems without conflicts.
        <br><br>
        I gained real experience using Git version control in a team context — managing branches, resolving merge conflicts, and keeping a stable main branch under pressure.
        <br><br>
        This project reinforced the importance of open communication and mutual support, and strengthened my ability to contribute effectively in a diverse team environment under a fixed deadline.`,

        video: "Videos/GSP.mp4",

        about: "Rum Runner's Revenge is a 2D pixel-art pirate action-RPG where players battle through challenging enemies in a dark, souls-like world. Developed in Unity by a team of 11, the game combines retro visuals with stamina-based combat and immersive level design. TIGER Award nominated at Bournemouth University.",

        stats: [
            "<i class='fa-solid fa-code'></i> C#",
            "<i class='fa-solid fa-user'></i> 11 Developers",
            "<i class='fa-solid fa-gears'></i> Unity",
            "<i class='fa-solid fa-clock'></i> Jan – May 2024",
            "<i class='fa-solid fa-gamepad'></i> 2D Action RPG",
            "<i class='fa-solid fa-trophy'></i> TIGER Award Nominated"
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    CurrentProject: {
        title: "Dungeon Slayer",
        githubUrl: null, // Private repo — commercially licensed assets, targeting Steam release

        description: `Dungeon Slayer is a third-person action RPG built in Unreal Engine 5.5 using C++ and the Gameplay Ability System (GAS) from the ground up. Set in a medieval dungeon, players fight through enemies using four distinct weapon types — sword, axe, bow, and shield — each with its own ability-driven combat behaviour.
        <br><br>
        The game is developed entirely in C++ with Blueprint integration, using Rider as the primary IDE. Core systems include a modular weapon architecture built on custom C++ interfaces, a PlayerState-based Ability System Component, a HitstopComponent for per-hit freeze-frame feedback, and destructible environment props with physics simulation and chain-break logic.
        <br><br>
        The repository is private due to commercially licensed assets, but a video demo is available above. The project is planned for release on Steam.`,

        interest: `I implemented a flexible input system using Unreal Engine 5's Enhanced Input framework integrated with the Gameplay Ability System (GAS). Inputs are defined through a custom <code>UDungeonInputConfig</code> data asset, which maps input actions to gameplay tags. These mappings are bound dynamically at runtime using a custom <code>UDungeonEnhancedInputComponent</code>, which handles input events like Pressed, Released, and Held.
        <br><br>
        This setup allows for clean separation of input logic and gameplay behaviour, making the system modular and easy to extend. When an input event is triggered, the corresponding gameplay tag is passed to the <code>UDungeonAbilitySystemComponent</code>. This component filters available abilities based on the current weapon or shield and checks for tag matches using the ability's dynamic source tags.
        <br><br>
        If a match is found, the ability is activated appropriately. This tag-driven approach enables context-aware input handling and supports designer-driven workflows, reducing coupling and improving scalability for future content.
        <br><br>
        <img src="Images/Projects/Current_EIC.png" class="openGL-img">
        <img src="Images/Projects/Current_GASI.png" class="openGL-img">`,

        interestTitle: "Input & Ability Binding via GAS",

        learn: `Developing Dungeon Slayer has continuously deepened my understanding of Unreal Engine's architecture — from animation montage setup and blend spaces to building the equipment and damage pipeline using GAS.
        <br><br>
        The most important habit this project has built is debugging at the engine level rather than the feature level. When a physics sinking bug appeared — caused by an additive animation using the wrong reference frame — I had to understand why the engine behaved that way rather than just patching the symptom. Similarly, diagnosing TAA shimmer on a dynamic cable-attached lamp required understanding how Unreal's temporal anti-aliasing interacts with moving objects, which led me to implementing TSR with Responsive AA using a Masked blend mode and Opacity Mask pin.
        <br><br>
        These debugging experiences have been as valuable as building the systems themselves, and represent the kind of engine-level thinking I want to continue developing as a gameplay programmer.`,

        video: "Videos/DungeonSlayer.mp4",

        about: "Dungeon Slayer is a third-person medieval action RPG built in Unreal Engine 5.5 using the Gameplay Ability System entirely in C++. Players explore a dark dungeon battling enemies with a sword, axe, bow, and shield — each powered by a modular, ability-driven combat architecture built on custom C++ interfaces. Targeting Steam release.",

        stats: [
            "<i class='fa-solid fa-code'></i> C++",
            "<i class='fa-solid fa-user'></i> 1 Developer",
            "<i class='fa-solid fa-gears'></i> Unreal Engine 5.5 + GAS",
            "<i class='fa-solid fa-clock'></i> Jun 2025 – Ongoing",
            "<i class='fa-solid fa-gamepad'></i> 3D Action RPG",
            "<i class='fa-solid fa-steam'></i> Targeting Steam"
        ]
    }
};

// ─── Panel renderer ───────────────────────────────────────────────────────────

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

    // GitHub link or private badge
    const githubContainer = document.getElementById("panel-github-link");
    if (githubContainer) {
        if (data.githubUrl) {
            githubContainer.innerHTML = `
                <a href="${data.githubUrl}" target="_blank" class="panel-github-btn">
                    <i class="fa-brands fa-github"></i> View on GitHub
                </a>`;
        } else {
            githubContainer.innerHTML = `
                <span class="panel-private-badge">
                    <i class="fa-solid fa-lock"></i> Private Repository — commercially licensed assets, targeting Steam release
                </span>`;
        }
    }

    const statsHTML = data.stats
        .map(stat => `<p>${stat}</p>`)
        .join("<br>");
    document.getElementById("panel-stats").innerHTML = statsHTML;

    panel.classList.add("active");
}

document.getElementById("close-panel").addEventListener("click", () => {
    document.getElementById("project-panel").classList.remove("active");
});