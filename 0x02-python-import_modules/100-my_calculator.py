#!/usr/bin/python3


if __name__ == "__main__":

    from calculator_1 import add, sub, mul, div
    import sys

    argv = sys.argv
    argc = len(argv)
    if argc - 1 != 3:
        print("Usage: ./100-mycalculator.py <a> <operator> <b>")
        sys.exit(1)

    ops = {
        "+": add(a, b),
        "-": sub(a, b),
        "*": mul(a, b),
        "/": div(a, b), }
    if argv[2] in ops.keys():
        a = int(argv[1])
        b = int(argv[3])
        print("{:d} {} {:d} = {:d}".format(a, argv[2], b, ops[argv[2]](a, b)))
    else:
        print("Unkown operator. Available operators: +, -, * and / ")
        exit(1)
