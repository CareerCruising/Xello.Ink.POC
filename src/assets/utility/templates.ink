
LIST Templates = Title,
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
    >>> template: {template}
    ~ currentTemplate = template
    ~ return



LIST Backgrounds = Basic,
                   Gradient

=== function setBackground(_background) ===
    >>> background: {_background}
    ~ return