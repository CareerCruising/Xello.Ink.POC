
=== function big(text) ===
    <h3>{text}</h3>
    ~ return
    
=== function bigger(text) ===
    <h2>{text}</h2>
    ~ return
    
=== function biggest(text) ===
    <h1>{text}</h1>
    ~ return


=== function rating(_rating) ===
    {_rating:
        - 0: ☆☆☆☆☆
        - 1: ★☆☆☆☆
        - 2: ★★☆☆☆
        - 3: ★★★☆☆
        - 4: ★★★★☆
        - 5: ★★★★★
    }
    ~ return
