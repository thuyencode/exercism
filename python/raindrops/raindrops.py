# Based on my solution at the JavaScript track: https://exercism.org/tracks/javascript/exercises/raindrops/solutions/thuyencode

RAINDROPS = tuple({3: "Pling", 5: "Plang", 7: "Plong"}.items())


def convert(number: int) -> str:
    """Convert `number` into its corresponding raindrop sounds."""
    if number <= 1:
        return str(number)
    raindrop_sounds = ""

    for raindrop in RAINDROPS:
        if number % raindrop[0] == 0:
            raindrop_sounds += raindrop[1]

    return raindrop_sounds if len(raindrop_sounds) != 0 else str(number)
