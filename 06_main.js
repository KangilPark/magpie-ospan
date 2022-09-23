// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,
            instructions_practice,
            practice_numerical,
            instructions_practice_2,
            practice_tasks_1, 
            practice_answer_1,
            practice_tasks_2, 
            practice_answer_2,
            practice_tasks_3, 
            practice_answer_3,
            instructions_main,
            main_tasks_1,
            main_tasks_answer_1,
            main_tasks_2,
            main_tasks_answer_2,
            main_tasks_3,
            main_tasks_answer_3,
            main_tasks_4,
            main_tasks_answer_4,
            main_tasks_5,
            main_tasks_answer_5,
            main_tasks_6,
            main_tasks_answer_6,
            main_tasks_7,
            main_tasks_answer_7,
            main_tasks_8,
            main_tasks_answer_8,
            main_tasks_9,
            main_tasks_answer_9,
            main_tasks_10,
            main_tasks_answer_10,
            post_test,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "1",
            serverAppURL: "https://seresl-studies.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "kangil.park@huskers.unl.edu",
            prolificURL: ""
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                practice_tasks_1.name,
                // practice_tasks_2.name,
                // practice_tasks_3.name,
                // main_tasks_1.name,
                // main_tasks_2.name,
                // main_tasks_3.name,
                // main_tasks_4.name,
                // main_tasks_5.name,
                // main_tasks_6.name,
                // main_tasks_7.name,
                // main_tasks_8.name,
                // main_tasks_9.name,
                // main_tasks_10.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
