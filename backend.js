// global variables for the purposes of keeping track of the emotions selected 
var firstEmotionSelected = "";
var secondEmotionSelected = "";

var firstSelected = false;
var secondSelected = false;

function btnIndex_click(){
    window.location.href="./page1.html";
}

function emotion_click(emotion){
    if (firstSelected == false)
    {
        firstEmotionSelected = emotion;
        firstSelected = true;
        single_emotion();
    }
    else if (secondSelected == false)
    {
        secondEmotionSelected = emotion;
        secondSelected = true;
        dual_emotion();
    }
    else if (firstSelected == true && secondSelected == true)
    {
        firstEmotionSelected = emotion;
        secondEmotionSelected = "";
        firstSelected = true;
        secondSelected = false;
        single_emotion();
    }

    //alert("Emotions are: " + firstEmotionSelected + " and " + secondEmotionSelected);
}

function single_emotion(){
    //alert(firstEmotionSelected);

    document.getElementById("titles").style.visibility = "visible";
    document.getElementById("descriptions").style.visibility = "visible";
    document.getElementById("colors").style.visibility = "visible";
    document.getElementById("emotion2").style.visibility = "hidden";

    document.getElementById("mixEmotion").innerHTML = ".";
    document.getElementById("mixEmotion").style.color = "white";
    document.getElementById("emotionName").innerHTML = firstEmotionSelected.toUpperCase();

    switch (firstEmotionSelected){
        case "joy":
            joy();
            break;
        case "trust":
            trust();
            break;
        case "anticipation":
            anticipation();
            break;
        case "fear":
            fear();
            break;
        case "trust":
            trust();
            break;
        case "suprise":
            suprise();
            break;
        case "sadness":
            sadness();
            break;
        case "disgust":
            disgust();
            break;
        case "anger":
            anger();
            break;
    }
}

function dual_emotion(){
    document.getElementById("titles").style.visibility = "visible";
    document.getElementById("descriptions").style.visibility = "visible";
    document.getElementById("colors").style.visibility = "visible";
    document.getElementById("emotion2").style.visibility = "visible";

    document.getElementById("mixEmotion").style.color = "black";
    document.getElementById("mixEmotion").innerHTML = firstEmotionSelected.toLocaleUpperCase() + " + " + secondEmotionSelected.toUpperCase();

    // changing bracket styling for readability 
    switch (firstEmotionSelected)
    {
        case "joy":
            switch (secondEmotionSelected)
            {
                case "anticipation":
                    optimism();
                    break;
                case "joy":
                    ecstasy();
                    break;
                case "trust":
                    love();
                    break;
                case "fear":
                    guilt();
                    break;
                case "suprise":
                    delight();
                    break;
                case "sadness":
                    bitterSweetness();
                    break;
                case "disgust":
                    morbidness();
                    break;
                case "anger":
                    pride();
                    break;
            }
            break;
        case "trust":
            switch (secondEmotionSelected)
            {
                case "trust":
                    admiration();
                    break;
                case "joy":
                    love();
                    break;
                case "fear":
                    submission();
                    break;
                case "suprise":
                    curiosity();
                    break;
                case "sadness":
                    sentimentality();
                    break;
                case "disgust":
                    ambivalence();
                    break;
                case "anticipation":
                    hope();
                    break;
                case "anger":
                    dominance();
                    break;
            }
            break;
        case "anticipation":
            switch(secondEmotionSelected)
            {
                case "joy":
                    optimism();
                    break;
                case "trust":
                    hope();
                    break;
                case "fear":
                    anxiety();
                    break;
                case "suprise":
                    confusion();
                    break;
                case "sadness":
                    pessimism();
                    break;
                case "disgust":
                    cynicism();
                    break;
                case "anger":
                    aggression();
                    break;
                case "anticipation":
                    vigilance();
                    break;
            }
            break;
        case "fear":
            switch(secondEmotionSelected)
            {
                case "joy":
                    guilt();
                    break;
                case "trust":
                    submission();
                    break;
                case "fear":
                    terror();
                    break;
                case "suprise":
                    alarm();
                    break;
                case "sadness":
                    despair();
                    break;
                case "disgust":
                    shame();
                    break;
                case "anger":
                    frozenness();
                    break;
                case "anticipation":
                    anxiety();
                    break;
            }
            break;
        case "suprise":
            switch(secondEmotionSelected)
            {
                case "joy":
                    delight();
                    break;
                case "trust":
                    curiosity();
                    break;
                case "fear":
                    alarm();
                    break;
                case "suprise":
                    amazement();
                    break;
                case "sadness":
                    disappointment();
                    break;
                case "disgust":
                    disbelief();
                    break;
                case "anger":
                    outrage();
                    break;
                case "anticipation":
                    confusion();
                    break;
            }
            break;
        case "sadness":
            switch(secondEmotionSelected)
            {
                case "joy":
                    bitterSweetness();
                    break;
                case "trust":
                    sentimentality();
                    break;
                case "fear":
                    despair();
                    break;
                case "suprise":
                    disappointment();
                    break;
                case "sadness":
                    grief();
                    break;
                case "disgust":
                    remorse();
                    break;
                case "anger":
                    envy();
                    break;
                case "anticipation":
                    pessimism();
                    break;
            }
            break;
        case "disgust":
            switch(secondEmotionSelected)
            {
                case "joy":
                    morbidness();
                    break;
                case "trust":
                    ambivalence();
                    break;
                case "fear":
                    shame();
                    break;
                case "suprise":
                    disbelief();
                    break;
                case "sadness":
                    remorse();
                    break;
                case "disgust":
                    loathing();
                    break;
                case "anger":
                    contempt();
                    break;
                case "anticipation":
                    cynicism();
                    break;
            }
            break;
        case "anger":
            switch(secondEmotionSelected)
            {
                case "joy":
                    pride();
                case "trust":
                    dominance();
                    break;
                case "fear":
                    frozenness();
                    break;
                case "suprise":
                    outrage();
                    break;
                case "sadness":
                    envy();
                    break;
                case "disgust":
                    contempt();
                    break;
                case "anger":
                    rage();
                    break;
                case "anticipation":
                    aggression();
                    break;
            }
            break;
    }
}


// ============================================================
// dual / mix emotion functions
// ============================================================

function rage(){
    document.getElementById("genDesc").innerHTML = "Violent and uncontrolled anger.";
    document.getElementById("similarWords").innerHTML = " Overwhelmed, furious";
    document.getElementById("typicalSensations").innerHTML = "Pounding heart, see red";
    document.getElementById("telling").innerHTML = "I'm blocked from something vital";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "RAGE";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "red";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "red";   
}

function contempt(){
    document.getElementById("genDesc").innerHTML = "Lack of respect or reverence for something.";
    document.getElementById("similarWords").innerHTML = "Righteous, horrified, shaming";
    document.getElementById("typicalSensations").innerHTML = "Curled lip, hot";
    document.getElementById("telling").innerHTML = "Something is bad/wrong and should be punished";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "CONTEMPT";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "purple";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "red";
}

function loathing(){
    document.getElementById("genDesc").innerHTML = "Extreme disgust.";
    document.getElementById("similarWords").innerHTML = "Disturbed, horrified";
    document.getElementById("typicalSensations").innerHTML = "Bilious & vehement";
    document.getElementById("telling").innerHTML = "Fundamental values are violated";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "LOATHING";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "purple";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "purple";
}

function envy(){
    document.getElementById("genDesc").innerHTML = "Painful or resentful awareness of an advantage enjoyed by another joined with a desire to possess the same advantage.";
    document.getElementById("similarWords").innerHTML = "Jealousy, covetousness";
    document.getElementById("typicalSensations").innerHTML = "Tight jaw, weak";
    document.getElementById("telling").innerHTML = "Explore feelings of inadequac";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "ENVY";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "darkBlue";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "red";
}

function remorse(){
    document.getElementById("genDesc").innerHTML = "A gnawing distress arising from a sense of guilt for past wrongs.";
    document.getElementById("similarWords").innerHTML = "Guilt, atonement, responsibility";
    document.getElementById("typicalSensations").innerHTML = "Heaviness, hanging head";
    document.getElementById("telling").innerHTML = "I am responsible for something important damaged or lost";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "REMORSE";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "darkBlue";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "purple";
}

function grief(){
    document.getElementById("genDesc").innerHTML = "Deep and poignant distress caused by or as if by bereavement.";
    document.getElementById("similarWords").innerHTML = "Heartbroken, distraught";
    document.getElementById("typicalSensations").innerHTML = "Hard to get up";
    document.getElementById("telling").innerHTML = "Something important is lost";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "GRIEF";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "darkBlue";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "darkBlue";
}

function vigilance(){
    document.getElementById("genDesc").innerHTML = "Alertly watchful especially to avoid danger.";
    document.getElementById("similarWords").innerHTML = "Intense, focused";
    document.getElementById("typicalSensations").innerHTML = "Highly focused";
    document.getElementById("telling").innerHTML = "Something big is coming";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "VIGILANCE";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "orange";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "orange";
}

function aggression(){
    document.getElementById("genDesc").innerHTML = "Hostile, injurious, or destructive behavior or outlook especially when caused by frustration.";
    document.getElementById("similarWords").innerHTML = "Belligerent, hostile, argumentative";
    document.getElementById("typicalSensations").innerHTML = "Inflamed, tight, moving toward threat";
    document.getElementById("telling").innerHTML = "I/we need to fight against a coming threat";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "AGGRESSION";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "orange";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "red";
}

function cynicism(){
    document.getElementById("genDesc").innerHTML = "Contemptuous distrust of human nature and motives.";
    document.getElementById("similarWords").innerHTML = "Misanthropic, pessimistic";
    document.getElementById("typicalSensations").innerHTML = "Critical, aversion";
    document.getElementById("telling").innerHTML = "Cultivate compassion";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "CYNICISM";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "orange";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "purple";
}

function pessimism(){
    document.getElementById("genDesc").innerHTML = "An inclination to emphasize adverse aspects, conditions, and possibilities or to expect the worst possible outcome.";
    document.getElementById("similarWords").innerHTML = "Gloomy, negative";
    document.getElementById("typicalSensations").innerHTML = "Heavy, critical";
    document.getElementById("telling").innerHTML = "Have realistic expectations";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "PESSIMISM";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "orange";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "darkBlue";
}

function confusion(){
    document.getElementById("genDesc").innerHTML = "Being perplexed or disconcerted.";
    document.getElementById("similarWords").innerHTML = "Baffled, muddled";
    document.getElementById("typicalSensations").innerHTML = "Breathless, speechless";
    document.getElementById("telling").innerHTML = "Reflect and assess";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "CONFUSION";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "blue";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "orange";
}

function outrage(){
    document.getElementById("genDesc").innerHTML = "The anger and resentment aroused by injury or insult.";
    document.getElementById("similarWords").innerHTML = "Infuriated, enraged";
    document.getElementById("typicalSensations").innerHTML = "Flushed, electrified";
    document.getElementById("telling").innerHTML = "Boundaries have been crossed";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "OUTRAGE";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "blue";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "red";
}

function disbelief(){
    document.getElementById("genDesc").innerHTML = "Mental rejection of something as untrue.";
    document.getElementById("similarWords").innerHTML = "Incredulity, unbelief";
    document.getElementById("typicalSensations").innerHTML = "Speechless, queasy";
    document.getElementById("telling").innerHTML = "Seek truth";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "DISBELIEF";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "blue";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "purple";
}

function disappointment(){
    document.getElementById("genDesc").innerHTML = "Defeated in expectation or hope.";
    document.getElementById("similarWords").innerHTML = "Dissatisfaction, letdown, dismay";
    document.getElementById("typicalSensations").innerHTML = "Need to move, face scrunched";
    document.getElementById("telling").innerHTML = "Look for a different way";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "DISAPPOINTMENT";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "blue";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "darkBlue";
}

function amazement(){
    document.getElementById("genDesc").innerHTML = "A feeling of astonishment : the quality or state of being amazed.";
    document.getElementById("similarWords").innerHTML = "Shocked, unexpected";
    document.getElementById("typicalSensations").innerHTML = "Heart pounding";
    document.getElementById("telling").innerHTML = "Something new happened";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "AMAZEMENT";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "blue";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "blue";
}

function anxiety(){
    document.getElementById("genDesc").innerHTML = "Apprehensive uneasiness or nervousness usually over an impending or anticipated ill.";
    document.getElementById("similarWords").innerHTML = "Agitation, worry";
    document.getElementById("typicalSensations").innerHTML = "Fidgety, foot tapping";
    document.getElementById("telling").innerHTML = "Something is out of alignment";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "ANXIETY";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "darkGreen";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "orange";
}

function frozenness(){
    document.getElementById("genDesc").innerHTML = "Incapable of being changed, moved, or undone.";
    document.getElementById("similarWords").innerHTML = "Stuck, jammed";
    document.getElementById("typicalSensations").innerHTML = "Quiet, numb";
    document.getElementById("telling").innerHTML = "Find a calm, safe space";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "FROZENNESS";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "darkGreen";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "red";
}

function shame(){
    document.getElementById("genDesc").innerHTML = "A painful emotion caused by consciousness of guilt, shortcoming, or impropriety.";
    document.getElementById("similarWords").innerHTML = "Repentance, contrite";
    document.getElementById("typicalSensations").innerHTML = "Tender, lump in throat, nausea";
    document.getElementById("telling").innerHTML = "Make repairs, seek acceptance";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "SHAME";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "darkGreen";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "purple";
}

function despair(){
    document.getElementById("genDesc").innerHTML = "Utter loss of hope.";
    document.getElementById("similarWords").innerHTML = "Despondent, forlorn";
    document.getElementById("typicalSensations").innerHTML = "Crying, body aches";
    document.getElementById("telling").innerHTML = "Honor emotions and grieve";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "DESPAIR";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "darkGreen";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "darkBlue";
}

function alarm(){
    document.getElementById("genDesc").innerHTML = "Sudden sharp apprehension and fear resulting from the perception of imminent danger.";
    document.getElementById("similarWords").innerHTML = "Dread, panic";
    document.getElementById("typicalSensations").innerHTML = "Jumpy, tense";
    document.getElementById("telling").innerHTML = "Assess your surroundings";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "ALARM";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "darkGreen";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "blue";
}

function terror(){
    document.getElementById("genDesc").innerHTML = "A state of intense or overwhelming fear.";
    document.getElementById("similarWords").innerHTML = " Alarmed, petrified";
    document.getElementById("typicalSensations").innerHTML = "Hard to breathe";
    document.getElementById("telling").innerHTML = "There is big danger";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "TERROR";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "darkGreen";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "darkGreen";
}


function hope(){
    document.getElementById("genDesc").innerHTML = "To cherish a desire with anticipation : to want something to happen or be true.";
    document.getElementById("similarWords").innerHTML = "Wish, dream";
    document.getElementById("typicalSensations").innerHTML = "Light, awake";
    document.getElementById("telling").innerHTML = "You will be safe";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "HOPE";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "green";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "orange";
}

function dominance(){
    document.getElementById("genDesc").innerHTML = "Commanding, controlling, or prevailing over all others.";
    document.getElementById("similarWords").innerHTML = "Ascendance, supremacy";
    document.getElementById("typicalSensations").innerHTML = "Feeling hot, tall";
    document.getElementById("telling").innerHTML = "Take control";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "DOMINANCE";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "green";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "red";
}

function ambivalence(){
    document.getElementById("genDesc").innerHTML = "Simultaneous and contradictory attitudes or feelings (such as attraction and repulsion) toward an object, person, or action.";
    document.getElementById("similarWords").innerHTML = "Doubt, uncertainty";
    document.getElementById("typicalSensations").innerHTML = "Need to move, sensitive";
    document.getElementById("telling").innerHTML = "Be cautious, investigate nuances";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "AMBIVALENCE";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "green";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "purple";
}

function sentimentality(){
    document.getElementById("genDesc").innerHTML = "Marked or governed by feeling, sensibility, or emotional idealism.";
    document.getElementById("similarWords").innerHTML = "Sappy, nostalgic";
    document.getElementById("typicalSensations").innerHTML = "Peaceful, hollow";
    document.getElementById("telling").innerHTML = "Connect and reflect";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "SENTIMENTALITY";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "green";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "darkBlue";
}

function curiosity(){
    document.getElementById("genDesc").innerHTML = "The desire to know.";
    document.getElementById("similarWords").innerHTML = "Inquisitiveness, interest";
    document.getElementById("typicalSensations").innerHTML = "Awake, brow furrowed";
    document.getElementById("telling").innerHTML = "Explore and learn";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "CURIOSITY";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "green";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "blue";
}

function submission(){
    document.getElementById("genDesc").innerHTML = "The condition of being submissive, humble, or compliant.";
    document.getElementById("similarWords").innerHTML = "Obedience, followership, tribalism";
    document.getElementById("typicalSensations").innerHTML = "Narrowed eyes, head down";
    document.getElementById("telling").innerHTML = "This person (institution) has the strength to keep us safe";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "SUBMISSION";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "green";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "darkGreen";
}

function pride(){
    document.getElementById("genDesc").innerHTML = "Reasonable self-esteem : confidence and satisfaction in oneself.";
    document.getElementById("similarWords").innerHTML = "Self-esteem, self-regard";
    document.getElementById("typicalSensations").innerHTML = "Inflated, tall";
    document.getElementById("telling").innerHTML = "Living aligned with your values";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "PRIDE";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "yellow";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "red";
}

function morbidness(){
    document.getElementById("genDesc").innerHTML = "Abnormally susceptible to or characterized by gloomy or unwholesome feelings.";
    document.getElementById("similarWords").innerHTML = "Wretched, dismal";
    document.getElementById("typicalSensations").innerHTML = "Queasy, energetic";
    document.getElementById("telling").innerHTML = "Practice acceptance";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "MORBIDNESS";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "yellow";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "purple";
}

function bitterSweetness(){
    document.getElementById("genDesc").innerHTML = "Pleasure accompanied by suffering or regret.";
    document.getElementById("similarWords").innerHTML = "Stirring, touching";
    document.getElementById("typicalSensations").innerHTML = "Warm, heavy";
    document.getElementById("telling").innerHTML = "Accept impermanence";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "BITTERSWEETNESS";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "yellow";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "darkBlue";
}

function delight(){
    document.getElementById("genDesc").innerHTML = "A high degree of gratification or pleasure.";
    document.getElementById("similarWords").innerHTML = "Glee, jubilation";
    document.getElementById("typicalSensations").innerHTML = "Light, energetic";
    document.getElementById("telling").innerHTML = "Have gratitude for the present";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "DELIGHT";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "yellow";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "blue";
}

function guilt(){
    document.getElementById("genDesc").innerHTML = "Feelings of deserving blame especially for real or imagined offenses or from a sense of inadequacy.";
    document.getElementById("similarWords").innerHTML = "Self-reproach, remorse";
    document.getElementById("typicalSensations").innerHTML = "Looking down, empty";
    document.getElementById("telling").innerHTML = "Make amends and change your behavior";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "GUILT";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "yellow";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "darkGreen";
}

function admiration(){
    document.getElementById("genDesc").innerHTML = "A feeling of respect and approval.";
    document.getElementById("similarWords").innerHTML = "Connected, proud";
    document.getElementById("typicalSensations").innerHTML = "Glowing";
    document.getElementById("telling").innerHTML = "I want to support the person or thing";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "ADMIRATION";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "green";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "green";
}

function love(){
    document.getElementById("genDesc").innerHTML = "Warm attachment, enthusiasm, or devotion.";
    document.getElementById("similarWords").innerHTML = "Accepted, adored, connected";
    document.getElementById("typicalSensations").innerHTML = "Peaceful, warm-hearted";
    document.getElementById("telling").innerHTML = "I am deeply connected with the world";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "LOVE";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "yellow";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "green";
}

function ecstasy(){
    document.getElementById("genDesc").innerHTML = "A state of overwhelming emotion, especially: rapturous delight.";
    document.getElementById("similarWords").innerHTML = "Delighted, giddy";
    document.getElementById("typicalSensations").innerHTML = "Abundance of energy";
    document.getElementById("telling").innerHTML = "This is better than I imagined";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "ECSTASY";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "yellow";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "yellow";
}

function optimism(){
    document.getElementById("genDesc").innerHTML = "An inclination to put the most favorable construction upon actions and events or to anticipate the best possible outcome.";
    document.getElementById("similarWords").innerHTML = "Hopeful, looking forward";
    document.getElementById("typicalSensations").innerHTML = "Energized";
    document.getElementById("telling").innerHTML = "The future is better than the present";
    document.getElementById("help").innerHTML = "";

    document.getElementById("emotionName").innerHTML = "OPTIMISM";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "orange";
    document.getElementById("imgEmot2").className = "";
    document.getElementById("imgEmot2").className = "yellow";
}


// -- here are all of SINGLE MOTIONS the functions that handle displaying emotion information
// ================================

function anger(){
    document.getElementById("genDesc").innerHTML = "A strong feeling of displeasure and usually of antagonism.";
    document.getElementById("similarWords").innerHTML = "Mad, fierce";
    document.getElementById("typicalSensations").innerHTML = "Strong & heated";
    document.getElementById("telling").innerHTML = "Something is in the way";
    document.getElementById("help").innerHTML = "";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "red";
}

function disgust(){
    document.getElementById("genDesc").innerHTML = "Marked aversion aroused by something highly distasteful.";
    document.getElementById("similarWords").innerHTML = "Distrust, rejecting";
    document.getElementById("typicalSensations").innerHTML = "Bitter & unwanted";
    document.getElementById("telling").innerHTML = "Rules are violated";
    document.getElementById("help").innerHTML = "";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "purple";
}


function sadness(){
    document.getElementById("genDesc").innerHTML = "Affected with or expressive of grief or unhappiness.";
    document.getElementById("similarWords").innerHTML = "Bummed, loss";
    document.getElementById("typicalSensations").innerHTML = "Heavy";
    document.getElementById("telling").innerHTML = "Love is going away";
    document.getElementById("help").innerHTML = "";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "darkBlue";
}

function suprise(){
    document.getElementById("genDesc").innerHTML = "The feeling caused by something unexpected or unusual.";
    document.getElementById("similarWords").innerHTML = "Shocked, unexpected";
    document.getElementById("typicalSensations").innerHTML = "Heart pounding";
    document.getElementById("telling").innerHTML = "Something new happened";
    document.getElementById("help").innerHTML = "";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "blue";
}

function trust(){
    document.getElementById("genDesc").innerHTML = "Assured reliance on the character, ability, strength, or truth of someone or something.";
    document.getElementById("similarWords").innerHTML = "Accepting, safe";
    document.getElementById("typicalSensations").innerHTML = "Warm";
    document.getElementById("telling").innerHTML = "This is safe";
    document.getElementById("help").innerHTML = "";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "green";
}


function fear(){
    document.getElementById("genDesc").innerHTML = "An unpleasant often strong emotion caused by anticipation or awareness of danger.";
    document.getElementById("similarWords").innerHTML = "Stressed, scared";
    document.getElementById("typicalSensations").innerHTML = "Agitated";
    document.getElementById("telling").innerHTML = "Something I care about is at risk";
    document.getElementById("help").innerHTML = "";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "darkGreen";
}


function anticipation(){
    document.getElementById("genDesc").innerHTML = "Hopefullness and confidence about the future of the successful outcome of something.";
    document.getElementById("similarWords").innerHTML = "Excited, pleased";
    document.getElementById("typicalSensations").innerHTML = "Sense of energy and possibility";
    document.getElementById("telling").innerHTML = "Life is going well";
    document.getElementById("help").innerHTML = "";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "orange";
}

function trust(){
    document.getElementById("genDesc").innerHTML = "Hopefullness and confidence about the future of the successful outcome of something.";
    document.getElementById("similarWords").innerHTML = "Excited, pleased";
    document.getElementById("typicalSensations").innerHTML = "Sense of energy and possibility";
    document.getElementById("telling").innerHTML = "Life is going well";
    document.getElementById("help").innerHTML = "Sparks creativity, connection, gives energy";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "green";
}


function joy(){
    document.getElementById("genDesc").innerHTML = "Hopefullness and confidence about the future of the successful outcome of something.";
    document.getElementById("similarWords").innerHTML = "Excited, pleased";
    document.getElementById("typicalSensations").innerHTML = "Sense of energy and possibility";
    document.getElementById("telling").innerHTML = "Life is going well";
    document.getElementById("help").innerHTML = "";

    document.getElementById("imgEmot1").className = "";
    document.getElementById("imgEmot1").className = "yellow";
}
