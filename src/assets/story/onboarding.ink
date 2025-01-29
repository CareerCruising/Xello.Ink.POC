=== onboarding ===
    >>> background: basic
    >>> mode: hero
    >>> columns: 2
    
    <b>You suddenly notice a watch on your wrist...</b>
    It's beeping at you.
    
    >>> choice-mode: list
    
    + [Check for messages]
    + [Ignore it]
        It's still talking...
    + [Turn it off]
        Oops, you accidentally turned it on.
    -
    
    {bigger("A figure appears on the watch and says:")}
    Hello, I’m Ollex, your guide!
    I’ll give you some tips for figuring out this new life.
    
    + [Got it]
    -
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
