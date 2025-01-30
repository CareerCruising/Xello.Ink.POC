
LIST Templates = None,
                 Title,
                 StoryScene,
                 StoryBite,
                 ChapterTitle,
                 ContentIntro,
                 Video,
                 Progress,
                 MultiChoice,
                 Rating,
                 TrueFalse,
                 Summary,
                 RatingSummary,
                 ChanceCard,
                 DecisionPoint,
                 Result
                 
VAR currentTemplate = Templates.Title

=== function setTemplate(template) ===
    >>> template: None
    >>> template: {template}
    ~ currentTemplate = template
    ~ return



LIST Backgrounds = Basic,
                   Gradient

=== function setBackground(_background) ===
    >>> background: {_background}
    ~ return