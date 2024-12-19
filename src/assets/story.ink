INCLUDE story/intro.ink

INCLUDE utility/typography.ink
INCLUDE utility/roles.ink
INCLUDE utility/flow.ink
INCLUDE utility/media.ink


-> init

LIST Roles = CivilEngineer
VAR role = CivilEngineer

=== init ===
    // Load user data from BE, in a proper version

    ~ role = CivilEngineer
    
    -> intro
