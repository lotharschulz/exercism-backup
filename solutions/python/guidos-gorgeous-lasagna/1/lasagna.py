"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language:
https://en.wikipedia.org/wiki/Guido_van_Rossum

This is a module docstring, used to describe the functionality
of a module and its functions and/or classes.
"""

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(elapsed_bake_time=3):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time


def preparation_time_in_minutes(number_of_layers=1):
    """Calculate the preparation time.

    :param number_of_layers: int - number of lasagna layers.
    :return: int - preparation time derived by the multiple of number_of_layers and PREPARATION_TIME.
    
    Function that takes number_of_layers as input
    returns `number_of_layers` multiplied with `PREPARATION_TIME`.
    """
    return number_of_layers * PREPARATION_TIME


def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate the elapsed time.

    :param number_of_layers: int - number of lasagna layers.
    :param elapsed_bake_time: int - time has spent on baking already.
    :return: int - overall elapsed time derived by the multiple of preparation_time_in_minutes function call plus elapsed_bake_time.
    
    Function that takes number_of_layers as input
    returns `number_of_layers` multiplied with `PREPARATION_TIME`.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time