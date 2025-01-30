=== onboarding ===
    ~ setTemplate(StoryBite)
    ~ setBackground(Gradient)
    
    >>> illustration: il-smart-watch-ekg

    <b>You suddenly notice a watch on your wrist...</b>
    It's beeping at you.
    
    >>> choice-mode: list
    
    + [Check for messages]
    + [Ignore it]
    + [Turn it off]
    -
    
    >>> background: basic
    >>> columns: 2
    
    >>> group: left
    >>> group: right

    {bigger("A figure appears on the watch and says:")}
    <p>Hello, I’m Ollex, your guide!</p>
    <p>I’ll give you some tips for figuring out this new life.</p>
    
    + [Got it]
        -> begin_onboarding
        
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
