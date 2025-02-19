LIST Goals = MeetOllex, FirstDay, WorldOfWork, SetAnAspiration, PlaceToLive, FirstPayday, PayStatementChallenge

VAR prologueGoals = (MeetOllex, FirstDay, WorldOfWork, SetAnAspiration, PlaceToLive, FirstPayday, PayStatementChallenge)

VAR achievedGoals = ()

=== function getGoals() ===
    ~ return prologueGoals

=== function goalName(goal) ===
    {goal:
    - MeetOllex:
        ~ return "Meet Ollex"
    - FirstDay:
        ~ return "First day of work"
    - WorldOfWork:
        ~ return "World of work survey"
    - SetAnAspiration:
        ~ return "Set an aspiration"
    - PlaceToLive:
        ~ return "Find a place to live"
    - FirstPayday:
        ~ return "First payday"
    - PayStatementChallenge:
        ~ return "Pay statement challenge"
    - else:
        ~ return "<???>"
    }

=== function goalRewardXP(goal) ===
    ~ return 50