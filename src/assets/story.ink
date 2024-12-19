INCLUDE story/intro.ink

INCLUDE utility/typography.ink
INCLUDE utility/roles.ink
INCLUDE utility/flow.ink
INCLUDE utility/media.ink


-> init

LIST Roles = CivilEngineer
VAR role = CivilEngineer

=== init ===
    // This is where we'd load user data, like this:

    ~ role = CivilEngineer
    
    -> intro


=== intro ===
    {changeComponent(Components.Hero)}
    
    {biggest("The Real Game")}
    Dream big, spend wisely.
    
    // >>> shift: right
    // >>> columns: 2
    >>> background: gradient
    
    + [Play]
        -> enter
