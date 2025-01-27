
=== intro ===
    >>> mode: hero
    
    {culture:
    - esUS:
        {biggest("El Juego Real")}
        Sueña en grande, gasta sabiamente.
    - frCA:
        {biggest("Le Real Game")}
        Dream grande, spend prudemment.
    - else:
        {biggest("The Real Game")}
        Dream big, spend wisely.
    }
    
    >>> background: gradient

    + [Play]
        -> passage


=== passage ===
    >>> mode: storybook
    >>> background: basic
    >>> accent: stars
    
    {culture:
    - esUS:
    - frCA:
    - else:
        You're all alone on a dark night.
        You venture down a strange alley, hoping to get home faster.
        Suddenly, you pass through a strange, shimmery film stretched across the passage.
        You look around in a panic. The world seems the same.
        But you feel... different. Older, more mature....
        Are you dreaming? Or is this real life?
    }
    
    + [Next]
        -> aw_snap
    
    
=== aw_snap ===
    >>> mode: hero
    >>> background: gradient
    
    {culture:
    - esUS:
    - frCA:
    - else:
        {illustration("il-directional-signs")}
        {big("Aw snap.")}
        Interdimensional time travel was not something you expected to do today.
    }
    
    + [Next]
        -> investigation
    
    
=== investigation ===
    >>> mode: hero
    >>> background: gradient
    >>> columns: 2
    
    >>> group: left
    {illustration("il-magnifying-glass")}

    >>> group: right
    {
        -   check_pockets and search_bag and turn_on_phone:
            -> onboarding
        -   came_from(-> role_rating.done):
            <b>How did you qualify for this job?</b>
            <small>You're feeling strangely prepared to start working.</small>
        -   // Default
            <b>What's going on?</b>
            <small>Maybe there's a clue that can help you figure this out.</small>
    }

    >>> choice-mode: list

    * (check_pockets) [Check pockets]
        >>> background: basic
        You search your pockets and pull out an employee ID card.
        {bigger("What does it say?")}
        ++ [Next]
            -> role_revealed
    * (search_bag) [Search bag]
        >>> background: basic
        {big("Score! You pull out a crumpled resume.")}
        What education and training did you take to prepare for this role?
        ++ [Uncover education]
            >>> background: gradient
            {big("Ready to go!")}
            You’re confident you can rock your first day of work.
            +++ [Next]
                -> investigation
    * (turn_on_phone) [Turn on phone]
        >>> background: basic
        >>> mode: hero
        
        (I don't know what happens here.)
        {big("It's not in the prototype.")}
        
        ++ [lol]
            -> investigation
    * ->
        -> onboarding


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
    >>> mode: hero
    
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


