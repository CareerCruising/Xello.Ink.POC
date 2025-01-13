INCLUDE story/intro.ink

INCLUDE utility/typography.ink
INCLUDE utility/roles.ink
INCLUDE utility/flow.ink
INCLUDE utility/media.ink
INCLUDE story/onboarding.ink

VAR debug = true

LIST Roles = CivilEngineer
VAR role = CivilEngineer

LIST Cultures = enCA, frCA, enUS, esUS
VAR culture = Cultures.enCA

-> init


=== init ===
    // This is where we'd load user data, like this:

    ~ role = CivilEngineer
    ~ culture = Cultures.enCA
    
    -> intro // onboarding // 

