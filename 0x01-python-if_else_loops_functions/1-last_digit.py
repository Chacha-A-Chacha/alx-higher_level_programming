#!/usr/bin/python3
import random

number = random.randint(-10000, 10000)
lastdigit = abs(number) % 10

if number < 0:
        lastdigit *= -1

        print("Last digit of {number} is ", end='')

        if lastdigit == 0:
                print(f"{lastdigit} and is 0")

        elif lastdigit > 5:
                    print(f"{lastdigit} and is greater than 5")

        else:
                print(f"{lastdigit} and is less than 6 and not 0")
