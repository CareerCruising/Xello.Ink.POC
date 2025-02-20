
=== intro ===
    >>> ui: simple
    
    ~ setTemplate(Templates.Title)
    
    <h1>The Real Game</h1>
    Dream big, spend wisely.
    
    ~ setBackground(Backgrounds.Gradient)

    + [Get started]
        -> prologue_intro


=== prologue_intro ===
    ~ setTemplate(Templates.ChapterTitle)
    
    >>> illustration: il-shirt-book-cellphone
    
    <h1>Prologue:</h1>
    The transformation

    + [Next]
        -> passage


=== passage ===

    ~ setTemplate(Templates.StoryScene)
    ~ setBackground(Backgrounds.Basic)

    >>> accent: stars
    
    You're all alone on a dark night.
    You venture down a strange alley, hoping to get home faster.
    Suddenly, you pass through a strange, shimmery film stretched across the passage.
    You look around in a panic. The world seems the same.
    But you feel... different.
    Older, more mature....
    Are you dreaming?
    Or is this real life?
    
    + [Next]
        -> aw_snap
    
    
=== aw_snap ===

    ~ setTemplate(Templates.ContentIntro)
    ~ setBackground(Backgrounds.Gradient)
    
    >>> illustration: machine

    <h1>Aw snap.</h1>
    Interdimensional time travel was not something you expected to do today.
    
    + [Next]
        -> investigation
    
    
=== investigation ===

    ~ setTemplate(Templates.MultiChoice)
    ~ setBackground(Backgrounds.Gradient)
    
    >>> illustration: il-magnifying-glass
    <h1>What's going on?</h1>
    Maybe there's a clue that can help you figure this out.

    + [Check pockets]
        ~ setTemplate(Templates.StoryBite)
        You search your pockets and pull out a staff ID card.
        <h1>What does it say?</h1>
    + [Search bag]
        ~ setTemplate(Templates.StoryBite)
        You search your bag and pull out a staff ID card.
        <h1>What does it say?</h1>
    + [Turn on phone]
        ~ setTemplate(Templates.StoryBite)
       You turn on your phone and find a staff ID login screen.
        <h1>What does it say?</h1>
    -
    + [Next]
        -> role_revealed


=== investigation_2 ===

    ~ setTemplate(Templates.MultiChoice)
    ~ setBackground(Backgrounds.Gradient)
    
    >>> illustration: il-magnifying-glass
    <h1>How did you qualify for this job?</h1>
    Time to look for another clue.
    
    + [Check pockets]
        ~ setTemplate(Templates.StoryBite)
        Score! You pull out a crumpled resume.
        <h1>How did you prepare for this career?</h1>
    + [Search bag]
        ~ setTemplate(Templates.StoryBite)
        Score! You pull out a crumpled resume.
        <h1>How did you prepare for this career?</h1>
    + [Scroll through phone]
        ~ setTemplate(Templates.StoryBite)
        Score! You find an email with a resume attached.
        <h1>How did you prepare for this career?</h1>

    -
    + [Next]
        ~ setTemplate(Templates.StoryBite)
        <h1>Ready to go!</h1>
        You’re confident you can rock your first day of work.
        ++ [Next]
            -> onboarding


=== role_revealed ===
    ~ setTemplate(Templates.StoryBite)
    >>> delay: 1000

    <h1>You have a job as a {lowercase(role)}.</h1>
    And your job starts today. Better get over there!
    
    >>> frame: employee-id
    
    + [Next]
    -
    
    ~ setTemplate(Templates.StoryBite)
    ~ setBackground(Gradient)
    
    <h1>Investigation time: {titlecase(role)}</h1>
    How do you feel about this career?
    
    + [Rate role]
        -> role_rating



VAR ratingJobDesc = 0
VAR ratingMonthlyPay = 0
VAR ratingHours = 0
VAR ratingVacation = 0
    
    
=== role_rating ===
    -> rate(-> ex1, ratingJobDesc) ->
    -> rate(-> ex2, ratingMonthlyPay) ->
    -> rate(-> ex3, ratingHours) ->
    -> rate(-> ex4, ratingVacation) ->
    -> role_rating_summary
    
    = ex1
        ~ setBackground(Gradient)
        Rate how you feel about this role's:
        <b>Job description</b>
        >>> illustration-bg: cornflower-50
        >>> illustration: il-document
        >>> content: <p>You work full time as a civil engineer. Your job is to plan, design, and oversee the construction of buildings and structures. These include bridges, roads, and sewers. You use advanced math and science in your work. You survey sites, write reports, and draw up designs. You supervise workers and make sure the building process is safe and efficient.</p>
        -> DONE
    
    = ex2
        ~ setBackground(Gradient)
        Rate how you feel about this role's:
        <b>Monthly pay</b>
        >>> illustration-bg: emerald-50
        >>> illustration: il-bills-coins
        >>> content: <p>You get paid <b>$5,613</b> a month.</p>
        -> DONE
    
    = ex3
        ~ setBackground(Gradient)
        Rate how you feel about this role's:
        <b>Hours of work a week</b>
        >>> illustration-bg: purple-50
        >>> illustration: il-clock
        >>> content: <p>You work about <b>40 hours</b> a week.</p>
        -> DONE
        
    = ex4
        ~ setBackground(Gradient)
        Rate how you feel about this role's:
        <b>Vacation time</b>
        >>> illustration-bg: gold-50
        >>> illustration: il-suitcase
        >>> content: <p>You get <b>3 weeks</b> of vacation each year.</p>
        -> DONE



    
=== role_rating_summary ===
    ~ setTemplate(Templates.RatingSummary)
    ~ setBackground(Gradient)
    
    >>> frame: career-profile
    
    <h1>Nicely done! Here's how you rated this role:</h1>
    Description
    {rating(ratingJobDesc)}
    Monthly pay
    {rating(ratingMonthlyPay)}
    Hours of work a week
    {rating(ratingHours)}
    Vacation time
    {rating(ratingVacation)}
    
    + [Next] #cta-footer
        - (done)
        -> investigation_2
