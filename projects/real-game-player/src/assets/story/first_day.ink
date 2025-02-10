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
    ~ setTemplate(Templates.MultiChoice)
    
    <h1>Turns out, it's your first day on the job.</h1>
    <p>Your boss introduces you and asks you to say a few words. Everyone is staring at you!</p>
    
    + [Make a joke about the office]
        ~ setTemplate(Templates.ContentIntro)
        >>> illustration: il-group
        <h1>That was a little awkward.</h1>
        <p>Your joke about feeding llamas at the office lands a few laughs, and a few weird looks.</p>
    + [Wave but don't say anything]
        ~ setTemplate(Templates.ContentIntro)
        >>> illustration: il-group
        <h1>That was a little awkward.</h1>
        <p>Your silent waving gets a few weird looks from co-workers.</p>
    + [Offer a few quick facts about yourself]
        ~ setTemplate(Templates.ContentIntro)
        >>> illustration: il-group
        <h1>That was a little awkward.</h1>
        <p>You give a 2-minute intro and everyone smiles.</p>
    
    -
    
    -> DONE
    
    