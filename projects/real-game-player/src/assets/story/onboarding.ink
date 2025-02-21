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
        <p>Hello, I'm Ollex! I am your guide. I'll help you figure out this new life.</p>
    + [Ignore it]
        -> ollex_appears ->
        <h1>The beeping gets louder. A figure appears on your watch and says:</h1>
        <p>Hello, hello! I'm Ollex, your guide. You will want to check in as you figure out this new life.</p>
    + [Turn it off]
        -> ollex_appears ->
        <h1>Your watch has no off button! A figure appears on it and says:</h1>
        <p>Nice try! I'm Ollex, your guide. You will want me around as you figure out this new life.</p>
    -
    
    -> begin_onboarding ->

    -> first_day
        
        
    = ollex_appears
        ~ setTemplate(Templates.StoryBiteIllustrated)
        >>> illustration: dude-white
        >>> delay: 1000
        ->->


=== begin_onboarding ===
    
    >>> background: gradient
    >>> ui: game

    -> show_tooltip("user-info", "1 of 4<br/>Track your life experience, upcoming goals, and achievements.") ->

    -> show_tooltip("bank", "2 of 4<br/>Monitor the money you make, spend, save, and invest.") ->
    
    -> show_tooltip("bills", "3 of 4<br/>Track the days until the next payday and bills due.") ->
    
    -> show_tooltip("bottom-right", "4 of 4<br/>You can find me here!") ->

    ->->
    