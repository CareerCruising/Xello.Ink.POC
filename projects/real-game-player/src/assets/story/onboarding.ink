=== onboarding ===
    ~ setTemplate(Templates.MultiChoice)
    ~ setBackground(Gradient)
    
    >>> illustration: il-smart-watch-ekg

    <h1>You suddenly notice a watch on your wrist...</h1>
    It's beeping at you.
    
    >>> choice-mode: list
    
    + [Check for messages]
        -> ollex_appears ->
        <h1>A figure appears on your watch and says:</h1>
    + [Ignore it]
        -> ollex_appears ->
        <h1>The beeping gets louder. A figure appears on your watch and says:</h1>
    + [Turn it off]
        -> ollex_appears ->
        <h1>Your watch has no off button! A figure appears on it and says:</h1>
    -

    <p>Hello, I’m Ollex, your guide!</p>
    <p>I’ll give you some tips for figuring out this new life.</p>
    
    + [Got it]
        -> begin_onboarding
        
        
    = ollex_appears
        ~ setTemplate(Templates.StoryBite)
        >>> delay: 1000
        >>> illustration: dude-white
        ->->
        
=== begin_onboarding ===
    
    >>> background: gradient
    >>> ui: game
    
    >>> show: experience
    >>> move-ollex: experience
    
    Ollex: 1 of 5<br/>Track your life experience, upcoming goals, and achievements. 
    
    + [Next]
    -
    
    >>> show: mood
    >>> move-ollex: mood
    
    Ollex: 2 of 5<br/>Make sure your work-life balance meters stay level.
    
    + [Next]
    -
    
    >>> show: footer
    >>> show: finances
    >>> move-ollex: finances
    
    Ollex: 3 of 5<br/>Monitor the money you make, spend, save, and invest.
    
    + [Next]
    -
    
    >>> show: upcoming
    >>> move-ollex: upcoming
    
    Ollex: 4 of 5<br/>Track the days until the next payday and bills due.
    
    >>> move-ollex: bottom-right
    Ollex: 5 of 5<br/>You can find me here!
    
    + [Next]
    -
    
    -> DONE
