INCLUDE story/intro.ink
INCLUDE story/onboarding.ink
INCLUDE story/first_day.ink

INCLUDE utility/typography.ink
INCLUDE utility/roles.ink
INCLUDE utility/flow.ink
INCLUDE utility/media.ink
INCLUDE utility/templates.ink
INCLUDE utility/data.ink
INCLUDE utility/swing.ink
INCLUDE goals/goals.ink




VAR debug = true

VAR role = "Civil engineer"

LIST Cultures = enCA, frCA, enUS, esUS, enGB
VAR culture = Cultures.enCA

VAR environment = "inky"


-> begin_onboarding


=== init ===
    >>> ui: simple
    // This is where we'd load user data, like this:

    // This environment variable is changed on the app end
    {environment == "inky":
        // ...so anything here only runs in Inky, not the app
        ~ role = "Civil engineer"
        ~ culture = Cultures.enCA
    - else:
        ~ loadCareer(95)
    }
    
    -> intro // onboarding // 

