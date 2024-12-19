

=== enter ===
    >>> mode: text
    >>> background: basic
    >>> accent: stars
    
    You're all alone on a dark night.
    You venture down a strange alley, hoping to get home faster.
    Suddenly, you pass through a strange, shimmery film stretched across the passage.
    You look around in a panic. The world seems the same.
    But you feel... different. Older, more mature....
    Are you dreaming? Or is this real life?
    
    + [Next]
        -> aw_snap
    
    
=== aw_snap ===
    >>> mode: splash
    >>> background: gradient
    
    {illustration("il-directional-signs")}
    {big("Aw snap.")}
    Interdimensional time travel was not something you expected to do today.
    
    + [Next]
        -> investigation
    
    
=== investigation ===
    >>> mode: splash
    >>> background: gradient
    >>> columns: 2
    
    >>> group: left
    {illustration("il-magnifying-glass")}

    >>> group: right
    {
        -   came_from(-> role_rating.done):
            <b>How did you qualify for this job?</b>
            You're feeling strangely prepared to start working.
        -   // Default
            <b>What's going on?</b>
            Maybe there's a clue that can help you figure this out.
    }

    >>> choice-mode: list

    * [Check pockets]
        >>> background: basic
        You search your pockets and pull out an employee ID card.
        {bigger("What does it say?")}
        ++ [Next]
            -> role_revealed
    * [Search bag]
        >>> background: basic
        {big("Score! You pull out a crumpled resume.")}
        What education and training did you take to prepare for this role?
        ++ [Uncover education]
            >>> background: gradient
            {big("Ready to go!")}
            You’re confident you can rock your first day of work.
            +++ [Next]
                -> investigation
    * [Turn on phone]
        >>> background: basic
        -> DONE
    * ->
        -> DONE
    
    
=== role_revealed ===
    >>> background: gradient
    
    {bigger("You are a {roleNameLowercase(role)}.")}
    And your job starts today. Better get over there!
    
    >>> frame: employee-id
    
    + [Next]
    -
    {big("Investigation time: {roleName(role)}")}
    How do you feel about this career?
    
    + [Rate role]
        -> role_rating


VAR ratingJobDesc = 0
VAR ratingMonthlyPay = 0
VAR ratingHours = 0
VAR ratingVacation = 0
    
    
=== role_rating ===
    >>> mode: splash
    
    -> rate(-> ex1, ratingJobDesc) ->
    -> rate(-> ex2, ratingMonthlyPay) ->
    -> rate(-> ex3, ratingHours) ->
    -> rate(-> ex4, ratingVacation) ->
    
    Nicely done! Here's how you rated this role:
    Job description {rating(ratingJobDesc)}
    Monthly pay {rating(ratingMonthlyPay)}
    Hours of work a week {rating(ratingHours)}
    Vacation time {rating(ratingVacation)}
    
    + [Done] #cta-footer
        - (done)
        -> investigation
    
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


