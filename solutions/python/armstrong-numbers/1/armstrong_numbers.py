import numbers
import math


def is_armstrong(number):
    check_number(number)
    sum = 0
    for nmbr in get_digits(number):
        sum += math.pow(nmbr, get_number_of_digits(number))
    if number == sum: return True
    return False


def get_digits(number):
    check_number(number)
    digits = []
    if number == 0:
        return digits
    while number > 0:
        digits.append(number%10)
        number = int(number / 10)
    digits.reverse()
    return digits


def get_number_of_digits(number):
    check_number(number)
    if number == 0: return 1
    return int(math.log(number, 10)) + 1


def check_number(number):
    if not isinstance(number, numbers.Number):
        raise ValueError('limit has to be a number')
    elif number < 0:
        raise ValueError('number must be greater than -1')