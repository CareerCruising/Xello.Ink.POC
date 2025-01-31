
=== intro ===
    ~ setTemplate(Templates.Title)
    
    <h1>The Real Game</h1>
    Dream big, spend wisely.
    
    ~ setBackground(Backgrounds.Gradient)

    + [Get started]
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
    
    >>> illustration: il-directional-signs

    <h1>Aw snap.</h1>
    Interdimensional time travel was not something you expected to do today.
    
    + [Next]
        -> investigation
    
    
=== investigation ===

    ~ setTemplate(Templates.MultiChoice)
    ~ setBackground(Backgrounds.Gradient)
    
    >>> illustration: il-magnifying-glass
    {
        -   check_pockets and search_bag:
            -> onboarding
        -   came_from(-> role_rating_summary):
            <h1>How did you qualify for this job?</h1>
            You're feeling strangely prepared to start working.
        -   // Default
            <h1>What's going on?</h1>
            Maybe there's a clue that can help you figure this out.
    }

    * (check_pockets) [Check pockets]
        ~ setTemplate(Templates.StoryBite)
        You search your pockets and pull out an employee ID card.
        <h1>What does it say?</h1>
        ++ [Next]
            -> role_revealed
    * (search_bag) [Search bag]
        ~ setTemplate(Templates.StoryBite)
        <h1>Score! You pull out a crumpled resume.</h1>
        What education and training did you take to prepare for this role?
        ++ [Uncover education]
            ~ setTemplate(Templates.StoryBite)
            ~ setBackground(Backgrounds.Gradient)
            <h1>Ready to go!</h1>
            You’re confident you can rock your first day of work.
            +++ [Next]
                -> investigation
    * ->
        -> onboarding


=== role_revealed ===
    ~ setTemplate(Templates.StoryBite)
    ~ setBackground(Gradient)
    >>> delay: 1000

    <h1>You have a job as a {roleNameLowercase(role)}.</h1>
    And your job starts today. Better get over there!
    
    >>> frame: employee-id
    
    + [Next]
    -
    
    ~ setTemplate(Templates.StoryBite)
    
    <h1>Investigation time: {roleName(role)}</h1>
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
        Rate how you feel about this role's:
        <b>Job description</b>
        -> DONE
    
    = ex2
        Rate how you feel about this role's:
        <b>Monthly pay</b>
        -> DONE
    
    = ex3
        Rate how you feel about this role's:
        <b>Hours of work a week</b>
        -> DONE
        
    = ex4
        Rate how you feel about this role's:
        <b>Vacation time</b>
        -> DONE



    
=== role_rating_summary ===
    ~ setTemplate(Templates.RatingSummary)
    
    <h1>Nicely done! Here's how you rated this role:</h1>
    Description
    {rating(ratingJobDesc)}
    Monthly pay
    {rating(ratingMonthlyPay)}
    Hours of work a week
    {rating(ratingHours)}
    Vacation time
    {rating(ratingVacation)}
    
    + [Done] #cta-footer
        - (done)
        -> investigation