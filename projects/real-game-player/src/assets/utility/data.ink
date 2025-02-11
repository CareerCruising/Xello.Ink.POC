EXTERNAL loadCareer(id)

=== function loadCareer(id) ===
    ~ return id

VAR lookup_result = ""
=== function getContent(lookup) ===
    >>> lookup: {lookup}
    ~ return lookup_result


VAR career = 5005
=== function modifyCareer(num) ===
    >>> modify: career {num}
    ~ modify(career, num)

VAR wellbeing = 5005
=== function modifyWellbeing(num) ===
    >>> modify: wellbeing {num}
    ~ modify(wellbeing, num)

VAR xp = 0
=== function gainXP(num) ===
    >>> modify: xp {num}
    ~ xp += num
