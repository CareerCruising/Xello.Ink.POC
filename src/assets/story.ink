-> init

LIST Roles = CivilEngineer
VAR role = CivilEngineer

=== init ===
    // Load user data from BE, in a proper version
    ~ role = CivilEngineer
    -> ch6// intro


=== intro ===
    >>> mode: splash
    
    {biggest("The Real Game")}
    Dream big, spend wisely.
    
    // >>> shift: right
    // >>> columns: 2
    >>> background: gradient
    
    + [Play]
        -> ch1


=== ch1 ===
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
        -> ch2
    
    
=== ch2 ===
    >>> mode: splash
    >>> background: gradient
    
    {illustration("il-directional-signs")}
    {big("Aw snap.")}
    Interdimensional time travel was not something you expected to do today.
    
    + [Next]
        -> ch3
    
    
=== ch3 ===
    >>> mode: splash
    >>> background: gradient
    >>> columns: 2
    
    >>> group: left
    {illustration("il-magnifying-glass")}

    >>> group: right
    {
        -   came_from(-> ch6.ratedRole):
            <b>"How did you qualify for this job?</b>
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
            -> ch4
    * [Search bag]
        >>> background: basic
        {big("Score! You pull out a crumpled resume.")}
        What education and training did you take to prepare for this role?
        ++ [Uncover education]
            -> DONE
    * [Turn on phone]
        >>> background: basic
        -> DONE
    * ->
        -> DONE
    
    
=== ch4 ===
    >>> background: gradient
    
    {bigger("You are a {roleNameLowercase(role)}.")}
    And your job starts today. Better get over there!
    
    >>> frame: employee-id
    
    + [Next]
        -> ch5
        

=== ch5 ===
    {big("Investigation time: {roleName(role)}")}
    How do you feel about this career?
    
    + [Rate role]
        -> ch6


VAR ratingJobDesc = 0
VAR ratingMonthlyPay = 0
VAR ratingHours = 0
VAR ratingVacation = 0

=== function rating(_rating) ===
    {_rating:
        - 0: ☆☆☆☆☆
        - 1: ★☆☆☆☆
        - 2: ★★☆☆☆
        - 3: ★★★☆☆
        - 4: ★★★★☆
        - 5: ★★★★★
    }
    ~ return
    
    
=== ch6 ===
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
        - (ratedRole)
        -> ch3
    
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



=== rate(-> instructions, ref out) ===
    >>> group: left
    >>> frame: career-page({role})
    
    >>> group: right
    <- instructions
    
    >>> choice-mode: rating
    
    + [1]
        ~ out = 1
    + [2]
        ~ out = 2
    + [3]
        ~ out = 3
    + [4]
        ~ out = 4
    + [5]
        ~ out = 5
    
    -
    ->->

=== function big(text) ===
    <h3>{text}</h3>
    ~ return
    
=== function bigger(text) ===
    <h2>{text}</h2>
    ~ return
    
=== function biggest(text) ===
    <h1>{text}</h1>
    ~ return

=== function roleName(_role) ===
    {_role:
        - CivilEngineer: Civil Engineer
    }
    ~ return
=== function roleNameLowercase(_role) ===
    {_role:
        - CivilEngineer: civil engineer
    }
    ~ return

=== function illustration(il) ===
    // <taco-illustration illustration="{illustration}"></taco-illustration>
    >>> illustration: {il}
    ~ return

=== function came_from(-> divert)
    ~ return TURNS_SINCE(divert) < 1 && TURNS_SINCE(divert) != -1
    
