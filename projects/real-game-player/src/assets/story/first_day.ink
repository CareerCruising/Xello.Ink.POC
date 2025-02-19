=== first_day ===

    ~ setTemplate(Templates.ContentIntro)
    
    >>> illustration: il-bulb
    
    <h1>You're in it now.</h1>
    <p>At least you have Ollex to help you out.</p>
    
    + [Next]
    -
    
    ~ setTemplate(Templates.ContentIntro)
    
    >>> illustration: il-office-white
    
    <h1>You get to your workplace and head inside.</h1>
    <p>You are nervous but excited to find out about working life.</p>
    
    + [Let's go!]
    -
    -> office_introduction
    
    
=== office_introduction ===

    ~ setTemplate(Templates.MultiChoice)
    
    <h1>Turns out, it's your first day on the job.</h1>
    <p>Your boss introduces you and asks you to say a few words. Everyone is staring at you!</p>
    
    + [Make a joke about the office]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-diverse-people
        <h1>That was a little awkward.</h1>
        <p>Your joke about feeding llamas at the office lands a few laughs, and a few weird looks.</p>
        ~ modifyWellbeing(-1)
        ~ modifyCareer(1)
        ~ gainXP(10)
        
    + [Wave but don't say anything]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-diverse-people
        <h1>That was a little awkward.</h1>
        <p>Your silent waving gets a few weird looks from co-workers.</p>
        ~ modifyWellbeing(-1)
        ~ modifyCareer(-1)
        ~ gainXP(5)

    + [Offer a few quick facts about yourself]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-diverse-people
        <h1>That was a little awkward.</h1>
        <p>You give a 2-minute intro and everyone smiles.</p>
        ~ modifyWellbeing(2)
        ~ modifyCareer(1)
        ~ gainXP(25)
    
    -
    + [Next]
    -
    -> orientation


=== orientation ===

    ~ setTemplate(Templates.ContentIntro)
    
    <h1>Orientation</h1>
    <p>Your boss asks you to take a survey as part of your training.</p>

    >>> illustration: il-desktop-checklist
    
    + [Take survey]
    -
    
    -> action_view(-> orientation_survey, -> result, -> orientation) ->
    
    - (result)

    ~ setTemplate(Templates.Result)
    >>> illustration: il-ribbon
    <h1>Well done!</h1>
    <p>Your boss is pleased with your effort.</p>
    ~ modifyWellbeing(2)
    ~ modifyCareer(2)
    ~ gainXP(150)
    
    + [Next]
    -
    -> aspiration_choice
    

=== aspiration_choice ===

    ~ setTemplate(Templates.ContentIntro)
    
    <h1>What does success look like for you?</h1>
    <p>Choose an aspiration to guide you.</p>

    >>> illustration: il-mountain-flag
    
    + [Set aspiration]
    -
    
    -> action_view(-> aspiration_survey, -> result, -> aspiration_choice) ->
    
    - (result)

    ~ setTemplate(Templates.Result)
    >>> illustration: {get_aspiration_illustration(aspiration)}
    <h1>Life, inspired!</h1>
    <p>Your boss is pleased with your effort.</p>
    ~ modifyWellbeing(2)
    ~ modifyCareer(2)
    ~ gainXP(150)
    
    + [Next]
    -
    -> temp_housing


=== aspiration_survey ===
    ~ setTemplate(Templates.MultiChoiceRow)
    
    <h1>What is your main aspiration in life?</h1>
    <p>You will have the chance to change this later, if you want.</p>
    
    + <b>Family</b> Support and raise a family # illustration: {get_aspiration_illustration(Aspirations.Family)}
        ~ aspiration = Aspirations.Family
    + <b>Career</b> Rise up professionally and be recognized # illustration: {get_aspiration_illustration(Aspirations.Career)}
        ~ aspiration = Aspirations.Career
    + <b>Savings</b> Save enough to retire comfortably # illustration: {get_aspiration_illustration(Aspirations.Savings)}
        ~ aspiration = Aspirations.Savings
    + <b>Social</b> Have fun experiences with friends # illustration: {get_aspiration_illustration(Aspirations.Social)}
        ~ aspiration = Aspirations.Social
    + <b>Lifestyle</b> Buy expensive things and live large # illustration: {get_aspiration_illustration(Aspirations.Lifestyle)}
        ~ aspiration = Aspirations.Lifestyle
    
    -
    ->->


VAR opinionTransferableSkills = 0
VAR opinionBuyThingsYouWant = 0
=== orientation_survey ===

    ~ setTemplate(Templates.ContentIntro)
    
    >>> illustration: il-briefcase-stars
    
    <h1>What do you think about the world of work?</h1>
    <p>This is not a test. If you are not sure or don't have an opinion, answer "Don't know."</p>
    
    + [Next]
    -
    
    -> agree_or_disagree(-> ex1, opinionTransferableSkills) ->
    
    ~ setTemplate(Templates.ContentIntro)
    
    >>> illustration: il-target
    
    <h1>Great work so far!</h1>
    <p>Tackle a few more questions.</p>
    
    + [Next]
    -
    
    -> agree_or_disagree(-> ex2, opinionBuyThingsYouWant) ->
    
    ~ setTemplate(Templates.ContentIntro)
    
    >>> illustration: il-briefcase-stars
    
    <h1>Excellent! Keep your answers in mind as you get settled in at work.</p>
    
    + [Next]
    -
    
    ->->
    

    = ex1
        <h1>Transferable skills are skills you can pass on to your co-workers</h1>
        -> DONE

    = ex2
        <h1>When you have a job, you can buy the things you want.</h1>
        -> DONE



=== temp_housing ===

    ~ setTemplate(Templates.MultiChoice)
    
    <h1>Crash pad</h1>
    <p>You need a place to sleep while you get your housing sorted. Where are you staying?</p>
    
    + [Set up on a friendly co-worker's couch]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-high-school
        <h1>Couch, sweet couch</h1>
        <p>Hope that co-worker likes to host.</p>
        ~ modifyWellbeing(-2)
        ~ gainXP(20)
        
    + [House-sit for a dog owner on vacation]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-house
        <h1>Woof, woof</h1>
        <p>Hope you're not allergic to dogs.</p>
        ~ modifyWellbeing(2)
        ~ gainXP(20)

    + [Find a bed in a hostel close to work]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-suitcase
        <h1>Bed, sweet bed</h1>
        {culture == Cultures.enGB:
            <p>The hostel costs £20 a night.</p>
        - else:
            <p>The hostel costs $25 a day.</p>
        }
        ~ modifyWellbeing(-1)
        ~ modifyCareer(1)
        ~ addExpenses(35)
        ~ gainXP(20)
    
    -
    + [Next]
    -
    -> work_woes
    
    
=== work_woes ===

    ~ setTemplate(Templates.MultiChoice)
    
    <h1>Work woes</h1>
    <p>Your teammate is explaining a complex project, but you don't understand your role. What do you do?</p>
    
    + [Start a side conversation to quietly ask another co-worker]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-high-school
        <h1>Side convo, side eye</h1>
        <p>Both co-workers are surprised by your attempt.</p>
        ~ modifyCareer(-2)
        ~ modifyWellbeing(-3)
        ~ gainXP(10)
        
    + [Nod and pretend you get it]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-house
        <h1>Looks good...</h1>
        <p>That is... until you actually have to work on the project.</p>
        ~ modifyCareer(-2)
        ~ modifyWellbeing(-2)
        ~ gainXP(5)

    + [Ask questions to the speaker when they pause]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-diverse-people
        <h1>No problem!</h1>
        <p>Your teammate is happy to pause and go over what to do. </p>
        ~ modifyWellbeing(1)
        ~ modifyCareer(1)
        ~ gainXP(20)
    
    -
    + [Next]
    -
    -> first_weekend
    
      
=== first_weekend ===

    ~ setTemplate(Templates.MultiChoice)
    
    <h1>It's the weekend at last. </h1>
    <p>What do you want to do this evening?</p>
    
    + [Stay late at work]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-high-school
        <h1>Into the grind</h1>
        <p>That’s fine, but make some time to relax and recharge, too.</p>
        ~ modifyCareer(1)
        ~ modifyWellbeing(-3)
        ~ gainXP(5)
        
    + [Relax and unwind]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-house
        {culture == Cultures.enGB:
            <h1>Get cosy</h1>
        -else:
            <h1>Get cozy</h1>
        }
        <p>You have an epic amount of streaming to do.</p>
        ~ modifyWellbeing(3)
        ~ gainXP(20)

    + [Go out with friends]
        ~ setTemplate(Templates.Result)
        >>> illustration: il-diverse-people
        <h1>Get ready</h1>
        <p>Time to celebrate your new job!</p>
        ~ modifyWellbeing(3)
        ~ gainXP(20)
    
    -
    + [Next]
    -
    -> first_week_complete


=== first_week_complete ===

    ~ setTemplate(Templates.Result)
    >>> illustration: il-confetti
    <h1>Seamless slide into the workforce!</h1>
    <p>You've made it through your first month as an adult.</p>
    ~ modifyWellbeing(5)
    ~ gainXP(50)
    
    + [Next]
        -> first_week_summary


=== first_week_summary ===
    ~ setTemplate(Templates.StoryBite)
    
    <h1>Stellar start! What will you tackle next?</h1>
    
    >>> frame: chapter-summary

    -> DONE

    
    