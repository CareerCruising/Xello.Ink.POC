

=== function came_from(-> divert)
    ~ return TURNS_SINCE(divert) < 1 && TURNS_SINCE(divert) != -1
    

=== rate(-> instructions, ref out) ===
    ~ setTemplate(Templates.Rating)
    
    <- instructions

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


VAR actionViewTitle = ""
VAR actionViewNext = "Next"

VAR onCloseActionView = -> onboarding
=== action_view(-> redirect, -> complete, -> back) ===
    ~ onCloseActionView = back

    >>> action-view: open
    ~ actionViewTitle = "World of work survey"

    -> redirect ->

    >>> action-view: close
    
    -> complete
    
