// Define the running and jumping functions
function running() {
    // Function logic for running
    console.log("Running!");
}

function jumping() {
    // Function logic for jumping
    console.log("Jumping!");
}

function receivesAFunction(activityFunction) {
    let athletics;

    if (activityFunction === running) {
        athletics = "thirty laps";
    } else if (activityFunction === jumping) {
        athletics = "five feet";
    } else {
        athletics = "pole vault";
    }

    // Call the activityFunction if it is a function
    if (typeof activityFunction === 'function') {
        activityFunction();
    }

    return function () {
        console.log(`This ${athletics} is awesome!`);
    };
}

// const returnsANamedFunction = receivesAFunction(running);
const namedFunction = returnsANamedFunction; // Remove parentheses to keep it as a function

// const activity = jumping; // Choose either running or jumping
const returnsAnAnonymousFunction = receivesAFunction(activity);
const anonymousFunction = returnsAnAnonymousFunction; // Remove parentheses to keep it as a function

// Now, you can call these functions if needed
namedFunction();
anonymousFunction();
