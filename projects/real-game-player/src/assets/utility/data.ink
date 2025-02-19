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

VAR money = 0
=== function addMoney(num) ===
    >>> modify: money {num}
    ~ money += num
=== function takeMoney(num) ===
    >>> modify: money {-num}
    ~ money -= num

VAR expenses = 0
=== function addExpenses(num) ===
    ~ expenses += num

VAR xp = 0
=== function gainXP(num) ===
    >>> modify: xp {num}
    ~ xp += num

LIST Aspirations = None, Family, Career, Savings, Social, Lifestyle
VAR aspiration = Aspirations.None
=== function get_aspiration_illustration(_aspiration) ===
    {_aspiration:
    -   Aspirations.Family:
        ~ return "il-one-hand-heart"
    -   Aspirations.Career:
        ~ return "il-briefcase-stars"
    -   Aspirations.Social:
        ~ return "il-high-five"
    -   Aspirations.Savings:
        ~ return "il-piggy-bank-money"
    -   Aspirations.Lifestyle:
        ~ return "il-car"
    }
    ~ return "il-mountain-flag"
