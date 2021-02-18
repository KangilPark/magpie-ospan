// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views

/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Welcome!!!!
            <br />
            <br />
            This experiment will take about 15 minutes.
            <br />
            <br />
            Click on the button below to continue.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions_practice = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice',
  title: 'General Instructions',
  text: `In the following task you will need to do two things: check the validity of math equations and memorize the letters that appear after each item. Press the C key if the equation is correct, or press the I key if the equation is incorrect.<br/><br/>
  After each equation a letter that we want you to memorize will appear. Please read the letter aloud and memorize it. After a certain number of items, a question mark will appear on the screen. At that point you will need to type in the list of letters in the order that you read them. For example 'h w k j'.<br/><br/>
  Before the experiment starts, you will be doing some practice problems. During the practice problems, you will be told if you answered accurately or not. In the real experiment, there will be no feedback. Please work as quickly and as accurately as possible.<br/><br/>
  Please place your fingers on the C and I keys and then click on the button below to the math equation practice section.`
  ,
  buttonText: 'go to trials'
});

const instructions_practice_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice',
  title: 'General Instructions',
  text: `In the second part of this experiment you will now see a letter after each equation. Your task is to remember these letters until you are prompted with a question mark to enter them in the correct order.<br/><br/>
  Make sure to separate the characters with spaces ('h w k j'), and click on "Next" when you're done.<br/><br/>
  Please make sure your answer is correct before hitting Enter. You can make corrections using the arrow keys. Feel free to use upper or lower case in your answers.<br/><br/>
  Please place your fingers on the C and I keys and then click on the button below to the math equation practice section.`
  ,
  buttonText: 'go to trials'
});

const instructions_main = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_main',
  title: 'Get ready for the main experiment',
  text:  `You should now understand the experiment.
  Make sure to respond as quickly and accurately as possible. you will need to work as fast as possible.<br/><br/>
  Please place your fingers on the C and I keys and click on the button below to continue to the final part of the experiment.`,
  buttonText: 'begin'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is OPTIONAL, but your answers will help us analyze our results.'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


const practice_numerical = custom_views.keypress_rotation__numeral_practice({
  trials: 4,
  name: 'practice_numerical',
  trial_type: 'practice_numerical',
  pause: 500,
  //stim_duration: 3000,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const practice_tasks_1 = custom_views.keypress_rotation_practice({
   trials: _.random(2, 5),
   name: 'practice_tasks_1',
   trial_type: 'practice_tasks',
   pause: 500,
   //stim_duration: 3000,
   data: _.shuffle(key_press_trials.choices),
   key1: "c",
   key2: "i",
   c: "correct",
   i: "incorrect",
});

const practice_tasks_2 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'practice_tasks_2',
  trial_type: 'practice_tasks',
  pause: 500,
  //stim_duration: 3000,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const practice_tasks_3 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'practice_tasks_3',
  trial_type: 'practice_tasks',
  pause: 500,
  //stim_duration: 3000,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const practice_answer_1 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'practice_answer_1',
  data: question_for_text.cft,
});

const practice_answer_2 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'practice_answer_2',
  data: question_for_text.cft,
});

const practice_answer_3 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'practice_answer_3',
  data: question_for_text.cft,
});

const main_tasks_1 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'main_tasks_1',
  trial_type: 'main_tasks',
  pause: 500,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const main_tasks_2 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'main_tasks_2',
  trial_type: 'main_tasks',
  pause: 500,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const main_tasks_3 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'main_tasks_3',
  trial_type: 'main_tasks',
  pause: 500,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const main_tasks_4 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'main_tasks_4',
  trial_type: 'main_tasks',
  pause: 500,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const main_tasks_5 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'main_tasks_5',
  trial_type: 'main_tasks',
  pause: 500,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const main_tasks_6 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'main_tasks_6',
  trial_type: 'main_tasks',
  pause: 500,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const main_tasks_7 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'main_tasks_7',
  trial_type: 'main_tasks',
  pause: 500,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const main_tasks_8 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'main_tasks_8',
  trial_type: 'main_tasks',
  pause: 500,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const main_tasks_9 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'main_tasks_9',
  trial_type: 'main_tasks',
  pause: 500,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const main_tasks_10 = custom_views.keypress_rotation_practice({
  trials: _.random(2, 5),
  name: 'main_tasks_10',
  trial_type: 'main_tasks',
  pause: 500,
  data: _.shuffle(key_press_trials.choices),
  key1: "c",
  key2: "i",
  c: "correct",
  i: "incorrect",
});

const main_tasks_answer_1 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'main_tasks_answer_1',
  data: question_for_text.cft,
});

const main_tasks_answer_2 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'main_tasks_answer_2',
  data: question_for_text.cft,
});

const main_tasks_answer_3 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'main_tasks_answer_3',
  data: question_for_text.cft,
});

const main_tasks_answer_4 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'main_tasks_answer_4',
  data: question_for_text.cft,
});

const main_tasks_answer_5 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'main_tasks_answer_5',
  data: question_for_text.cft,
});

const main_tasks_answer_6 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'main_tasks_answer_5',
  data: question_for_text.cft,
});

const main_tasks_answer_7 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'main_tasks_answer_6',
  data: question_for_text.cft,
});

const main_tasks_answer_8 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'main_tasks_answer_7',
  data: question_for_text.cft,
});

const main_tasks_answer_9 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'main_tasks_answer_8',
  data: question_for_text.cft,
});

const main_tasks_answer_10 = magpieViews.view_generator("textbox_input", {
  trials: 1,
  name: 'main_tasks_answer_10',
  data: question_for_text.cft,
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale

