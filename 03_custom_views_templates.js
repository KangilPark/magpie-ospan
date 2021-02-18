// In this file you can create your own custom view templates

const custom_views = {};

// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information



// Custom view template for practice trials
custom_views.keypress_rotation__numeral_practice = function(config) {
    const keypress_rotation_practice_function = {
        name: config.name,
        title: magpieUtils.view.setter.title(config.title, "") ,
        render: function(CT, magpie) {
            let startingTime;
            const question = magpieUtils.view.setter.question(
                config.data[CT].question
            );
            const key1 = config.key1;
            const key2 = config.key2;
            const value1 = config[key1];
            const value2 = config[key2];
            const viewTemplate = `<div class="magpie-view">
                    <h1 class='magpie-view-title'>${this.title}</h1>
                    <p class='magpie-response-keypress-header'><strong>${key1}</strong> = ${value1}, <strong>${key2}</strong> = ${value2}</p>
                    <p class='magpie-response-keypress-header' id='feedback'></p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'>${question}</div>
                    </div>
                </div>`;
            const answerContainerElem = `<div class='magpie-view-answer-container'>
                        <p class='magpie-view-question'></p>
                          </div>`;

            $("#main").html(viewTemplate);

            const handleKeyPress = function(e) {
                const keyPressed = String.fromCharCode(
                    e.which
                ).toLowerCase();

                if (keyPressed === key1 || keyPressed === key2) {
                    let correctness;
                    const RT = Date.now() - startingTime; // measure RT before anything else

                    if (
                        config.data[CT].expected ===
                            config[keyPressed]
                    ) {
                        correctness = "correct";
                        // show feedback (for practice trial only)
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Correct!');

                    } else {
                        correctness = "incorrect";
                        // show feedback (for practice trial only)
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Incorrect!');
                    }

                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        key_pressed: keyPressed,
                        correctness: correctness,
                        RT: RT,
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    trial_data[config.data[CT].key1] =
                        config.data[CT][key1];
                    trial_data[config.data[CT].key2] =
                        config.data[CT][key2];

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        if (config.data[CT].canvas.canvasSettings !== undefined) {
                            for (let prop in config.data[CT].canvas.canvasSettings) {
                                if (config.data[CT].canvas.canvasSettings.hasOwnProperty(prop)) {
                                    trial_data[prop] = config.data[CT].canvas.canvasSettings[prop];
                                }
                            }
                            delete trial_data.canvas.canvasSettings;
                        }
                        for (let prop in config.data[CT].canvas) {
                            if (config.data[CT].canvas.hasOwnProperty(prop)) {
                                trial_data[prop] = config.data[CT].canvas[prop];
                            }
                        }
                        delete trial_data.canvas;
                    }

                    magpie.trial_data.push(trial_data);
                    $("body").off("keydown", handleKeyPress);
                    setTimeout(magpie.findNextView, 500); // delay to accomodate feedback
                }
            };

            const enableResponse = function() {
                $(".magpie-view").append(answerContainerElem);
                $("body").on("keydown", handleKeyPress);
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            magpieUtils.view.createTrialDOM(
                {
                    pause: config.pause,
                    //fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "keyPress"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return keypress_rotation_practice_function;
};


let letters = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']; 

var removed_letters = [];
var updated_letters = [];

custom_views.keypress_rotation_practice = function(config) {
    const keypress_rotation_practice_function = {
        name: config.name,
        title: magpieUtils.view.setter.title(config.title, ""),
        render: function(CT, magpie) {
            
            if (CT > 0){
                updated_letters = letters.filter(x => !removed_letters.includes(x));
            }else{
                updated_letters = letters;
                removed_letters = [];
            }

            let startingTime;
            const question = magpieUtils.view.setter.question(
                config.data[CT].question
            );
            const key1 = config.key1;
            const key2 = config.key2;
            const value1 = config[key1];
            const value2 = config[key2];
            const viewTemplate = `<div class="magpie-view">
                    <h1 class='magpie-view-title'>${this.title}</h1>
                    <p class='magpie-response-keypress-header'><strong>${key1}</strong> = ${value1}, <strong>${key2}</strong> = ${value2}</p>
                    <p class='magpie-response-keypress-header' id='feedback'></p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'>${question}</div>
                    </div>
                </div>`;
            const answerContainerElem = `<div class='magpie-view-answer-container'>
                        <p class='magpie-view-question'></p>
                          </div>`;

            $("#main").html(viewTemplate);

            const handleKeyPress = function(e) {
                const keyPressed = String.fromCharCode(
                    e.which
                ).toLowerCase();

                if (keyPressed === key1 || keyPressed === key2) {
                    let correctness;
                    const RT = Date.now() - startingTime; // measure RT before anything else

                    // if (
                    //     config.data[CT].expected ===
                    //         config[keyPressed]
                    // ) {
                    //     correctness = "correct";
                    //     // show feedback (for practice trial only)
                    //     $(".magpie-view-stimulus").addClass("magpie-invisible");
                    //     $('#feedback').text('Correct!');

                    // } else {
                    //     correctness = "incorrect";
                    //     // show feedback (for practice trial only)
                    //     $(".magpie-view-stimulus").addClass("magpie-invisible");
                    //     $('#feedback').text('Incorrect!');
                    // }

                    const shuffled = _.shuffle(updated_letters);

                    const letter = shuffled[0];

                    removed_letters.push(letter); 

                    $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text(letter);

                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        key_pressed: keyPressed,
                        correctness: correctness,
                        RT: RT,
                        letter_shown: letter
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    trial_data[config.data[CT].key1] =
                        config.data[CT][key1];
                    trial_data[config.data[CT].key2] =
                        config.data[CT][key2];

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        if (config.data[CT].canvas.canvasSettings !== undefined) {
                            for (let prop in config.data[CT].canvas.canvasSettings) {
                                if (config.data[CT].canvas.canvasSettings.hasOwnProperty(prop)) {
                                    trial_data[prop] = config.data[CT].canvas.canvasSettings[prop];
                                }
                            }
                            delete trial_data.canvas.canvasSettings;
                        }
                        for (let prop in config.data[CT].canvas) {
                            if (config.data[CT].canvas.hasOwnProperty(prop)) {
                                trial_data[prop] = config.data[CT].canvas[prop];
                            }
                        }
                        delete trial_data.canvas;
                    }

                    magpie.trial_data.push(trial_data);
                    $("body").off("keydown", handleKeyPress);
                    setTimeout(magpie.findNextView, 500); // delay to accomodate feedback
                }
            };

            const enableResponse = function() {
                $(".magpie-view").append(answerContainerElem);
                $("body").on("keydown", handleKeyPress);
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            magpieUtils.view.createTrialDOM(
                {
                    pause: config.pause,
                    //fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "keyPress"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return keypress_rotation_practice_function;
};


